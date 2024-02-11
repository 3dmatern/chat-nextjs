import { Chats } from "@/components/chats/chats";
import { USERS } from "@/components/users/constants";

export default function ChatsPage() {
    const currentUser = USERS[1];
    return <Chats currentUser={currentUser} />;
}
