import { Content } from './components/Content'
import Footer from './components/Footer'
import { Header } from './components/Header'
import React from 'react'
export function App() {

    let myObj = { color: "red", backgroundColor: "#000" }

    let trackName = "alaa"
    return (
        <>
            <h1 className='myHeader'>Hello</h1>
            {/* <h1>{trackName}</h1>
            <p style={myObj}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum quaerat non dolores sapiente, laborum cumque perferendis recusandae eveniet! Hic vero ex repudiandae accusamus, consequuntur dolore harum fuga ad necessitatibus.</p> */}
            <Header />

        </>

    )
}
// jsx -- javascript xml -- js

/** document.createElment */