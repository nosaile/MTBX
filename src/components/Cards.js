import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Bikes for your next Adventure</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="../../assets/marlin5.png"
                            text="This Trek hardtail will get you where you need to go with style.
                             A personal favorite and what I ride everyday. Tailored towards beginners and pros alike."
                            label="Marlin 5"
                            path="/bikes"
                        />
                        <CardItem
                            src="../../assets/Yeti-SB165.jpeg"
                            text="A full suspension Yeti that comes with serious comfortability on the trail.
                            With improved ergonomics and a streamlined chasis, those rocks and roots won't be able to stop you."
                            label="SB165 Turq T2"
                            path="/bikes"
                        />
                        <CardItem
                            src="../../assets/heckler.jpeg"
                            text="Becoming more and more popular are the e-bikes, and here is what Santa Cruz brings to the table.
                             Beautiful design, and even though it has a motor there's plenty of room for accessories. Try it out!"
                            label="Heckler"
                            path="/bikes"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards