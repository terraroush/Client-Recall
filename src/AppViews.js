import React from 'react'
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ClientList } from './clients/ClientList'
import { ClientProvider } from './clients/ClientProvider'
import { ClientDetail } from './clients/ClientDetail'


export const AppViews = () => {
  
    return (
    <>
        <Route exact path="/">
            <Home />
        </Route>

        <ClientProvider>
            <Route exact path="/clients">
                
                <ClientList />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route exact path="/clients/detail/:clientId(\d+)">
                <ClientDetail />
            </Route>
        </ClientProvider>

    </>
)
}