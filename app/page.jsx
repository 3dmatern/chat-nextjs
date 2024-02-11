import { Chat } from "@/components/chat";
import { ModeToggle } from "@/components/mode-toogle";

export default function Home() {
    return (
        <main>
            <ModeToggle />
            <Chat />
        </main>
    );
}
