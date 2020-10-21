import React from 'react'
import { Route } from "react-router-dom"
import { Home } from "../components/Home"
import { ClientList } from '../components/clients/ClientList'
import { ClientProvider } from '../components/clients/ClientProvider'
import { ClientDetail } from '../components/clients/ClientDetail'
import { ClientForm } from '../components/clients/ClientForm'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'


export const AppViews = () => {
  
    return (
    <>
        <Route exact path="/">
            <Header />
            <Home />
            <Footer />
        </Route>

        <ClientProvider>
            <Route exact path="/clients">
                <Header />
                <ClientList />
                <Footer />
            </Route>
        </ClientProvider>
        
        <ClientProvider>
            <Route path="/clients/create">
                <Header />
                <ClientForm />
                <Footer />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route path="/clients/detail/:clientId(\d+)">
                <Header />
                <ClientDetail />
                <Footer />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route path="/clients/edit/:clientId(\d+)">
                <Header />
                <ClientForm />
                <Footer />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route exact path="/client-center">
                <Header />
                <ClientDetail />
                <Footer />
            </Route>
        </ClientProvider>

    </>
)
}