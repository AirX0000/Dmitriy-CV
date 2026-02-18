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

export default function Education({ data }) {
    return (
        <section className="py-28 relative" id="education">
            <div className="max-w-[1200px] mx-auto px-6">
                <Reveal>
                    <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-accent mb-3">
                        <span className="w-6 h-px bg-accent" />
                        {data.sectionLabels.education}
                    </div>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="font-heading text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-14">{data.sectionLabels.educationTitle}</h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.education.map((edu, i) => (
                        <Reveal key={i} delay={i * 0.08}>
                            <motion.div
                                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.12)' }}
                                className="bg-surface border border-border rounded-2xl p-9 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)]"
                            >
                                <div className="text-3xl mb-4">{edu.icon}</div>
                                <h3 className="font-heading text-lg font-bold text-text-primary mb-1">{edu.degree}</h3>
                                <div className="text-sm font-medium text-accent mb-3">{edu.school}</div>
                                <div className="text-xs text-text-muted mb-4">{edu.year}</div>
                                <p className="text-sm text-text-muted leading-relaxed">{edu.details}</p>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
