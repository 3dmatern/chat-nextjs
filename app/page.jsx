import { MenuIcon } from "@/components/icons/menu-icon";

export default function Home() {
    return (
        <main className="h-[calc(100vh-73px)] flex items-center justify-center mt-5">
            <span className="flex items-center gap-1 flex-wrap text-center">
                Скоро здесь будет контент, а пока что нажмите на
                <span className="inline-block">
                    <MenuIcon />
                </span>
                в правом верхнем углу экрана и перейдите по ссылкам :)
            </span>
        </main>
    );
}
