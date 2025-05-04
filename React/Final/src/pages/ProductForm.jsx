import React, { useEffect, useState } from 'react'
import { SharedCard } from '../shared/SharedCard'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

import { addNewProduct, editProduct, getProductById } from '../API/productAPI'
import { useDispatch } from 'react-redux'
import { addProductAction } from '../store/productSlice'
export function ProductForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    const dispatch = useDispatch();


    const [ formValues, setFormValus ] = useState( {
        name: '',
        price: ''
    } )

    useEffect( () => {
        getProductById( id ).then( ( response ) => {
            setFormValus( response.data )
        } )
    }, [ id ] )



    const getInputValue = ( e ) => {
        setFormValus( {
            ...formValues,
            [ e.target.name ]: e.target.value
        } )
    }



    const submitHandler = ( e ) => {
        e.preventDefault();
        if ( id == 0 ) {
            dispatch( addProductAction( formValues ) ).then( () => {
                navigate( '/products' )
            } )

        } else {
            // dispatch editaction

        }


    }

    return (
        <SharedCard title={`${id == 0 ? 'Add New Product' : 'Edit Product'} `} textColor={'text-muted text-center'} >
            <Container>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" value={formValues.name} name='name' onChange={getInputValue} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Price" value={formValues.price} name="price" onChange={getInputValue} />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        {id == 0 ? 'Add New Product' : 'Edit Product'}
                    </Button>
                </Form>
            </Container>

        </SharedCard >
    )
}
