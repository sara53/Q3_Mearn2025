import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super()
        console.log( "1-ctor" )
    }


    componentDidMount() {
        console.log( "connect with api -- only one" )
    }

    componentDidUpdate() {
        console.log( "After update" )
        console.log( this.state.count )
    }
    componentWillUnmount() {

    }
    state = {
        count: 0,
        title: "Counter App"
    }

    increase = () => {
        this.setState( {
            count: this.state.count + 1
        } )

    }
    decrease = () => {
        this.setState( {
            count: this.state.count - 1
        } )
    }
    changeTitle = () => {
        this.setState( {
            title: 'New Title'
        } )
    }
    render() {
        console.log( "Render" )
        return (
            <div className='container border p-5 mt-5'>

                <h1>{this.state.title}</h1>
                <p className='lead mt-4'>Count : <strong>{this.state.count}</strong></p>

                <button onClick={this.changeTitle} className='btn btn-dark mx-2'>Change Title</button>
                <button onClick={this.increase} className='btn btn-success mx-2'>increase</button>
                <button onClick={this.decrease} className='btn btn-danger mx-2'>decrease</button>
            </div>
        )
    }
}
