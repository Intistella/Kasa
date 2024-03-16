import React from "react"
import pageContent from '../data/aboutText.json'
import background from '../assets/AboutPageBackground.png'
import Dropdown from '../components/Dropdown'
import '../styles/about.css'

export default function About(){
    return(
        <>
            <main className="aboutPage-container">
                <section className="aboutPage-banner">
                    <img src={background} alt="" />
                </section>
                <section className="aboutPage-dropdown-wrapper">
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
                </section>
            </main>
        </>
    )
}