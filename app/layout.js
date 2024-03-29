import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

import { Navbar } from "@/components/navbar";

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
        <html lang="ru">
            <body
                className={cn(
                    "bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <Navbar />
                {children}
                <Toaster />
            </body>
        </html>
    );
}
