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

function SkillBar({ level, inView }) {
    return (
        <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${level}%` } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="h-full bg-gradient-to-r from-accent to-[#00f5d4] rounded-full"
            />
        </div>
    )
}

export default function Skills({ data }) {
    return (
        <section className="py-28 relative" id="skills">
            <div className="max-w-[1200px] mx-auto px-6">
                <Reveal>
                    <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-accent mb-3">
                        <span className="w-6 h-px bg-accent" />
                        {data.sectionLabels.skills}
                    </div>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="font-heading text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-5">{data.sectionLabels.skillsTitle}</h2>
                </Reveal>
                <Reveal delay={0.15}>
                    <p className="text-text-muted text-base max-w-xl mb-16">{data.sectionLabels.skillsSubtitle}</p>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.skills.map((skill, i) => {
                        const ref = useRef(null)
                        const inView = useInView(ref, { once: true, margin: '-40px' })

                        return (
                            <Reveal key={i} delay={i * 0.05}>
                                <motion.div
                                    ref={ref}
                                    whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.12)' }}
                                    className="bg-surface border border-border rounded-2xl p-8 text-center transition-all duration-300 relative overflow-hidden group"
                                >
                                    {/* Bottom accent line on hover */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-t transition-all duration-300 group-hover:w-3/5" />

                                    <div className="text-4xl mb-4">{skill.icon}</div>
                                    <div className="font-heading text-base font-bold text-text-primary mb-2">{skill.name}</div>
                                    <div className="text-xs text-text-muted leading-relaxed">{skill.desc}</div>
                                    <SkillBar level={skill.level} inView={inView} />
                                </motion.div>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
