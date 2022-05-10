import React from 'react'
import '../../App.css'
import { database } from '../../Database';

export default function Products() {

    const products = database.products

    return (
        <div className='products'>
            <div className='cards'>
                <h1>Highlights for your trip</h1>
                <ul className='cards__container__service'>
                {
                    products.map( product => {
                        return(
                            <li key={product.id} className='cards__item__service'>
                                <div onClick={ () => { window.open(product.url)}}>
                                    <figure className='cards__item__pic-wrap' data-category={product.name}>
                                        <img className='cards__item__img' src={product.thumbnailUrl} alt={product.name}/>
                                    </figure>
                                    <div className='cards__item__service__text'>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })   
                }
            </ul>
           </div>
        </div>
    )
}
