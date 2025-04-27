
import React from 'react'
import { Header } from './components/Header'
import Slider from './components/Slider'
import { Content } from './components/Content'
import { Great } from './components/Great'
export function App() {

    let track1 = {
        id: 1,
        trackName: "Mearn",
        nofStudents: 25,
        sup: "ahmed",
        bgColor: 'bg-light'

    }
    let track2 = {
        id: 2,
        trackName: "Dotnet",
        nofStudents: 20,
        sup: "ali",
        bgColor: 'bg-dark text-light'


    }

    return (
        <>


            <Great track={track1} />
            <Great track={track2} />
            <Great track={track1}>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa accusamus iure repellat iste delectus aut veniam esse deleniti tempora? Ex quidem debitis voluptatum ipsum perferendis doloremque quos doloribus! Labore?</p>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa accusamus iure repellat iste delectus aut veniam esse deleniti tempora? Ex quidem debitis voluptatum ipsum perferendis doloremque quos doloribus! Labore?</p>
                <button className='btn btn-success'>Show More</button>
            </Great>
            <hr />
            {/* <Great /> */}
            {/* <Content /> */}
        </>

    )
}
