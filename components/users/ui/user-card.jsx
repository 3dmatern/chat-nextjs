"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function UserCard({ user, onClick }) {
    return (
        <Button
            variant="outline"
            onClick={onClick}
            className="flex items-center gap-3 py-6 rounded-none border-none shadow-none"
        >
            <Avatar>
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="text-[10px]">avatar</AvatarFallback>
            </Avatar>

            <div className="flex flex-col text-start">
                <span className="font-semibold">
                    {user?.name} {user?.lastname}
                </span>
                <span className="text-xs text-slate-400">
                    {new Date(user?.createdAt).toDateString()}
                </span>
            </div>
        </Button>
    );
}
