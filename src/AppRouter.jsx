import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Error from './pages/Error'
import Footer from './components/Footer'
import Accomodation from './pages/Accomodation'
import About from './pages/About'


export default function AppRouter(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Accomodation />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}