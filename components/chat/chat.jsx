"use client";

import { useState } from "react";

import { ChatSenderMessage } from "@/components/chat/chat-sender-message";
import { ChatLayout } from "@/components/chat/ui/chat-layout";
import { ChatMessages } from "@/components/chat/chat-messages";
import { USERS } from "@/components/constants";
import { MESSAGES } from "@/components/constants";

export function Chat({ chatId }) {
    const currentUser = USERS[1];
    const [messages, setMessages] = useState(
        MESSAGES.filter((m) => m.chatId === chatId)
    );

    const handleSendMessage = (message) => {
        setMessages((prev) => {
            const updMessages = prev.slice();
            updMessages.push({
                id: Date.now(),
                timestamp: new Date().getTime(),
                ...message,
            });
            return updMessages;
        });
    };
    return (
        <ChatLayout>
            <ChatMessages messages={messages} currentUserId={currentUser.id} />
            <ChatSenderMessage
                chatId={chatId}
                userId={currentUser.id}
                onSendMessage={handleSendMessage}
            />
        </ChatLayout>
    );
}
