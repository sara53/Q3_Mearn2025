import React, { Component } from 'react'
import '../css/content.css'
export class Content extends Component {
    trackName = ' Mearn'
    student = {
        id: 1,
        name: "ali",
        age: 25
    }

    clickHandler = ( name ) => {
        console.log( name )
        console.log( "Btn Clicked" )
    }
    render() {
        return (
            <section className='bg-light p-4'>
                <h2>{this.trackName}</h2>
                <p className='lead'>Student Name : {this.student.name}</p>
                <p className='lead'>Student Age : {this.student.age}</p>
                <button onClick={() => this.clickHandler( 'mona' )} className='btn btn-dark'>Show More</button>
            </section>

        )
    }
}
