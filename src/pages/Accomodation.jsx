import React from "react"
import { useParams } from "react-router-dom"
import logements from '../data/logements.json'
import Error from './Error'
import Carousel from '../components/Carousel'
import Tags from '../components/Tags'
import Dropdown from '../components/Dropdown'
import Rating from '../components/Rating'
import '../styles/accomodation.css'


export default function Accomodation(){
    const identifier = useParams()
    const logement = logements.find((logement) => logement.id === identifier.id)

    if(!logement){
        return <Error />
    }

    return (
        <>
            <main className="house-sheet">
                <div className="house-carousel">
                    <Carousel pictures={logement.pictures} />
                </div>
                <div className="house-data">
                    <div className="house-address">
                        <h1 className="house-title">{logement.title}</h1>
                        <p className="house-location">{logement.location}</p>
                    </div>
                    <div className="house-label">
                        <Tags tag={logement.tags} />
                    </div>
                </div>
                <div className="host-data">
                    <div className="host-details">
                        <p className="host-name">{logement.host.name}</p>
                        <img src="{logement.host.picture}" alt="" className="host-picture"/>
                    </div>
                </div>
                <div className="house-rating">
                    <Rating rating={logement.rating} />
                </div>
                <div className="house-dropdown">
                    <div className="houseDescription-dropdown">
                        <Dropdown title={'Description'} description={logement.description} />
                    </div>
                    <div className="houseDescription-dropdown">
                        <Dropdown title={'Equipements'} description={logement.equipments.map((equipment)=>(
                            <li key={equipment}>{equipment}</li>
                        ))} />
                    </div>
                </div>
            </main>
        </>    
                    
    )
}