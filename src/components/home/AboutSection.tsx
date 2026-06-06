import Link from "next/link";

export default function AboutSection() {
    return (
        <section id="about" className="flex items-center
            px-6 md:pr-24 lg:pl-16 lg:pr-40
            h-[calc(100svh-90px)] md:h-[calc(100svh-94px)] lg:h-[calc(100svh-120px)]">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 w-full items-center">

                {/* Left — text */}
                <div className="flex flex-col gap-8">
                    <p className="font-mono text-sm text-accent/50 tracking-wide select-none">
                        <span className="text-accent/30">// </span>about_me
                    </p>
                    <div className="flex items-stretch gap-2.5">
                        <span className="w-0.5 bg-accent-2 shrink-0" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-1.6px]">
                            I build digital experiences where logic meets intuition
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl font-medium text-text/80 leading-relaxed">
                        I&#39;m Shelly, a multidisciplinary creative and software engineering student.
                        Passionate about building things that speak to both the mind and the heart.
                    </p>
                    <Link href="/" className="btn-brand self-start">
                        Learn more
                    </Link>
                </div>

                {/* Right — IDE window */}
                <div
                    className="hidden md:flex flex-col rounded-lg border border-border/30 overflow-hidden bg-surface"
                    aria-hidden="true"
                >
                    {/* Window chrome */}
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/20 bg-surface-raised">
                        <span className="w-3 h-3 rounded-full bg-mac-red/70" />
                        <span className="w-3 h-3 rounded-full bg-mac-yellow/70" />
                        <span className="w-3 h-3 rounded-full bg-mac-green/70" />
                        <span className="ml-4 font-mono text-xs text-text/30">shelly.ts</span>
                    </div>
                    {/* Code */}
                    <div className="p-5 font-mono text-xs leading-7 flex gap-5">
                        <div className="text-text/20 select-none text-right shrink-0">
                            {Array.from({ length: 10 }, (_, i) => (
                                <div key={i}>{i + 1}</div>
                            ))}
                        </div>
                        <div>
                            <div>
                                <span className="text-syn-keyword">const </span>
                                <span className="text-text/80">shelly</span>
                                <span className="text-text/40"> = {"{"}</span>
                            </div>
                            <div className="ml-4">
                                <span className="text-syn-key">role</span>
                                <span className="text-text/35">: </span>
                                <span className="text-accent/70">"developer + artist"</span>
                                <span className="text-text/35">,</span>
                            </div>
                            <div className="ml-4">
                                <span className="text-syn-key">focus</span>
                                <span className="text-text/35">: </span>
                                <span className="text-accent/70">"web + creativity"</span>
                                <span className="text-text/35">,</span>
                            </div>
                            <div className="ml-4">
                                <span className="text-syn-key">passion</span>
                                <span className="text-text/35">: </span>
                                <span className="text-accent/70">"things that feel"</span>
                                <span className="text-text/35">,</span>
                            </div>
                            <div className="ml-4">
                                <span className="text-syn-key">status</span>
                                <span className="text-text/35">: </span>
                                <span className="text-accent/70">"always building"</span>
                            </div>
                            <div><span className="text-text/40">{"}"}</span></div>
                            <div className="mt-2">
                                <span className="text-syn-keyword/60">export default </span>
                                <span className="text-text/65">shelly</span>
                            </div>
                            <div className="mt-1">
                                <span className="inline-block w-2 h-[0.85em] bg-accent/50 cursor-blink align-middle" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}