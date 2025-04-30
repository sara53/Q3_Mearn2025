import React, { useState } from 'react'
import { ProductContext } from './productContext'

export function ProductProvider( props ) {

    let [ numberOfProducts, setNumberOfProducts ] = useState( 0 )
    let addToCart = () => {
        setNumberOfProducts( numberOfProducts + 1 )
    }
    let value = {
        numberOfProducts,
        addToCart
    }



    return (
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    )
}


