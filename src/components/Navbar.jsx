import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LANGS = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'uz', label: 'UZ' },
]

export default function Navbar({ data, lang, setLang }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    const links = [
        { href: '#about', label: data.sectionLabels.about },
        { href: '#experience', label: data.sectionLabels.experience },
        { href: '#skills', label: data.sectionLabels.skills },
        { href: '#education', label: data.sectionLabels.education },
        { href: '#contact', label: data.sectionLabels.contact },
    ]

    const scrollTo = (id) => {
        setMenuOpen(false)
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300
        ${scrolled ? 'py-3 bg-bg/85 backdrop-blur-2xl border-b border-border' : 'py-5'}`}>
                <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="font-heading text-lg font-bold text-text-primary tracking-tight">
                        D<span className="text-accent">.</span>Bogdanyuk
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {links.map(l => (
                            <button
                                key={l.href}
                                onClick={() => scrollTo(l.href)}
                                className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors relative group"
                            >
                                {l.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}

                        {/* Language Switcher */}
                        <div className="flex items-center gap-0.5 bg-surface rounded-full p-0.5">
                            {LANGS.map(l => (
                                <button
                                    key={l.code}
                                    onClick={() => setLang(l.code)}
                                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${lang === l.code ? 'bg-accent text-bg' : 'text-text-muted hover:text-text-primary'
                                        }`}
                                >
                                    {l.label}
                                </button>
                            ))}
                        </div>

                        {/* CV Button */}
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => navigate(`/cv?lang=${lang}`)}
                            className="flex items-center gap-2 px-5 py-2.5 bg-accent text-bg font-semibold text-sm rounded-full hover:shadow-[0_8px_30px_rgba(0,212,170,0.3)] transition-all"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                            {data.sectionLabels.downloadCV}
                        </motion.button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col gap-1.5 p-1">
                        <span className={`w-6 h-0.5 bg-text-primary rounded transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-6 h-0.5 bg-text-primary rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-6 h-0.5 bg-text-primary rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
                    >
                        {links.map(l => (
                            <button
                                key={l.href}
                                onClick={() => scrollTo(l.href)}
                                className="text-2xl font-heading font-bold text-text-primary hover:text-accent transition-colors"
                            >
                                {l.label}
                            </button>
                        ))}

                        <div className="flex gap-1 bg-surface rounded-full p-1">
                            {LANGS.map(l => (
                                <button
                                    key={l.code}
                                    onClick={() => setLang(l.code)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase ${lang === l.code ? 'bg-accent text-bg' : 'text-text-muted'}`}
                                >
                                    {l.label}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => { setMenuOpen(false); navigate(`/cv?lang=${lang}`) }}
                            className="px-6 py-3 bg-accent text-bg font-semibold rounded-full"
                        >
                            {data.sectionLabels.downloadCV}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
