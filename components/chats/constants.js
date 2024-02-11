export const CHATS = [
    { id: "rty", created_at: "qwe" },
    { id: "fgh", created_at: "qwe" },
];

export const CHAT_MEMBERS = [
    { chatId: CHATS[0].id, userId: "qwe" },
    { chatId: CHATS[0].id, userId: "asd" },
    { chatId: CHATS[1].id, userId: "zxc" },
];

export const MESSAGES = [
    {
        id: "vbn",
        chatId: CHATS[0].id,
        userId: "qwe",
        text: "Привет!",
        timestamp: new Date(2024, 1, 11, 19, 45).getTime(),
    },
    {
        id: "uio",
        chatId: CHATS[0].id,
        userId: "asd",
        text: "Привет! Как дела?",
        timestamp: new Date(2024, 1, 11, 20, 1).getTime(),
    },
    {
        id: "jkl",
        chatId: CHATS[0].id,
        userId: "qwe",
        text: "Хорошо, спасибо!",
        timestamp: new Date(2024, 1, 11, 20, 59).getTime(),
    },
    {
        id: "mpq",
        chatId: CHATS[1].id,
        userId: "zxc",
        text: "Все побед!",
        timestamp: new Date(2024, 0, 27, 16).getTime(),
    },
];
