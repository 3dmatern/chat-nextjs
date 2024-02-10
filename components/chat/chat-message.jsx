export function ChatMessage({ message }) {
    const { text, sender } = message;

    return (
        <div
            className={`mb-4 ${sender === "user" ? "text-right" : "text-left"}`}
        >
            <div
                className={`w-max p-2 rounded ${
                    sender === "user"
                        ? "ml-auto bg-blue-500 text-white"
                        : "bg-gray-300"
                }`}
            >
                {text}
            </div>
        </div>
    );
}
