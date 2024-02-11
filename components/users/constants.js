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
        email: "miroshnichenkovictoryia343@gmail.com",
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
