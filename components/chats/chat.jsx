import { ChatMessage } from "@/components/chats/chat-message";
import { MESSAGES } from "@/components/chats/constants";

import { ChatLayout } from "@/components/chats/ui/chat-layout";

export function Chat({ chatId }) {
    return (
        <ChatLayout>
            {MESSAGES.filter((c) => c.chatId === chatId).map((message) => (
                <ChatMessage key={message.id} message={message} />
            ))}
        </ChatLayout>
    );
}
