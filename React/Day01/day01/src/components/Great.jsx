import React, { Component } from 'react'

export class Great extends Component {

    render() {
        const { track: { trackName, nofStudents, sup, bgColor } } = this.props
        return (
            <div className={`${bgColor} container p-4`}>
                <h1>Welcome  <strong className='text-danger'>{trackName}</strong> at ITI</h1>
                <p className='lead'>Your supervisior Name :   <strong className='text-danger'>{sup}</strong> at ITI</p>
                <p className='lead'>Number of students:   <strong className='text-danger'>{nofStudents}</strong> at ITI</p>
                {this.props.children}
            </div>
        )
    }
}
