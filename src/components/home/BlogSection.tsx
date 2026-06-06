import Link from "next/link";

export default function BlogSection() {
    return (
        <section id="blog" className="flex items-center
            px-6 md:pr-24 lg:pl-16 lg:pr-40
            h-[calc(100svh-90px)] md:h-[calc(100svh-94px)] lg:h-[calc(100svh-120px)]">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 w-full items-center">

                {/* Left — text */}
                <div className="flex flex-col gap-8">
                    <p className="font-mono text-sm text-accent/50 tracking-wide select-none">
                        <span className="text-accent/30">// </span>blog
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-stretch gap-2.5">
                            <span className="w-0.5 bg-accent-2 shrink-0" />
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-1.6px]">
                                Coming soon
                            </h2>
                        </div>
                        <p className="text-lg font-medium text-text/70 leading-relaxed">
                            A space where I reflect on learning, building, and growing as a developer and creative.
                        </p>
                    </div>
                    <Link href="/" className="btn-brand self-start">
                        Read
                    </Link>
                </div>

                {/* Right — terminal window */}
                <div
                    className="hidden md:flex flex-col rounded-lg border border-border/30 overflow-hidden bg-surface"
                    aria-hidden="true"
                >
                    {/* Window chrome */}
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/20 bg-surface-raised">
                        <span className="w-3 h-3 rounded-full bg-mac-red/70" />
                        <span className="w-3 h-3 rounded-full bg-mac-yellow/70" />
                        <span className="w-3 h-3 rounded-full bg-mac-green/70" />
                        <span className="ml-4 font-mono text-xs text-text/30">terminal — bash</span>
                    </div>
                    {/* Terminal body */}
                    <div className="p-5 font-mono text-xs leading-7">
                        <div className="flex items-center gap-2">
                            <span className="text-accent/45">~</span>
                            <span className="text-accent-2/60">$</span>
                            <span className="text-text/50">ls blog/posts/</span>
                        </div>
                        <div className="text-text/25 ml-6 mt-0.5">No files found.</div>

                        <div className="flex items-center gap-2 mt-3">
                            <span className="text-accent/45">~</span>
                            <span className="text-accent-2/60">$</span>
                            <span className="text-text/50">git status blog/</span>
                        </div>
                        <div className="ml-6 mt-0.5 flex flex-col gap-0.5">
                            <div className="text-text/25">On branch <span className="text-accent/40">main</span></div>
                            <div className="text-text/25">Changes in progress:</div>
                            <div className="text-mac-green/50 ml-2">modified: &nbsp;thoughts/*.md</div>
                        </div>

                        <div className="flex items-center gap-2 mt-3">
                            <span className="text-accent/45">~</span>
                            <span className="text-accent-2/60">$</span>
                            <span className="cursor-blink text-accent/50">_</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}