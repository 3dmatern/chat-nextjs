"use client";

import { useState } from "react";

import { UiContainer } from "@/components/uikit/ui-container";
import { Welcome } from "@/components/auth";
import { LoginForm } from "@/components/auth";
import { LoginTwoFactorForm } from "@/components/auth";

export default function Home() {
    const [{ isTwoFactor, email }, setTwoFactorData] = useState({
        isTwoFactor: false,
        email: "",
    });

    const handleOpenTwoFactorForm = (email) => {
        setTwoFactorData((prev) => ({
            ...prev,
            isTwoFactor: true,
            email,
        }));
    };

    const handleCloseTwoFactorForm = () => {
        setTwoFactorData((prev) => ({
            ...prev,
            isTwoFactor: false,
            email: "",
        }));
    };

    return (
        <UiContainer className="h-[calc(100vh-73px)] gap-5">
            <Welcome className="w-[50%]" />
            {!isTwoFactor ? (
                <LoginForm onOpenTwoFactorForm={handleOpenTwoFactorForm} />
            ) : (
                <LoginTwoFactorForm
                    email={email}
                    onCloseTwoFactorForm={handleCloseTwoFactorForm}
                />
            )}
        </UiContainer>
    );
}
