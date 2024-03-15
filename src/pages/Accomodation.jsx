import React from "react"
import { useParams } from "react-router-dom"
import logements from '../data/logements.json'
import Error from "./Error"
import Carousel from "../components/Carousel"

export default function Accomodation(){
    const identifier = useParams()
    const logement = logements.find(logement => logement.id === identifier.id)

    if(!logement){
        return <Error />
    }

    return (
        <>
            <main className="fiche-logement">
                <div className="carrousel-logement">
                    <Carousel pictures={logement.pictures} />
                </div>
            </main>
        </>    
                    
    )
}