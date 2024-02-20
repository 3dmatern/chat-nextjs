export function LoginContainer({ children }) {
    return (
        <main className="container mx-auto h-[calc(100vh-73px)] flex items-center justify-center mt-5">
            {children}
        </main>
    );
}