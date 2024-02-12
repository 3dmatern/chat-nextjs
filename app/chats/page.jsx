import { Chats } from "@/components/chats";
import { USERS } from "@/components/constants";

export default function ChatsPage() {
    const currentUser = USERS[1];
    return <Chats currentUser={currentUser} />;
}
