import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
});

export const LoginTwoFactorSchema = z.object({
    email: z.string().email(),
    twoFactor: z.number().min(10000),
    twoFactor: z.number().max(99999),
});
