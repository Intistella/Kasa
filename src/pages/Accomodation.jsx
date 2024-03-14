import React from "react"
import { useParams } from "react-router-dom"
import logements from '../data/logements.json'
import Error from "./Error"

export default function Accomodation(){
    const identifier = useParams()
    const logement = logements.find(logement => logement.id === identifier.id)

    if(!logement){
        return <Error />
    }

    return (
        <section>
            <div className="carousel">
            
            </div>
        </section>
    )
}