import React from 'react'
import Hero from '../components/Hero.jsx'
import PhotoCardCarousel from '../components/Card.jsx'
import Footer from '../components/Footer.jsx'
import Portfolio from '../components/Pro.jsx'
import Title from '../components/Title.jsx'

const Home = () => {
    return (
        <div>
            <Hero />,
            <Title />
            <Portfolio />,
            <PhotoCardCarousel />
            <Footer />
        </div>
    )
}

export default Home