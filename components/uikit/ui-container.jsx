import { cn } from "@/lib/utils";

export function UiContainer({ className, children }) {
    return (
        <main
            className={cn(
                `
                    container mx-auto mt-5 h-full flex flex-wrap items-center justify-center
                `,
                className
            )}
        >
            {children}
        </main>
    );
}
