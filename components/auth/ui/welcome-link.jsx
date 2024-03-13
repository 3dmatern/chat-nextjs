import Link from "next/link";

import { cn } from "@/lib/utils";

export function WelcomeLink({ href, className, children }) {
    return (
        <Link
            href={href}
            target="_blank"
            className={cn(
                `
                    flex items-center gap-2 text-sm text-teal-900 
                    hover:text-teal-700 transition-colors active:scale-95
                `,
                className
            )}
        >
            {children}
        </Link>
    );
}
