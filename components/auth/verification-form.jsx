"use client";

import { BeatLoader } from "react-spinners";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/auth/ui/form-success";
import { FormError } from "@/components/auth/ui/form-error";

export function VerificationForm({ success, error }) {
    return (
        <CardWrapper
            headerTitle="Verified to Chat | Next JS"
            backButtonLabel="Войти"
            backButtonHref="/"
        >
            <div className="flex items-center justify-center w-full">
                {!success && !error && <BeatLoader />}
                {success && <FormSuccess message={success} />}
                {error && <FormError message={error} />}
            </div>
        </CardWrapper>
    );
}
