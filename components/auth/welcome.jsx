import Image from "next/image";

import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import welcomeMobileApp1 from "@/components/auth/images/welcome_mobile_app_1.png";
import welcomeMobileApp2 from "@/components/auth/images/welcome_mobile_app_2.png";
import { AndroidIcon } from "@/components/auth/icons/android-icon";
import { WelcomeLink } from "@/components/auth/ui/welcome-link";

export function Welcome({ className }) {
    return (
        <Card className={cn("text-center border-none rounded-none", className)}>
            <CardHeader>
                <CardTitle className="lg:text-xl">
                    Chat | Next JS скоро для мобильных устройств
                </CardTitle>
                <CardDescription>
                    Будет возможность установить официальное мобильное
                    приложение Chat | Next JS и оставайтся в курсе новостей
                    ваших друзей, где бы вы ни находились.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex items-start justify-center">
                <Image src={welcomeMobileApp1} alt="screen app 1" width={183} />
                <Image
                    src={welcomeMobileApp2}
                    alt="screen app 2"
                    width={198}
                    className="-ml-8"
                />
            </CardContent>
            <CardFooter className="flex items-center justify-center gap-7">
                <WelcomeLink href="https://play.google.com/store/search?q=unicorn&c=apps">
                    <AndroidIcon /> Google Play
                </WelcomeLink>
                <WelcomeLink href="https://www.rustore.ru/">
                    <AndroidIcon /> RuStore
                </WelcomeLink>
                <WelcomeLink href="https://www.apple.com/apple-pay/">
                    <AndroidIcon /> Apple Play
                </WelcomeLink>
            </CardFooter>
        </Card>
    );
}
