import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CVPage from './pages/CVPage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<CVPage />} />
            </Routes>
        </BrowserRouter>
    )
}
