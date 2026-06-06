import Link from "next/link";

export default function ContactSection() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center gap-12.5 px-6 lg:px-16
        h-[calc(100svh-90px)] md:h-[calc(100svh-94px)] lg:h-[calc(100svh-120px)]">
            {/* TOP */}
            <div className="flex flex-col items-center justify-center gap-5">
                <p className="font-mono text-sm text-accent/50 tracking-wide select-none" aria-hidden="true">
                    <span className="text-accent/30">// </span>let&#39;s build something
                </p>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1.6px] text-center">
                    Are you interested in my work?
                </h2>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col justify-center items-center gap-2.5">
                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-center">
                    Let&#39;s connect!
                </p>
            </div>
            {/* BUTTON */}
            <Link href="/" className="btn-brand">
                Contact me
            </Link>
        </section>
    );
}