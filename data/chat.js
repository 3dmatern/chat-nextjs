import { db } from "@/lib/db";

export const getChatMemberIDs = async ({ userId, companionId }) => {
    try {
        const chat = await db.chatMember.findUnique({
            where: { userId, companionId },
        });

        return chat;
    } catch (error) {
        return null;
    }
};
