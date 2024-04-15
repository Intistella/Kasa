import React from "react"
import pageContent from '../data/aboutText.json'
import background from '../assets/AboutPageBackground.png'
import Dropdown from '../components/Dropdown'
import '../styles/about.css'

export default function About(){
    return(
        <>
            <main className="aboutPage-main"> 
                <section className="aboutPage-container">
                    <div className="aboutPage-banner">
                        <img src={background} alt="" />
                    </div>
                    <div className="aboutPage-dropdown-wrapper">
                        <div className="aboutPage-dropdown">
                            {pageContent.map((pageContent, index) => {
                                return (
                                    <div className="aboutPage-dropdown-item" key={index}>
                                        <div className="aboutPage-rectangle">
                                            <Dropdown
                                                title={pageContent.title}
                                                description={pageContent.description}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}