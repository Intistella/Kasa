import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'
import '../styles/header.css'

export default function Header (){
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav className='App-nav'>
                <Link to="/home" className='nav-element'>Acceuil</Link>
                <Link to="/about" className='nav-element'>A Propos</Link>
                 
            </nav>
        </header>
    )
}