import { ChatMessage } from "@/components/chat/ui/chat-message";
import { ChatLayoutMessages } from "@/components/chat/ui/chat-layout-messages";

export function ChatMessages({ messages, currentUserId }) {
    return (
        <ChatLayoutMessages>
            {messages?.map((message) => (
                <ChatMessage
                    key={message.id}
                    message={message}
                    currentUserId={currentUserId}
                />
            ))}
        </ChatLayoutMessages>
    );
}
