import avatarPic1 from "@/components/users/images/avatar_1.jpg";
import avatarPic2 from "@/components/users/images/avatar_2.jpg";
import avatarPic3 from "@/components/users/images/avatar_3.jpg";

export const USERS = [
    {
        id: "qwe",
        firstname: "Денис",
        lastname: "Матерн",
        username: "@d_matern",
        email: "denismatern@gmail.com",
        password: "123456",
        avatar: avatarPic1,
        premium: false,
        confirmed_account: false,
        confirmed_email: true,
        created_at: new Date(1995, 0, 27, 16).getTime(),
    },
    {
        id: "asd",
        firstname: "Виктория",
        lastname: "Мирошниченко",
        username: "Pudding279",
        email: "miroshnichenkovictoria343@gmail.com",
        password: "654321",
        avatar: avatarPic2,
        premium: false,
        confirmed_account: false,
        confirmed_email: true,
        created_at: new Date(2001, 6, 17).getTime(),
    },
    {
        id: "zxc",
        firstname: "Мир",
        lastname: "Танков",
        username: "official_mirtankovru",
        email: "mirtankov@tanki.su",
        password: "123456",
        avatar: avatarPic3,
        premium: false,
        confirmed_account: true,
        confirmed_email: true,
        created_at: new Date(2013, 0, 1).getTime(),
    },
];

export const MESSAGES = [
    {
        id: "vbn",
        chatId: "rty",
        userId: "qwe",
        text: "Привет!",
        timestamp: new Date(2024, 1, 11, 19, 45).getTime(),
    },
    {
        id: "uio",
        chatId: "rty",
        userId: "asd",
        text: "Привет! Как дела?",
        timestamp: new Date(2024, 1, 11, 20, 1).getTime(),
    },
    {
        id: "jkl",
        chatId: "rty",
        userId: "qwe",
        text: "Хорошо, спасибо!",
        timestamp: new Date(2024, 1, 11, 20, 59).getTime(),
    },
    {
        id: "mpq",
        chatId: "fgh",
        userId: "zxc",
        text: "Все побед!",
        timestamp: new Date(2024, 0, 27, 16).getTime(),
    },
];
