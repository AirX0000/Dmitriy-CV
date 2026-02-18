import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function parseBio(text) {
    // Simple markdown bold parser
    const parts = text.split(/\*\*(.*?)\*\*/g)
    return parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="text-text-primary font-semibold">{part}</strong> : part
    )
}

export default function About({ data }) {
    return (
        <section className="py-28 relative" id="about">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                {/* Left: Text */}
                <div>
                    <Reveal>
                        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-accent mb-3">
                            <span className="w-6 h-px bg-accent" />
                            {data.sectionLabels.about}
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-heading text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-6">
                            {data.sectionLabels.aboutTitle}
                        </h2>
                    </Reveal>
                    {data.bio.map((p, i) => (
                        <Reveal key={i} delay={0.15 + i * 0.1}>
                            <p className="text-text-muted text-base leading-relaxed mb-5">{parseBio(p.text)}</p>
                        </Reveal>
                    ))}
                </div>

                {/* Right: Bento Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {data.bento.map((card, i) => (
                        <Reveal key={i} delay={i * 0.08} className={card.featured ? 'col-span-2' : ''}>
                            <motion.div
                                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.12)' }}
                                className={`bg-surface border border-border rounded-2xl p-7 transition-all duration-300 relative overflow-hidden group cursor-default
                  ${card.featured ? 'bg-gradient-to-br from-surface to-surface-2' : ''}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-glow2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="text-3xl mb-4">{card.icon}</div>
                                    <div className="font-heading text-2xl font-extrabold text-text-primary leading-tight mb-1">{card.value}</div>
                                    <div className="text-sm text-text-muted">{card.label}</div>
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
