import Image from "next/image";
import Link from "next/link";

export function ChatCard({ user, lastMessage }) {
    return (
        <Link
            href={`/chats/${lastMessage?.chatId}`}
            className="w-[360px] flex items-center gap-3 py-2 px-3 hover:bg-slate-100"
        >
            <Image
                src={user?.avatar}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
            />
            <div className="w-full text-start relative overflow-x-hidden">
                <div className="flex items-center justify-between truncate">
                    <span className="font-semibold">
                        {user?.name} {user?.lastname}
                    </span>
                    <span className="text-xs">
                        {String(
                            Math.floor(
                                new Date(lastMessage?.timestamp).getHours()
                            )
                        ).padStart(2, "0")}
                        :
                        {String(
                            Math.floor(
                                new Date(lastMessage?.timestamp).getMinutes()
                            )
                        ).padStart(2, "0")}
                    </span>
                </div>
                <span className="block text-xs">{lastMessage?.text}</span>
            </div>
        </Link>
    );
}
