import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Time for your next adventure</h1>
            <div className="hero-btns">
                <Button className='btn' buttonStyle='btn--outline'
                    buttonSize='btn--large'>Get Started</Button>
            </div>
        </div>
    )
}

export default HeroSection;