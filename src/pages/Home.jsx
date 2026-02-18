import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import PROFILE from '../data/profile'

export default function Home() {
    const [lang, setLang] = useState('en')
    const data = PROFILE[lang]

    return (
        <div className="min-h-screen bg-bg text-text-primary">
            <Navbar data={data} lang={lang} setLang={setLang} />
            <Hero data={data} />
            <About data={data} />
            <Experience data={data} />
            <Skills data={data} />
            <Education data={data} />
            <Contact data={data} />
            <Footer />
        </div>
    )
}
