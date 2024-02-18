"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { createChat } from "@/actions/chat";

import { UserCard } from "@/components/users/ui/user-card";
import { UsersLayout } from "@/components/users/ui/users-layout";

export function Users({ currentUserId, users }) {
    const router = useRouter();
    const handleCreateChat = async (values) => {
        const chat = await createChat(values);

        if (chat?.error) {
            toast.error(chat.error);
            return;
        }

        router.push(`/chat/${chat.success}`);
    };

    return (
        <UsersLayout>
            {users?.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    onClick={() =>
                        handleCreateChat({
                            userId: currentUserId,
                            companionId: user.id,
                        })
                    }
                />
            ))}
        </UsersLayout>
    );
}
