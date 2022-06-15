import React from 'react'
import CardItem from './CardItem'
import '../components/styles/Cards.css'
import Image2 from '../assets/images/img-2.jpg'
import Image3 from '../assets/images/img-3.jpg'
import Image4 from '../assets/images/img-4.jpg'
import Image8 from '../assets/images/img-8.jpg'
import Image9 from '../assets/images/img-9.jpg'

const cards = [
    {
        id: 0,
        src: Image9,
        text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
        label: 'Adventure',
        path: '/services',
    },
    {
        id: 1,
        src: Image2,
        text: 'Travel through the Islands of Bali in a Private Cruise',
        label: 'Luxury',
    },
    {
        id: 2,
        src: Image3,
        text: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters',
        label: 'Mistery',
    },
    {
        id: 3,
        src: Image4,
        text: 'Experience Football on Top of the Himilayan Mountains',
        label: 'Adventury',
    },
    {
        id: 4,
        src: Image8,
        text: 'Ride through the Sahara Desert on a guided camel tour',
        label: 'Adrenaline',
    }
]

export default function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {cards.slice(0, 2).map(card =>
                            <CardItem
                                key={card.id}
                                src={card.src}
                                text={card.text}
                                label={card.label}
                            />
                        )}
                    </ul>
                    <ul className='cards__items'>
                        {cards.slice(2, 5).map(card =>
                            <CardItem
                                key={card.id}
                                src={card.src}
                                text={card.text}
                                label={card.label}
                            />
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
