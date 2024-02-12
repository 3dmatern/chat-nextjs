import { z } from "zod";

export const ChatMessageSchema = z
    .object({
        chatId: z.string(),
        userId: z.string(),
        text: z.string(),
    })
    .refine((data) => {
        if (!data.chatId) {
            return false;
        }

        return true;
    })
    .refine((data) => {
        if (!data.userId) {
            return false;
        }

        return true;
    })
    .refine((data) => {
        if (!data.text) {
            return false;
        }

        return true;
    });
