"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ChatMessageSchema } from "@/schemas/chat-message-schema";
import { createChatMessage } from "@/actions/chat-message";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ChatSenderMessage({ chatId, userId }) {
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(ChatMessageSchema),
        defaultValues: {
            chatId,
            userId,
            text: "",
        },
    });

    const onSubmit = (values) => {
        startTransition(() => {
            createChatMessage(values);
        });
        form.reset();
    };

    return (
        <div className="max-w-96 mx-auto h-[10%]">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full flex items-center justify-center gap-4"
                >
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem className="block w-full">
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        type="text"
                                        placeholder="Введите сообщение..."
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button>Отправить</Button>
                </form>
            </Form>
        </div>
    );
}
