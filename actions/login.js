"use server";

import { getUserByEmail } from "@/data/user";
import { LoginSchema, LoginTwoFactorSchema } from "@/schemas";

export const login = async (values) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Введите email" };
    }

    const { email } = validatedFields.data;
    const existingUser = await getUserByEmail(email);

    // if (!existingUser) {
    //     return { error: "Проверьте введенный email" };
    // }

    try {
        const twoFactorInt = randomInt();
        console.log(twoFactorInt);

        return { success: email };
    } catch (error) {
        console.error("User authentication error: ", error);

        return { error: "Что-то пошло не так при аутентификации" };
    }
};

export const loginTwoFactor = async (values) => {
    console.log(values);
    const validatedFields = LoginTwoFactorSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Неверный код" };
    }

    const { email, twoFactor } = validatedFields.data;
    console.log(email, twoFactor);
};

function randomInt() {
    return Math.floor(Math.random() * (100000 - 10000) + 10000);
}
