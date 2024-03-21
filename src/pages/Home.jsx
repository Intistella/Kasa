import React from 'react'
import Background from '../assets/homeBackground.png'
import'../styles/home.css'
import Cards from '../components/Cards'

export default function Home (){
    return (
        <>
            <main className='main-container'>
                <section className="home-banner">
                    <img src={Background} className="banner-image" alt="background"/>
                    <h1 className='banner-text'>Chez vous, <b/> partout et ailleurs</h1>
                </section>
                <Cards />
            </main>
        </>
    )
}