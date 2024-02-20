import Link from "next/link";

import { NavigationMenu } from "@/components/navbar/navigation-menu";

export function Navbar() {
    return (
        <nav className=" border-b">
            <div className="container mx-auto flex items-center justify-between py-3 px-5">
                <NavigationMenu />
                <Link href="/">
                    <h1 className="text-xl font-semibold">Chat | Next JS</h1>
                </Link>
            </div>
        </nav>
    );
}
