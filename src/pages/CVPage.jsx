import { useState, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PROFILE from '../data/profile'

export default function CVPage() {
    const [searchParams] = useSearchParams()
    const initialLang = searchParams.get('lang') || 'en'
    const [lang, setLang] = useState(initialLang)
    const [downloading, setDownloading] = useState(false)
    const cvRef = useRef(null)

    const data = PROFILE[lang]
    const labels = {
        en: { title: 'Curriculum Vitae', download: 'Download PDF', back: '← Back to Portfolio', switchLabel: 'Language' },
        ru: { title: 'Резюме', download: 'Скачать PDF', back: '← На главную', switchLabel: 'Язык' },
        uz: { title: 'Rezyume', download: 'PDF yuklab olish', back: '← Bosh sahifaga', switchLabel: 'Til' },
    }
    const l = labels[lang]

    const handleDownload = async () => {
        setDownloading(true)
        try {
            const html2pdf = (await import('html2pdf.js')).default
            const opt = {
                margin: 0,
                filename: `${data.fullName.replace(/\s+/g, '_')}_CV_${lang.toUpperCase()}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, letterRendering: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
            }
            await html2pdf().set(opt).from(cvRef.current).save()
        } catch (e) {
            console.error('PDF generation error:', e)
        } finally {
            setDownloading(false)
        }
    }

    return (
        <div className="min-h-screen bg-bg">
            {/* ── Toolbar ── */}
            <div className="sticky top-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
                <div className="max-w-[900px] mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="text-text-muted hover:text-accent text-sm font-medium transition-colors">
                        {l.back}
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* Language Switcher */}
                        <div className="flex items-center gap-1 bg-surface rounded-full p-1">
                            {['en', 'ru', 'uz'].map(code => (
                                <button
                                    key={code}
                                    onClick={() => setLang(code)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${lang === code
                                        ? 'bg-accent text-bg'
                                        : 'text-text-muted hover:text-text-primary'
                                        }`}
                                >
                                    {code}
                                </button>
                            ))}
                        </div>

                        {/* Download Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleDownload}
                            disabled={downloading}
                            className="flex items-center gap-2 px-5 py-2.5 bg-accent text-bg font-semibold text-sm rounded-full hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-wait"
                        >
                            {downloading ? (
                                <>
                                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    {labels[lang].download}...
                                </>
                            ) : (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                    {l.download}
                                </>
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* ── CV Preview ── */}
            <div className="max-w-[900px] mx-auto px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                >
                    {/* ── Printable CV Content ── */}
                    <div ref={cvRef} className="bg-white text-gray-900" style={{ fontFamily: "'Inter', Arial, sans-serif", padding: '48px 44px', width: '210mm', minHeight: '297mm', margin: '0 auto' }}>
                        {/* Header */}
                        <div className="flex justify-between items-start border-b-2 border-gray-900 pb-4 mb-6">
                            <div>
                                <h1 style={{ fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontSize: '26pt', fontWeight: 800, lineHeight: 1.2, color: '#1a1a1a' }}>
                                    {data.fullName}
                                </h1>
                                <p className="text-gray-500 mt-1" style={{ fontSize: '12pt' }}>{data.title}</p>
                            </div>
                            <div className="text-right text-gray-500" style={{ fontSize: '9.5pt', lineHeight: 1.9 }}>
                                {data.phone}<br />
                                {data.location}
                            </div>
                        </div>

                        {/* Summary */}
                        <CVSection title={lang === 'ru' ? 'ПРОФЕССИОНАЛЬНОЕ РЕЗЮМЕ' : lang === 'uz' ? 'KASBIY XULOSA' : 'PROFESSIONAL SUMMARY'}>
                            <p style={{ fontSize: '10.5pt', color: '#333', lineHeight: 1.65 }}>{data.cvSummary}</p>
                        </CVSection>

                        {/* Experience */}
                        <CVSection title={lang === 'ru' ? 'ОПЫТ РАБОТЫ' : lang === 'uz' ? 'ISH TAJRIBASI' : 'PROFESSIONAL EXPERIENCE'}>
                            {data.experience.map((exp, i) => (
                                <div key={i} className="mb-3.5">
                                    <div className="flex justify-between items-baseline">
                                        <span style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '10.5pt' }}>{exp.position}</span>
                                        <span style={{ fontSize: '9pt', color: '#666' }}>{exp.year}</span>
                                    </div>
                                    <div style={{ fontSize: '9.5pt', color: '#555', fontStyle: 'italic' }}>
                                        {exp.company} — {exp.department}
                                    </div>
                                    <p style={{ fontSize: '9.5pt', color: '#444', marginTop: '3px', lineHeight: 1.5 }}>{exp.description}</p>
                                </div>
                            ))}
                        </CVSection>

                        {/* Skills */}
                        <CVSection title={lang === 'ru' ? 'ТЕХНИЧЕСКИЕ НАВЫКИ' : lang === 'uz' ? 'TEXNIK KO\'NIKMALAR' : 'TECHNICAL SKILLS'}>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                                {data.skills.map((s, i) => (
                                    <div key={i} className="flex justify-between border-b border-dotted border-gray-300 py-0.5" style={{ fontSize: '9.5pt' }}>
                                        <span className="text-gray-700">{s.name}</span>
                                        <span className="text-gray-500" style={{ fontSize: '9pt' }}>
                                            {s.level >= 90 ? (lang === 'ru' ? 'Эксперт' : lang === 'uz' ? 'Ekspert' : 'Expert') :
                                                s.level >= 80 ? (lang === 'ru' ? 'Продвинутый' : lang === 'uz' ? 'Ilg\'or' : 'Advanced') :
                                                    (lang === 'ru' ? 'Уверенный' : lang === 'uz' ? 'Tajribali' : 'Proficient')}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CVSection>

                        {/* Education */}
                        <CVSection title={lang === 'ru' ? 'ОБРАЗОВАНИЕ И СЕРТИФИКАТЫ' : lang === 'uz' ? 'TA\'LIM VA SERTIFIKATLAR' : 'EDUCATION & CERTIFICATIONS'}>
                            {data.education.map((edu, i) => (
                                <div key={i} className="mb-2.5">
                                    <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '10.5pt' }}>{edu.degree}</div>
                                    <div style={{ fontSize: '9.5pt', color: '#555' }}>{edu.school}</div>
                                    <div style={{ fontSize: '9pt', color: '#777' }}>{edu.year}</div>
                                </div>
                            ))}
                        </CVSection>

                        {/* Footer */}
                        <div className="mt-6 pt-3 border-t border-gray-300 text-center" style={{ fontSize: '8pt', color: '#999' }}>
                            {lang === 'ru' ? 'Дата рождения' : lang === 'uz' ? 'Tug\'ilgan sana' : 'Date of Birth'}: {data.dob}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

function CVSection({ title, children }) {
    return (
        <div className="mb-5">
            <h2
                className="border-b border-gray-300 pb-1 mb-3 tracking-widest"
                style={{ fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontSize: '11pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.5px', color: '#1a1a1a' }}
            >
                {title}
            </h2>
            {children}
        </div>
    )
}
