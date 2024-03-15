import React from "react"
import { useState } from "react"
import '../data/logements.json'
import nextArrow from '../assets/arrowRight.png'
import previousArrow from '../assets/arrowLeft.png'


// eslint-disable-next-line import/no-anonymous-default-export
export default function ({pictures}){
    const [currentSlide, setCurrentSlide] = useState(0)
    const next = () => {
        const image = pictures.length
        setCurrentSlide((currentSlide+1)%image)
    }

    const previous = () => {
        const image = pictures.length
        setCurrentSlide((currentSlide+image-1)%image)
    }
    if (pictures.length>1){
        return(
            <>
                <div className="carousel-container">
                    <div className="slide">
                        {pictures.map((picture, index) => (
                            <div className="slides-fade" key={index} hidden={currentSlide === index ? false : true}>
                                <div className="number-text">
                                    {index + 1} / {pictures.length}
                                </div>
                                <img src={picture} alt="" style={{ width: '100%' }} />
                            </div>
                        ))}
                        <div className="previous-arrow" onClick={previous}>
                            <img src={previousArrow} alt="" />
                        </div>
                        <div className="next-arrow" onClick={next}>
                            <img src={nextArrow} alt="" />
                        </div>
                    </div>
                </div>
            </>
        ) 
    }else {
        return (
            <>
                <div className="carousel-container">
                    <div className="slide">
                        {pictures.map((picture, index) => (
                            <div className="slides-fade" hidden={currentSlide === index ? false : true}>
                                <div className="number-text">
                                    {index + 1} / {pictures.length}
                                </div>
                                <img src={picture} alt="" style={{ width: '100%' }} />
                            </div>
                        ))}
                        <div className="previous-arrow" arrow-backward="false"></div>
                        <div className="next-arrow" arrow-forward="false"></div>
                    </div>
                </div>
            </>
        )
    }
}