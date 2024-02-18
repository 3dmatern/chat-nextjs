import { z } from "zod";

export const ChatSchema = z
    .object({
        userId: z.string(),
        companionId: z.string(),
    })
    .refine((data) => {
        if (!data.userId) return false;
        return true;
    })
    .refine((data) => {
        if (!data.companionId) return false;
        return true;
    });
