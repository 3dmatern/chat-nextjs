import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/themes-provider";

export const fontSans = FontSans({
    subsets: ["cyrillic", "latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Chat | Next App",
    description: "Chat developed on Next.js using websockets",
    link: {
        rel: "apple-touch-icon",
        href: "%PUBLIC_URL%/apple-touch-icon.png",
    },
    link: {
        rel: "manifest",
        href: "%PUBLIC_URL%/apple-touch-icon.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
