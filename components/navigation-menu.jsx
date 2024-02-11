import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon } from "@/components/icons/menu-icon";

export function NavigationMenu() {
    return (
        <Sheet>
            <SheetTrigger className="size-4">
                <MenuIcon />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader className="mb-5">
                    <SheetTitle>Chat | Next JS</SheetTitle>
                </SheetHeader>
                <SheetClose asChild>
                    <Link
                        href="/users"
                        className="block font-semibold hover:text-slate-500 transition-colors"
                    >
                        Пользователи
                    </Link>
                </SheetClose>
                <SheetClose asChild>
                    <Link
                        href="/chats"
                        className="block font-semibold hover:text-slate-500 transition-colors"
                    >
                        Чаты
                    </Link>
                </SheetClose>
            </SheetContent>
        </Sheet>
    );
}
