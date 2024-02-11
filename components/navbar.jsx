import Link from "next/link";

import { NavigationMenu } from "@/components/navigation-menu";

export function Navbar() {
    return (
        <nav className="flex items-center justify-between py-3 px-5 border-b">
            <NavigationMenu />
            <Link href="/">
                <h1 className="text-xl font-semibold">Chat | Next JS</h1>
            </Link>
        </nav>
    );
}
