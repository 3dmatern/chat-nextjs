import { Chat } from "@/components/chat";

export default function ChatsPage({ params }) {
    const { id } = params;

    return <Chat chatId={id} />;
}
