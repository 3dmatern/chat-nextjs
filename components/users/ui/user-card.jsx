import Image from "next/image";
import Link from "next/link";

export function UserCard({ user }) {
    return (
        <Link
            href="#"
            className="flex items-center gap-3 py-2 px-3 hover:bg-slate-100"
        >
            <Image
                src={user.avatar}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
            />
            <div className="flex flex-col text-start">
                <span className="font-semibold">
                    {user.firstname} {user.lastname}
                </span>
                <span className="text-xs">
                    {new Date(user.created_at).toDateString()}
                </span>
            </div>
        </Link>
    );
}