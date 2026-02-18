import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CVPage from './pages/CVPage'

const basename = import.meta.env.BASE_URL

export default function App() {
    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<CVPage />} />
            </Routes>
        </BrowserRouter>
    )
}
