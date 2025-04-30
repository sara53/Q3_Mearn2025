import React, { useState } from 'react'
import { ThemeContext } from './themeContext'

export default function ThemeProvider( props ) {

    let [ theme, setTheme ] = useState( 'light' )


    let toggleTheme = () => {

        setTheme( theme == 'light' ? 'dark' : 'light' )
    }
    let value = { theme, toggleTheme }


    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}
