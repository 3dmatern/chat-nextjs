import { verification } from "@/actions/verification";
import { VerificationForm } from "@/components/auth/verification-form";

export const metadata = {
    title: "Верификация в Chat | Next JS",
};

export default async function VerificationPage({ searchParams }) {
    const { token } = searchParams;
    const data = await verification(token);

    return <VerificationForm error={data?.error} success={data?.success} />;
}
