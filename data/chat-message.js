import { db } from "@/lib/db";

export const getMessageByChatId = async (chatId) => {
    try {
        const messages = await db.chatMessage.findMany({
            where: {
                chatId,
            },
        });
        return messages;
    } catch (error) {
        return null;
    }
};
