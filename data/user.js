import { db } from "@/lib/db";

export const getUserByEmail = async (email) => {
    try {
        const user = await db.user.findUnique({
            where: {
                email,
            },
        });

        return user;
    } catch (error) {
        return null;
    }
};

export const getAllUsersNotCurrentUser = async (userId) => {
    try {
        const users = await db.user.findMany({
            where: {
                NOT: {
                    id: userId,
                },
            },
        });

        return users;
    } catch (error) {
        return null;
    }
};

export const getUserById = async (id) => {
    try {
        const user = await db.user.findUnique({
            where: {
                id,
            },
        });

        return user;
    } catch (error) {
        return null;
    }
};
