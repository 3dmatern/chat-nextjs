"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { ChatSchema } from "@/schemas";
import { getUserById } from "@/data/user";

export const createChat = async (values) => {
    const validatedFields = ChatSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Заполните недостающие поля.",
        };
    }

    const { userId, companionId } = validatedFields.data;
    const existingUser = await getUserById(userId);
    const existingCompanion = await getUserById(companionId);

    if (!existingUser || !existingCompanion) {
        return {
            error: "Вы не можете создать чат с этим пользователем.",
        };
    }

    try {
        const { id } = await db.chat.create({
            data: {
                userId,
            },
        });
        const createChatMember = await db.chatMember.createMany({
            data: [
                { chatId: id, userId: existingUser.id },
                { chatId: id, userId: existingCompanion.id },
            ],
        });

        if (createChatMember.count < 2) {
            return {
                error: "Не удалось создать чат.",
            };
        }

        revalidatePath("/chats", "layout");

        return {
            success: true,
        };
    } catch (error) {
        console.error("Error creating chat: ", error);

        return {
            error: "Ошибка при создании чата!",
        };
    }
};
