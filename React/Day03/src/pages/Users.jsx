import React, { use, useEffect, useState } from 'react'
import { SharedTitle } from '../styledComponents/SharedTitle'
import { useFetch } from '../custom-hooks/useFetch'

export function Users() {


    let { data: users, isLoading, errors } = useFetch( "https://jsonplaceholder.typicode.com/users" )

    return (
        <div className='container mt-5 alert alert-light p-5'>
            <SharedTitle className='mb-5'>Users List</SharedTitle>
            <div className="row g-3">
                {isLoading && <h1 className='alert alert-dark p-5'>Loading .....</h1>}
                {errors && <h1 className='alert alert-danger'>Error {errors.message}</h1>}
                {!errors && !isLoading && users.map( ( user ) => (
                    <div className="col-sm-6" key={user.id}>
                        <div className='border rounded'>
                            <h3 className='bg-dark text-light p-3'>{user.name}</h3>
                            <p className='lead p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, excepturi.</p>
                            <p className='lead p-2'>Email : {user.email}</p>
                        </div>

                    </div>
                ) )}

            </div>
        </div>
    )
}
