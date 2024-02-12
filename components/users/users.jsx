import { USERS } from "@/components/constants";

import { UserCard } from "@/components/users/ui/user-card";
import { UsersLayout } from "@/components/users/ui/users-layout";

export function Users() {
    return (
        <UsersLayout>
            {USERS.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </UsersLayout>
    );
}
