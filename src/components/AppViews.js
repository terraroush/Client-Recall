import React from 'react'
import { Route } from "react-router-dom"
import { Home } from "../components/Home"
import { ClientList } from '../components/clients/ClientList'
import { ClientProvider } from '../components/clients/ClientProvider'
import { ClientDetail } from '../components/clients/ClientDetail'
import { ClientForm } from '../components/clients/ClientForm'
import { Header } from '../components/header/Header'


export const AppViews = () => {
  
    return (
    <>
        <Route exact path="/">
        <Header />
            <Home />
        </Route>

        <ClientProvider>
            <Route exact path="/clients">
            <Header />
                <ClientList />
             
            </Route>
        </ClientProvider>
        
        <ClientProvider>
            <Route path="/clients/create">
            <Header />
                <ClientForm />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route path="/clients/detail/:clientId(\d+)">
            <Header />
                <ClientDetail />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route path="/clients/edit/:clientId(\d+)">
            <Header />
                <ClientForm />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route exact path="/client-center">
            <Header />
                <ClientDetail />
            </Route>
        </ClientProvider>

    </>
)
}