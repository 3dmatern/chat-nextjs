"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/auth/ui/form-success";
import { FormError } from "@/components/auth/ui/form-error";

import { RegisterSchema } from "@/schemas";
import { register } from "@/actions/register";

export function RegisterForm() {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (values) => {
        setError("");
        setSuccess("");

        startTransition(async () => {
            const result = await register(values);

            if (result.error) {
                setError((prev) => result.error);
            }

            if (result.success) {
                setSuccess((prev) => result.success);
            }
        });

        form.reset();
    };

    return (
        <CardWrapper
            headerTitle="Sign up to Chat | Next JS"
            headerLabel="You will use your email to log into your account."
            backButtonLabel="Уже есть аккаунт?"
            backButtonHref="/"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"
                                        placeholder="Enter your email..."
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormSuccess message={success} />
                    <FormError message={error} />
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full"
                    >
                        Sign up
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
