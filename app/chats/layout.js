export const metadata = {
    title: "Чаты | Next App",
    description: "Chat developed on Next.js using websockets",
};

export default function ChatsLayout({ children }) {
    return <main className="mt-5">{children}</main>;
}
