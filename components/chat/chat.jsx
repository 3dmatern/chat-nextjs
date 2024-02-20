"use client";

import { toast } from "sonner";

import { ChatSenderMessage } from "@/components/chat/chat-sender-message";
import { ChatLayout } from "@/components/chat/ui/chat-layout";
import { ChatMessages } from "@/components/chat/chat-messages";

export function Chat({ messages, chatId, currentUserId }) {
    if (messages?.error) {
        toast.error(messages.error);
        return;
    }

    return (
        <ChatLayout>
            <ChatMessages
                messages={messages.success}
                currentUserId={currentUserId}
            />
            <ChatSenderMessage chatId={chatId} userId={currentUserId} />
        </ChatLayout>
    );
}
