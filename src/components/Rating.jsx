import React from "react"
import'../data/logements.json'
import filledStar from '../assets/filledStar.svg'
import emptyStar from '../assets/emptyStar.svg'
import '../styles/rating.css'

export default function Rating ({ rating }){
    const ratingStars = []
    for(let i=0; i < rating; i++){
        ratingStars.push(
            <img src={filledStar} key={'filledStar'+i} className="rating-filledStar" alt=""/>
        )
    }
    for(let j=ratingStars.length; j < 5; j++){
        ratingStars.push(
            <img src={emptyStar} key={'emptyStar'+j} className="rating-emptyStar" alt=""/>
        )
    }
    return(
        <div className="rating">
            <span className="ratingStars" key={rating}>{ratingStars}</span>
        </div>
    )
}