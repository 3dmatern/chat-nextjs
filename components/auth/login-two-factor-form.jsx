"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { LoginTwoFactorSchema } from "@/schemas";
import { loginTwoFactor } from "@/actions/login";

import { CardWrapper } from "@/components/auth/card-wrapper";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/auth/ui/form-error";
import { Button } from "@/components/ui/button";

export function LoginTwoFactorForm({ email, onCloseTwoFactorForm }) {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState("");

    const form = useForm({
        defaultValues: {
            email,
            twoFactor: "",
        },
    });

    const onSubmit = (values) => {
        setError((prev) => "");

        startTransition(async () => {
            const result = await loginTwoFactor({
                ...values,
                twoFactor: +values.twoFactor,
            });

            if (result?.error) {
                setError((prev) => result.error);
            }

            if (result?.success) {
                onCloseTwoFactorForm();
            }

            form.reset();
        });
    };

    return (
        <CardWrapper
            headerTitle="Sign in to Chat | Next JS"
            headerLabel="Enter your code from email"
            backButtonLabel="Ещё нет аккаунта?"
            backButtonHref="/auth/register"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="twoFactor"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        placeholder="Enter your code..."
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormError message={error} />
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full"
                    >
                        Send
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
