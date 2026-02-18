import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Hero({ data }) {
    const navigate = useNavigate()

    return (
        <section className="min-h-screen flex items-center relative overflow-hidden pt-20" id="hero">
            {/* Background glows */}
            <div className="absolute -top-1/3 -right-[15%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,var(--color-accent-glow)_0%,transparent_70%)] pointer-events-none animate-pulse opacity-50" />
            <div className="absolute -bottom-1/4 -left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,212,170,0.06)_0%,transparent_70%)] pointer-events-none opacity-40" />

            <div className="max-w-[1200px] mx-auto px-6 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-glow border border-accent/20 rounded-full text-xs font-medium text-accent mb-8">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                        {data.badge}
                    </div>

                    {/* Big Name */}
                    <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.02] tracking-tight mb-4">
                        {data.name.split(' ')[0]}
                        <br />
                        <span className="bg-gradient-to-r from-accent to-[#00f5d4] bg-clip-text text-transparent">
                            {data.name.split(' ').slice(1).join(' ')}
                        </span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-text-muted font-normal mb-4 leading-relaxed">{data.title}</p>

                    <p className="text-base text-text-dim max-w-lg mx-auto leading-relaxed mb-12">
                        {data.heroSubtitle}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center flex-wrap">
                        <motion.button
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => navigate(`/cv?lang=en`)}
                            className="flex items-center gap-2.5 px-8 py-4 bg-accent text-bg font-semibold text-sm rounded-full hover:shadow-[0_12px_40px_rgba(0,212,170,0.3)] transition-shadow"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg>
                            {data.sectionLabels.downloadCV}
                        </motion.button>
                        <motion.a
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            href="#about"
                            onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}
                            className="flex items-center gap-2.5 px-8 py-4 border border-border-hover text-text-primary font-medium text-sm rounded-full hover:border-accent hover:text-accent hover:bg-accent-glow2 transition-all"
                        >
                            {data.sectionLabels.learnMore}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                            </svg>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Stats row */}
                <div className="flex gap-12 sm:gap-16 justify-center mt-16 pt-10 border-t border-border max-w-lg mx-auto">
                    {data.stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="font-heading text-4xl font-extrabold text-accent leading-none">{s.value}</div>
                            <div className="text-xs text-text-muted mt-2">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
