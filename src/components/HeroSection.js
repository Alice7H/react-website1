import React from 'react'
import '../App.css';
import '../components/styles/HeroSection.css'
import { FaPlayCircle } from 'react-icons/fa'
import { Button }  from './Button'

export default function HeroSection() {
 
    return (
        <div className='hero-container'>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button> 
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <FaPlayCircle className='fa-play-circle'/>
                </Button> 
            </div>
        </div>
    )
}
