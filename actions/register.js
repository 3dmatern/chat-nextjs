"use server";

import { db } from "@/lib/db";

import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationToken } from "@/lib/mailBegetSMTP";

export const register = async (values) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Введите email",
        };
    }

    const { email } = validatedFields.data;
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {
            error: "Email уже используется!",
        };
    }

    try {
        await db.user.create({
            data: {
                email,
            },
        });

        const verificationToken = await generateVerificationToken(email);
        console.log("verificationToken: ", verificationToken);
        const response = await sendVerificationToken(
            verificationToken.email,
            verificationToken.token
        );
        console.log("response: ", response);

        if (response) {
            return response;
        }
    } catch (error) {
        console.error("Ошибка при регистрации пользователя: ", error);

        return {
            error: "Что-то пошло не так при регистрации.",
        };
    }
};
