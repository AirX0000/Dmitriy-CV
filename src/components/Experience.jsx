import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
            {children}
        </motion.div>
    )
}

export default function Experience({ data }) {
    return (
        <section className="py-28 relative" id="experience">
            <div className="max-w-[1200px] mx-auto px-6">
                <Reveal>
                    <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-accent mb-3">
                        <span className="w-6 h-px bg-accent" />
                        {data.sectionLabels.experience}
                    </div>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="font-heading text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-5">{data.sectionLabels.experienceTitle}</h2>
                </Reveal>
                <Reveal delay={0.15}>
                    <p className="text-text-muted text-base max-w-xl mb-16">{data.sectionLabels.experienceSubtitle}</p>
                </Reveal>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto pl-12">
                    {/* Vertical line */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-border to-transparent" />

                    {data.experience.map((exp, i) => (
                        <Reveal key={i} delay={i * 0.06}>
                            <div className="relative pb-12 last:pb-0 group">
                                {/* Dot */}
                                <div className="absolute -left-12 top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-accent transition-all group-hover:bg-accent group-hover:shadow-[0_0_16px_rgba(0,212,170,0.4)]" />

                                {/* Year */}
                                <div className="font-heading text-xs font-bold text-accent tracking-wider mb-2">{exp.year}</div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{ x: 8, borderColor: 'rgba(255,255,255,0.12)' }}
                                    className="bg-surface border border-border rounded-2xl p-7 transition-all duration-300 shadow-none hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
                                >
                                    <h3 className="font-heading text-lg font-bold text-text-primary mb-1">{exp.position}</h3>
                                    <div className="text-sm font-medium text-accent mb-2.5">{exp.company}</div>
                                    <p className="text-sm text-text-muted leading-relaxed">{exp.description}</p>
                                    {exp.badge && (
                                        <span className="inline-block mt-3 px-3 py-1 bg-accent-glow border border-accent/15 rounded-full text-[11px] font-semibold text-accent">
                                            {exp.badge}
                                        </span>
                                    )}
                                </motion.div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
