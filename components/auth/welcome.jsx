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
            <CardContent className="relative w-max mx-auto">
                <Image src={welcomeMobileApp1} alt="screen app 1" width={183} />
                <Image
                    src={welcomeMobileApp2}
                    alt="screen app 2"
                    width={198}
                    className="absolute top-0 left-[175px]"
                />
            </CardContent>
            <CardFooter className="flex items-center justify-center gap-7">
                <p>Google Play</p>
                <p>RuStore</p>
                <p>Apple Play</p>
            </CardFooter>
        </Card>
    );
}
