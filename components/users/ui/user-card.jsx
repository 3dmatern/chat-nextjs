import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserCard({ user }) {
    return (
        <Link
            href="#"
            className="flex items-center gap-3 py-2 px-3 hover:bg-slate-100"
        >
            <Avatar>
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="text-[10px]">avatar</AvatarFallback>
            </Avatar>

            <div className="flex flex-col text-start">
                <span className="font-semibold">
                    {user?.firstname} {user?.lastname}
                </span>
                <span className="text-xs">
                    {new Date(user?.createdAt).toDateString()}
                </span>
            </div>
        </Link>
    );
}
