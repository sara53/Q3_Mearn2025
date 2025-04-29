import { useState } from "react"

export function ProductForm( props ) {


    let { onAddProduct } = props

    let [ formValues, setFormValues ] = useState( {
        name: '',
        price: '',
        isShippingFree: false
    } )

    let getInputValue = ( e ) => {

        setFormValues( {
            ...formValues,
            [ e.target.name ]: e.target.name == 'isShippingFree' ? e.target.checked : e.target.value
        } )


    }

    let productHandler = ( e ) => {
        e.preventDefault()
        onAddProduct( formValues )
        setFormValues( {
            name: '',
            price: '',
            isShippingFree: false
        } )

    }
    return (
        <div className="container p-4">

            <h1 className="text-center">Add New Product</h1>

            <form className="mt-4" onSubmit={productHandler}>
                <input onChange={getInputValue} type="text" name='name' value={formValues.name} placeholder="Enter Product Name" className="form-control mb-3" />
                <input onChange={getInputValue} type="number" value={formValues.price} name='price' placeholder="Enter Product Price" className="form-control mb-3" />
                <input onChange={getInputValue} type="checkbox" checked={formValues.isShippingFree} name='isShippingFree' placeholder="Enter Product Price" className="mb-3" /> freeShipping
                <button className="d-block btn btn-dark mt-3" type="submit">Add New Product</button>
            </form>
        </div>
    )
}


