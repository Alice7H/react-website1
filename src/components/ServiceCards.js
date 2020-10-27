import React from 'react'
import '../components/styles/ServiceCards.css'
import { database } from '../components/Database'
import ServiceCardItem from './ServiceCardItem'

export default function ServiceCards() {
    
    const services = database.services
 
    return (
        <div className='cards'>
            <h3>Visit new places</h3>
            <ul className='cards__container__service'>
                { services.map( service => {                             
                    return (
                        <ServiceCardItem
                        key={service.id}
                        id={service.id}
                        src={service.fontUrl}
                        path='/services'
                        travel_day={service.travel_day}
                        return_day={service.return_day}
                        price={service.price}
                        from={service.from}
                        goTo={service.goTo}
                        title={service.title}
                        class={service.class}
                        description={service.description}
                        fontUrl={service.fontUrl}
                        /> 
                    )
                })} 
            </ul>     
        </div>
    )
}
