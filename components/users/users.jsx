import { UserCard } from "@/components/users/ui/user-card";
import { UsersLayout } from "@/components/users/ui/users-layout";

export function Users({ users }) {
    return (
        <UsersLayout>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </UsersLayout>
    );
}
