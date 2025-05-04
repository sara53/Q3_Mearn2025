import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counterSlice'

export function Counter() {

    const { count } = useSelector( ( store ) => store.myCounterSlice )

    const { increase, decrease } = counterActions



    const dispatch = useDispatch();

    const increaseHandler = () => {
        dispatch( increase( 10 ) )

    }
    const decreaseHandler = () => {
        dispatch( decrease() )


    }
    return (
        <div className='mt-5 container p-5'>

            <h1>Counter Component </h1>

            <p className='lead fs-3'>Count : {count}</p>

            <button className='btn btn-success mx-1' onClick={increaseHandler}>Increase</button>
            <button className='btn btn-danger mx-1' onClick={decreaseHandler}>Decrease</button>
        </div>
    )
}
