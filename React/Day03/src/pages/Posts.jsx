import React from 'react'
import { useFetch } from '../custom-hooks/useFetch'
import { SharedTitle } from '../styledComponents/SharedTitle'

export function Posts() {
    let { data: posts, isLoading, errors } = useFetch( "https://jsonplaceholder.typicode.com/posts" )

    return (
        <div className='container mt-5 alert alert-light p-5'>
            <SharedTitle className='mb-5'>Posts List</SharedTitle>
            <div className="row g-3">
                {posts.map( ( post ) => (
                    <div className="col-sm-6">
                        <div className='border rounded'>
                            <h3 className='bg-dark text-light p-3'>{post.body}</h3>
                        </div>

                    </div>
                ) )}

            </div>
        </div>
    )
}
