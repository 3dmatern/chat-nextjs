import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/ui/header";
import { BackButton } from "./ui/back-button";

export function CardWrapper({
    children,
    headerTitle,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}) {
    return (
        <Card>
            <CardHeader>
                <Header title={headerTitle} label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>
                <BackButton href={backButtonHref} label={backButtonLabel} />
            </CardFooter>
        </Card>
    );
}
