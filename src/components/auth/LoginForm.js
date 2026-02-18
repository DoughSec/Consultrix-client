const LoginForm = () => {
    return (
        <section className="flex h-full w-full text-white">
            <div className="flex h-full w-full flex-col justify-center bg-black p-10">
                <h2 className="text-2xl font-semibold">Sign in</h2>
                <p className="mt-2 text-sm">
                    Enter your email and we&apos;ll send your verification code.
                </p>

                <form className="mt-8 w-full max-w-md space-y-4 ">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full placeholder:text-white rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-slate-900"
                            placeholder="you@company.com"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-gradient-to-r from-[#E97DF7] to-[#5A1FBE] px-4 py-2.5 text-md font-semibold text-white transition hover:bg-slate-800"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </section>
    );
};

export default LoginForm;
