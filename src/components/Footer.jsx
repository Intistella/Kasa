import React from "react"
import logoFooter from '../assets/logoFooter.png'
import '../styles/footer.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
    return(
        <footer>
            <img src={logoFooter} className="footer-logo" alt="logo"/>  
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}