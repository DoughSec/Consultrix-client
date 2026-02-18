
export default function AuthLayout({ children }) {
    return (
        <div className="flex ">
            <main className="w-full h-screen">{children}</main>
        </div>
    );
}
