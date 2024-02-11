import { ChatMessage } from "./chat-message";
import { MESSAGES } from "./constants";

import { ChatLayout } from "./ui/chat-layout";

export function Chat() {
    return (
        <ChatLayout>
            {MESSAGES.map((message, index) => (
                <ChatMessage key={index} message={message} />
            ))}
        </ChatLayout>
    );
}
