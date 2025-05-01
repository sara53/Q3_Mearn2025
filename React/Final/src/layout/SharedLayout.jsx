import React from 'react'
import { Header } from '../components'
import { Outlet } from 'react-router-dom'

export function SharedLayout() {
    return (
        <>
            <Header />
            <Outlet />



        </>
    )
}
