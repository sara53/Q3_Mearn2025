import React, { useContext, useState } from 'react'

import { GradientButton, SharedButton } from '../styledComponents/SharedButton'
import { SharedTitle } from '../styledComponents/SharedTitle'

import { ProductContext } from '../context/productContext'
import { Offer } from './Offer'
import { ThemeContext } from '../context/themeContext'
export default function Products() {

    let { numberOfProducts, addToCart } = useContext( ProductContext )
    let { theme } = useContext( ThemeContext )
    return (
        <div className={`${theme == 'light' ? 'bg-light' : 'bg-dark text-light'}`}>
            <div className='mt-4 p-3 container'>
                <div className="row">

                    <div className="col-sm-6">
                        <h3 className='text-muted mb-2'>Product Details {theme}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, cupiditate?</p>
                        <p className='lead fs-4'>Number of Products in Your Cart :{numberOfProducts} </p>
                        <button onClick={addToCart} className='btn btn-dark mb-5' >Add to Cart</button>
                    </div>

                    <Offer />
                </div>

            </div>
        </div>
    )
}
