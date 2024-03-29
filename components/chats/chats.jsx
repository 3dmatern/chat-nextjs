import { ChatsLayout } from "@/components/chats/ui/chats-layout";
import { CHATS, CHAT_MEMBERS } from "@/components/chats/constants";
import { ChatCard } from "@/components/chats/ui/chat-card";
import { USERS } from "@/components/constants";
import { MESSAGES } from "@/components/constants";

export function Chats({ currentUser }) {
    return (
        <ChatsLayout>
            {CHATS.map((chat) => (
                <ChatCard
                    key={chat?.id}
                    user={USERS.find(
                        (u) =>
                            u.id ===
                            CHAT_MEMBERS.find(
                                (cm) =>
                                    cm?.chatId === chat?.id &&
                                    cm?.userId !== currentUser?.id
                            ).userId
                    )}
                    lastMessage={
                        MESSAGES.filter((m) => m.chatId === chat?.id)[
                            MESSAGES.filter((m) => m.chatId === chat?.id)
                                .length - 1
                        ]
                    }
                />
            ))}
        </ChatsLayout>
    );
}
