import { Chat } from "@/components/chats";
import { ModeToggle } from "@/components/mode-toogle";

export default function Home() {
    return (
        <main>
            <div className="py-2 px-4 text-end">
                <ModeToggle />
            </div>
            <Chat />
        </main>
    );
}
