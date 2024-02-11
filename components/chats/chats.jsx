import { ChatsLayout } from "@/components/chats/ui/chats-layout";
import { CHATS, CHAT_MEMBERS, MESSAGES } from "@/components/chats/constants";
import { ChatCard } from "./ui/chat-card";
import { USERS } from "../users/constants";

export function Chats({ currentUser }) {
    return (
        <ChatsLayout>
            {CHATS.map((chat) => (
                <ChatCard
                    key={chat.id}
                    user={USERS.find(
                        (u) =>
                            u.id ===
                            CHAT_MEMBERS.find(
                                (cm) =>
                                    cm.chatId === chat.id &&
                                    cm.userId !== currentUser.id
                            ).userId
                    )}
                    lastMessage={
                        MESSAGES.filter((m) => m.chatId === chat.id)[
                            MESSAGES.filter((m) => m.chatId === chat.id)
                                .length - 1
                        ]
                    }
                />
            ))}
        </ChatsLayout>
    );
}
