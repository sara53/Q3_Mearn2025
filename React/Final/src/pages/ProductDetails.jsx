import React, { useEffect, useState } from 'react'
import { SharedCard } from '../shared/SharedCard'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../API/productAPI';
import { useFetch } from '../custom-hooks/useFetch';

export function ProductDetails() {
    const { id } = useParams();


    const { data: product } = useFetch( getProductById, id )



    return (
        <SharedCard className={'bg-dark text-light'} title={`Product Details ${id}`} textColor={'text-warning'}>
            <p className='lead fs-4 mt-3'>Product Name :  <strong>{product.name}</strong></p>
            <p className='lead fs-4 mt-3'>Product Price :  <strong>{product.price} $</strong></p>
            <Link to='/products' className='btn btn-info mt-5'>Back to Products</Link>
        </SharedCard >
    )
}
