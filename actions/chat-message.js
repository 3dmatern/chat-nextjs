"use server";

import { revalidatePath } from "next/cache";

import { ChatMessageSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getChatById } from "@/data/chat";
import { getUserById } from "@/data/user";
import { getMessageByChatId } from "@/data/chat-message";

export async function createChatMessage(values) {
    const validatedFields = ChatMessageSchema.safeParse(values);

    if (!validatedFields.success) return null;

    const { text, chatId, userId } = validatedFields.data;
    const existingChat = await getChatById(chatId);

    if (!existingChat) return null;

    const existingUser = await getUserById(userId);

    if (!existingUser || existingChat.userId !== existingUser.id) return null;

    try {
        await db.chatMessage.create({
            data: {
                text,
                chatId: existingChat.id,
                userId: existingUser.id,
            },
        });

        revalidatePath(`/chat/${existingChat.id}`);
    } catch (error) {
        console.error("Error creating chat message: ", error);

        return {
            error: "Ошибка при отправке сообщения!",
        };
    }
}

export const getChatMessage = async (userId, chatId) => {
    const existingUser = await getUserById(userId);

    if (!existingUser) {
        return {
            error: "У вас нет доступа к чату.",
        };
    }

    const existingChat = await getChatById(chatId);

    if (!existingChat || existingChat.userId !== existingUser.id) {
        return {
            error: "Чат не существует.",
        };
    }

    try {
        const messages = await getMessageByChatId(existingChat.id);

        return {
            success: messages,
        };
    } catch (error) {
        console.error("Error receiving chat: ", error);
        return {
            error: "Ошибка загрузки чата!",
        };
    }
};
