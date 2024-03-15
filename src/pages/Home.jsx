import React from 'react'
import Background from '../assets/homeBackground.png'
import'../styles/home.css'
import Cards from '../components/Cards'

export default function Home (){
    return (
        <>
            <section className="home-banner">
                <img src={Background} className="banner-image" alt="background"/>
                <h1 className='banner-text'>Chez vous, partout et ailleurs</h1>
            </section>
            <Cards />
        </>
    )
}