import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Loading } from '../components'
import { deleteProduct, getAllProducts } from '../API/productAPI'
import { useFetch } from '../custom-hooks/useFetch'

export function ProductsList() {


    const [ products, setProducts ] = useState( [] )
    const [ errors, setErros ] = useState( null )
    const [ isLoading, setIsLoading ] = useState( false )

    useEffect( () => {
        getAllProducts().then( ( response ) => {
            setProducts( response.data )
        } ).catch( ( error ) => setErros( error ) )
    }, [] )

    const deleteHandler = ( productId ) => {
        deleteProduct( productId ).then( () => {
            setProducts( products.filter( ( product ) => product.id != productId ) )//
        } ).catch( ( error ) => setErros( error ) )
    }

    return (
        <>
            {isLoading && <Loading />}
            {errors && <Error />}
            {!isLoading && !errors && <Table striped bordered hover className='text-center'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map( product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`/products/${product.id}`}>
                                    <i className="fs-3 mx-1 text-warning bi bi-eye-fill"></i>
                                </Link>

                                <Link to={`/products/${product.id}/edit`}>
                                    <i className="fs-3 mx-1 text-info bi bi-pencil-square"></i>
                                </Link>
                                <i onClick={() => deleteHandler( product.id )} className="fs-3 mx-1 text-danger bi bi-trash3-fill"></i>
                            </td>
                        </tr>
                    ) )}


                </tbody>
            </Table>}
        </>
    )
}
