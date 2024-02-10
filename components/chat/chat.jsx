import { ChatMessage } from "./chat-message";
import { MESSAGES } from "./constants";

export function Chat() {
    return (
        <div className="bg-gray-200 p-4">
            {MESSAGES.map((message, index) => (
                <ChatMessage key={index} message={message} />
            ))}
        </div>
    );
}
