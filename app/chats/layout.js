export const metadata = {
    title: "Чаты | Next App",
    description: "Chat developed on Next.js using websockets",
};

export default function ChatsLayout({ children }) {
    return <main className="h-[calc(100vh-73px)] mt-5 px-5">{children}</main>;
}
