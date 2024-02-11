import { USERS } from "../users/constants";

export function ChatMessage({ message }) {
    const currentUser = USERS[1];
    const { userId, text, timestamp } = message;

    return (
        <div
            className={`mb-4 ${
                userId === currentUser.id ? "text-right" : "text-left"
            }`}
        >
            <div
                className={`w-max flex items-end gap-4 p-2 rounded ${
                    userId === currentUser.id
                        ? "ml-auto bg-blue-500"
                        : "bg-gray-300"
                }`}
            >
                {text}
                <span className="text-xs">
                    {String(
                        Math.floor(new Date(timestamp).getHours())
                    ).padStart(2, "0")}
                    :
                    {String(
                        Math.floor(new Date(timestamp).getMinutes())
                    ).padStart(2, "0")}
                </span>
            </div>
        </div>
    );
}
