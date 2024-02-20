import { ChatSenderMessage } from "@/components/chat/chat-sender-message";
import { ChatLayout } from "@/components/chat/ui/chat-layout";
import { ChatMessages } from "@/components/chat/chat-messages";

export function Chat({ messages, chatId, currentUserId }) {
    return (
        <ChatLayout>
            <ChatMessages messages={messages} currentUserId={currentUserId} />
            <ChatSenderMessage chatId={chatId} userId={currentUserId} />
        </ChatLayout>
    );
}
