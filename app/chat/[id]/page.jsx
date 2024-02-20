import { USERS } from "@/components/constants";
import { getChatMessage } from "@/actions/chat-message";
import { Chat } from "@/components/chat";

export default async function ChatsPage({ params }) {
    const { id } = params;
    const currentUser = USERS[1];
    const messages = await getChatMessage(currentUser.id, id);

    return (
        <Chat messages={messages} chatId={id} currentUserId={currentUser.id} />
    );
}
