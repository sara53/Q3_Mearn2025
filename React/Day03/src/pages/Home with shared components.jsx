import React from 'react'
import { SharedButton } from '../styledComponents/SharedButton'
import { SharedTitle } from '../styledComponents/SharedTitle'

export function Home() {

    let increase = () => {
        console.log( "hello" )
    }

    return (

        <div className='container mt-5 p-5 border rounded'>
            <SharedTitle>Home Page</SharedTitle>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis possimus voluptatem nisi, harum ad ipsum totam non consectetur, itaque odit repudiandae assumenda aliquam perferendis, quam vitae ratione dolorem quasi. Provident.</p>

            <SharedButton onClick={increase}>Show More</SharedButton>
            <SharedButton variant='outline'>outline</SharedButton>

        </div>
    )
}
