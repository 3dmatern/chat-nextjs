import { getUsersNotCurrentUser } from "@/actions/user";
import { USERS } from "@/components/constants";
import { Users } from "@/components/users";

export const metadata = {
    title: "Пользователи | Next App",
    description: "Chat developed on Next.js using websockets",
};

export default async function UsersPage() {
    const currentUser = USERS[1];
    const users = await getUsersNotCurrentUser(currentUser.id);

    return <Users currentUserId={currentUser.id} users={users} />;
}
