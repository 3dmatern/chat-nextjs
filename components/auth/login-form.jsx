"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";

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

export function LoginForm({ onOpenTwoFactorForm }) {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState("");

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (values) => {
        setError((prev) => "");

        startTransition(async () => {
            const result = await login(values);

            if (result.error) {
                setError((prev) => result.error);
            }

            if (result.success) {
                onOpenTwoFactorForm(result.success);
            }

            form.reset();
        });
    };

    return (
        <CardWrapper
            headerTitle="Sign in to Chat | Next JS"
            headerLabel="Enter your email to log into your account."
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

                    <FormError message={error} />
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full"
                    >
                        Sign in
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
