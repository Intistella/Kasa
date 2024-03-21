import React from "react"
import { Link } from "react-router-dom"
import '../styles/error.css'

export default function Error(){
    return (
            <div className="error-page">
                <h1 className="error-code">404</h1>
                <span className="error-message">
                    <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
                </span>
                <Link className="error-link" to="/">Retourner sur la page d’accueil</Link>
            </div>
    )
}