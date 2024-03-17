import { UiContainer } from "@/components/uikit/ui-container";

export const metadata = {
    title: "Аутентификация Chat | Next JS",
};

export default function AuthLayout({ children }) {
    return (
        <UiContainer className="h-[calc(100vh-73px)]">{children}</UiContainer>
    );
}
