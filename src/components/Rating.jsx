import React from "react"
import'../data/logements.json'
import filledStar from '../assets/filledStar.svg'
import emptyStar from '../assets/emptyStar.svg'

export default function Rating (){
    const rating = []
    for(let i = 0; i < rating.length; i++){
        rating.push(
            <img src={filledStar} key={'filledStar'+i} className="rating-filledStar" alt=""/>
        )
    }
    for(let j = rating; j < 5; j++){
        rating.push(
            <img src={emptyStar} key={'emptyStar'+j} className="rating-emptyStar" alt=""/>
        )
    }
    return(
        <div className="rating">
            <span key={rating}>{rating}</span>
        </div>
    )
}