import { LoginContainer } from "@/components/auth/ui/login-container";
import { Welcome } from "./welcome";

export function Login() {
    return (
        <LoginContainer>
            <Welcome className="w-[50%]" /> Login
        </LoginContainer>
    );
}
