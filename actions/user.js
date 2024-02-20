"use server";

import { getAllUsersNotCurrentUser, getUserById } from "@/data/user";

export const getUsersNotCurrentUser = async (userId) => {
    const existingUser = await getUserById(userId);

    if (!existingUser) {
        return {
            error: "Авторизуйтесь для выбора собеседника!",
        };
    }

    try {
        const users = await getAllUsersNotCurrentUser(existingUser.id);

        return users;
    } catch (error) {
        console.error("Error receiving companions: ", error);

        return {
            error: "Ошибка получения собеседников!",
        };
    }
};
