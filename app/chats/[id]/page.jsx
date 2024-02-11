import { Chat } from "@/components/chats";

export default function ChatsPage({ params }) {
    const { id } = params;

    return <Chat chatId={id} />;
}
