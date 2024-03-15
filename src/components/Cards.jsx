import React from "react"
import { Link } from "react-router-dom"
import logements from '../data/logements.json'
import '../styles/cards.css'

export default function Cards(){
    return(
        <div className="cards-container">
            {logements.map((logement)=> {
                return (
                    <Link className="card-link" key={logement.id} to={`/logement/${logement.id}`} state={{id:logement.id}} >
                        <div className="card">
                            <img src={logement.cover} alt="" className="card-img" />
                            <div className="card-text">
                                <p className="card-title">{logement.title}</p>
                            </div>    
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
