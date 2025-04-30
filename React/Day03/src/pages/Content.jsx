import React from 'react'
import { GradientButton, SharedButton } from '../styledComponents/SharedButton'
import { SharedTitle } from '../styledComponents/SharedTitle'

export default function Content() {

    return (
        <div className='container alert alert-light p-5'>
            <SharedTitle>Content Component</SharedTitle>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae possimus aspernatur maxime ratione quae ipsa. Obcaecati fugit qui modi enim ullam officiis laudantium vel distinctio. Autem laborum asperiores officia.</p>
            <GradientButton>Go To Home</GradientButton>

        </div>
    )
}
