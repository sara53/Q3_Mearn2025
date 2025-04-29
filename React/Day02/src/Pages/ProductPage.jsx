import React, { useState } from 'react'
import { ProductForm } from '../components/ProductForm'
import { ProductList } from '../components/ProductList'

export function ProductPage() {
    let [ products, setProducts ] = useState( [] )

    let addNewProduct = ( product ) => {
        setProducts( [ ...products, product ] )
    }

    let removeProduct = ( productId ) => {

        setProducts( products.filter( ( _, index ) => index != productId ) )
    }


    return (
        <>
            <ProductForm onAddProduct={addNewProduct} />
            <ProductList products={products} onRemoveProduct={removeProduct} />

        </>
    )
}
