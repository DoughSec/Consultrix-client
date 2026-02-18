import LightPillar from '@/components/LightPillar';

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-6">
            <div className="grid h-[calc(100dvh-20rem)] w-full max-w-6xl overflow-hidden rounded-3xl shadow-2xl md:grid-cols-2">
                <section className="relative hidden overflow-hidden md:block">
                    <LightPillar
                        topColor="#5227FF"
                        bottomColor="#FF9FFC"
                        intensity={1}
                        rotationSpeed={0.3}
                        glowAmount={0.002}
                        pillarWidth={3}
                        pillarHeight={0.4}
                        noiseIntensity={0.5}
                        pillarRotation={55}
                        interactive={false}
                        mixBlendMode="screen"
                        quality="high"
                    />

                    <div className="absolute inset-x-0 bottom-0 z-20 p-10 text-white">
                        <p className="text-xs uppercase tracking-[0.35em] text-white/70">Consultrix</p>
                        <h1 className="mt-3 text-4xl font-semibold leading-tight">Learn clearly. Ship confidently.</h1>
                        <p className="mt-4 max-w-md text-sm text-white/80">
                            Your student portal for assignments, progress, and communication.
                        </p>
                    </div>
                </section>

                <section className="flex items-center justify-center bg-white-900/70 px-6 py-10">
                    <div className="flex w-full max-w-md flex-col rounded-2xl bg-white p-10 text-slate-900 shadow-xl ring-1 ring-slate-200">
                        <h2 className="text-2xl font-semibold">Sign in</h2>
                        <p className="mt-2 text-sm text-slate-600">Welcome back. Enter your credentials to continue.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
