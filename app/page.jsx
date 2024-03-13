import { UiContainer } from "@/components/uikit/ui-container";
import { Welcome } from "@/components/auth";
import { RegisterForm } from "@/components/auth";
import { LoginForm } from "@/components/auth";

export default function Home() {
    return (
        <UiContainer className="h-[calc(100vh-73px)]">
            <Welcome className="w-[50%]" />
            <RegisterForm />
        </UiContainer>
    );
}
