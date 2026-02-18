import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
            {children}
        </motion.div>
    )
}

export default function Contact({ data }) {
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
        setTimeout(() => { setSent(false); e.target.reset() }, 2500)
    }

    return (
        <section className="py-28 bg-bg-alt relative" id="contact">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                {/* Left: Form */}
                <div>
                    <Reveal>
                        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-accent mb-3">
                            <span className="w-6 h-px bg-accent" />
                            {data.sectionLabels.contact}
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-heading text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-5">{data.sectionLabels.contactTitle}</h2>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p className="text-text-muted text-base max-w-md mb-10">{data.sectionLabels.contactSubtitle}</p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <input
                                type="text"
                                placeholder={data.sectionLabels.yourName}
                                required
                                className="w-full px-5 py-4 bg-surface border border-border rounded-xl text-text-primary text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent-glow2 placeholder:text-text-dim"
                            />
                            <input
                                type="email"
                                placeholder={data.sectionLabels.yourEmail}
                                required
                                className="w-full px-5 py-4 bg-surface border border-border rounded-xl text-text-primary text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent-glow2 placeholder:text-text-dim"
                            />
                            <textarea
                                placeholder={data.sectionLabels.yourMessage}
                                required
                                rows="4"
                                className="w-full px-5 py-4 bg-surface border border-border rounded-xl text-text-primary text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent-glow2 placeholder:text-text-dim resize-y"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className={`self-start flex items-center gap-2.5 px-7 py-3.5 font-semibold text-sm rounded-full transition-all ${sent ? 'bg-green-500 text-white' : 'bg-accent text-bg hover:shadow-[0_12px_40px_rgba(0,212,170,0.3)]'
                                    }`}
                            >
                                {sent ? (
                                    <>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        {data.sectionLabels.messageSent}
                                    </>
                                ) : (
                                    <>
                                        {data.sectionLabels.sendMessage}
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </Reveal>
                </div>

                {/* Right: Info */}
                <Reveal delay={0.15} className="pt-3">
                    <h3 className="font-heading text-xl font-bold mb-6">{data.sectionLabels.contactDetails}</h3>

                    <div className="space-y-0">
                        {[
                            { icon: '📱', label: 'Phone', value: data.phone },
                            { icon: '📍', label: 'Location', value: data.location },
                        ].filter(item => item.value).map((item, i) => (
                            <div key={i} className="flex items-center gap-4 py-4 border-b border-border last:border-b-0">
                                <div className="w-12 h-12 flex items-center justify-center bg-surface border border-border rounded-xl text-xl flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="text-xs text-text-muted">{item.label}</div>
                                    <div className="text-sm font-medium text-text-primary">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-8">
                        {[
                            { icon: '💬', label: 'Telegram' },
                            { icon: '💼', label: 'LinkedIn' },
                        ].map((s, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                title={s.label}
                                whileHover={{ y: -3, borderColor: 'var(--color-accent)' }}
                                className="w-12 h-12 flex items-center justify-center bg-surface border border-border rounded-xl text-xl transition-all hover:bg-accent-glow2"
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
