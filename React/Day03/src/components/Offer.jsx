import React, { useContext } from 'react'
import { SharedTitle } from '../styledComponents/SharedTitle'
import { GradientButton } from '../styledComponents/SharedButton'
import { ProductContext } from '../context/productContext'

export function Offer() {

    let { numberOfProducts } = useContext( ProductContext )
    return (
        <div className="col-sm-6">
            <SharedTitle>Special Offer</SharedTitle>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure odit provident. Pariatur odit officiis sint culpa fugiat vitae, ea est maiores deleniti laborum molestiae nesciunt modi sapiente, quae quo.</p>
            <p className='lead fs-4'>Number of Products in Your Cart : <strong className='text-danger'>{numberOfProducts}</strong> </p>
            <GradientButton>Get Offer</GradientButton>
        </div>
    )
}
