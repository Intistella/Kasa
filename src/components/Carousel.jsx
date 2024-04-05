import React from "react"
import { useState } from "react"
import '../data/logements.json'
import nextArrow from '../assets/arrowRight.svg'
import previousArrow from '../assets/arrowLeft.svg'
import previousArrowPhone from '../assets/arrowLeftPhone.svg'
import nextArrowPhone from '../assets/arrowRightPhone.svg'
import '../styles/caroussel.css'


// eslint-disable-next-line import/no-anonymous-default-export
export default function Carousel ({pictures}){
    const [currentSlide, setCurrentSlide] = useState(0)
    const image = pictures.length
      
    if (pictures.length>1){
        return(
            <>
                <div className="carousel-container">
                    <div className="slide">
                        {pictures.map((picture, index) => (
                            <div className="slides-fade" key={index} hidden={currentSlide === index ? false : true}>
                                <div className="slide-number">
                                    {index + 1} / {pictures.length}
                                </div>
                                <img className="slideImg" src={picture} alt="" style={{ width: '100%' }} />
                            </div>
                        ))}
                        <div className="arrows-container">
                            <div className="previousDiv" onClick={()=> setCurrentSlide((currentSlide+image-1)%image)}>
                                <img className="previous-arrow" src={previousArrow} alt="" />
                                <img className="previous-arrow-phone" src={previousArrowPhone} alt=""/>
                            </div>
                            <div className="nextDiv" onClick={()=>{setCurrentSlide((currentSlide+1)%image)}}>
                                <img className="next-arrow" src={nextArrow} alt="" />
                                <img className="next-arrow-phone" src={nextArrowPhone} alt=""/>
                            </div>
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
                                <div className="slide-number">
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