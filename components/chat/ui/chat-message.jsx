export function ChatMessage({ message, currentUserId }) {
    const { userId, text, timestamp } = message;

    return (
        <div
            className={`mb-4 ${
                userId === currentUserId ? "text-right" : "text-left"
            }`}
        >
            <div
                className={`w-max flex items-end gap-4 p-2 rounded ${
                    userId === currentUserId
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
