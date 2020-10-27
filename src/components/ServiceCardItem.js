import React from 'react'

export default function ServiceCardItem(props) {
 
    const travelDay = (datetime) => {
        const dayGo = new Date(datetime)
        return (`${dayGo.toLocaleTimeString()} - ${dayGo.toLocaleDateString()}`)
    }

    const returnDay = (datetime) => {
        const dayBack = new Date(datetime)
        return (` ${dayBack.toLocaleTimeString()} - ${dayBack.toLocaleDateString()} `)
    }

    return (
        <>
        <li key={props.id} className='cards__item__service' onClick={ () => { window.open(props.fontUrl)}}>
            <div>
                <figure className='cards__item__pic-wrap' data-category={props.title}>
                    <img className='cards__item__img' src={props.src} alt='Travel'/>
                </figure>
                <div className='cards__item__service__text'>
                    <h2>{props.description}</h2>
                    <p>From {props.from}  to {props.goTo}</p>
                    <p>Price: {props.price}</p>
                    <p>Go at {travelDay(props.travel_day)}</p>
                    <p>Return at {returnDay(props.return_day)}</p>
                </div>
            </div>
        </li>
        </>
    )
}
