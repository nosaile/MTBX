import React from "react"
import './Cards.css'
import CardItem from './CardItem'


function BikeCards() {
    return (
        <div className="cards">
            <h1>Cool Resources/Tips</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem
                            src="../../assets/berm-peak.png"
                            text="This guy Seth has a youtube channel called Berm Peak. He creates a lot of content for the mountain
                            biking community and offers plenty of resources and hacks for beginners and pros. Check his channel out!"
                            label="Berm Peak Youtube"
                            path="/bikes"
                        />
                        <CardItem
                            src="../../assets/honey.png"
                            text="Ever felt your energy levels dropping mid ride? Next time bring some packets of honey with you. 
                            Honey is a natural unprocessed sugar that immediately enters the blood stream to provide a quick surge of energy."
                            label="Honey"
                            path="/bikes"
                        />
                    </ul>
                    <ul className="cards__items">
                    <CardItem
                            src="../../assets/multi-tool.jpeg"
                            text="The most useful tool in the world is usually the one you don't have. So next time you go out on a ride,
                            bring a small multi tool with you. It can get you out of a pinch and allows you to make adjustments on the fly."
                            label="Multi Tool"
                            path="/bikes"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BikeCards