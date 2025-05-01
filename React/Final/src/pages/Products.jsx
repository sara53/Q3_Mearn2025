import React from 'react'
import { SharedCard } from '../shared/SharedCard'
import { ProductsHeader, ProductsList } from '../components'

export function Products() {
    return (
        <>
            <SharedCard title='Our Porducts' textColor='text-muted text-center' header={<ProductsHeader />}>
                <ProductsList />
            </SharedCard>

        </>
    )
}
