import { toast } from "sonner";

import { USERS } from "@/components/constants";
import { getChatMessage } from "@/actions/chat-message";
import { Chat } from "@/components/chat";

export default async function ChatsPage({ params }) {
    const { id } = params;
    const currentUser = USERS[1];
    const messages = await getChatMessage(currentUser.id, id);

    if (messages.error) {
        toast.error(messages.error);
        return;
    }

    return (
        <Chat
            messages={messages.success}
            chatId={id}
            currentUserId={currentUser.id}
        />
    );
}
