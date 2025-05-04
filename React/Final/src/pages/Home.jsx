import React from 'react'
import { SharedCard } from '../shared/SharedCard'
import { Header } from '../components'
import { useDispatch, useSelector } from 'react-redux'

import { movieActions } from '../store/moviesSlice'

export function Home() {
    const { moviesList } = useSelector( store => store.movieSlice )

    const { addMovie } = movieActions
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch( addMovie( 'Frozen II' ) )
    }
    return (
        <>
            <SharedCard className='alert  container' title='Home Page'>
                <p className='fs-1 mt-5'>My Fav Movies</p>
                <ul>
                    {moviesList.map( ( movie ) =>
                        <li key={movie}>{movie}</li>
                    )}
                </ul>

                <button className='btn btn-dark' onClick={clickHandler}>Add Movie</button>
            </SharedCard>
        </>
    )
}
