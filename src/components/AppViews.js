import React from 'react'
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ClientList } from './clients/ClientList'
import { ClientProvider } from './clients/ClientProvider'
import { ClientDetail } from './clients/ClientDetail'
import { ClientForm } from './clients/ClientForm'


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
            <Route path="/clients/create">
                <ClientForm />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route path="/clients/detail/:clientId(\d+)">
                <ClientDetail />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route path="/clients/edit/:clientId(\d+)">
                <ClientForm />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route exact path="/client-center">
            
                <ClientDetail />
            </Route>
        </ClientProvider>

    </>
)
}