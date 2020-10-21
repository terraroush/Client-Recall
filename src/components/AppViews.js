import React from 'react'
import { Route } from "react-router-dom"
import { Home } from "../components/Home"
import { ClientList } from '../components/clients/ClientList'
import { ClientProvider } from '../components/clients/ClientProvider'
import { ClientDetail } from '../components/clients/ClientDetail'
import { ClientForm } from '../components/clients/ClientForm'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { SideBar } from './sidebar/SideBar'


export const AppViews = () => {
  
    return (
    <>
        <Route exact path="/">
            <Header />
            <SideBar />
            <Home />
            <Footer />
        </Route>

        <ClientProvider>
            <Route exact path="/clients">
                <Header />
                <SideBar />
                <ClientList />
                <Footer />
            </Route>
        </ClientProvider>
        
        <ClientProvider>
            <Route path="/clients/create">
                <Header />
                <SideBar />
                <ClientForm />
                <Footer />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route path="/clients/detail/:clientId(\d+)">
                <Header />
                <SideBar />
                <ClientDetail />
                <Footer />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route path="/clients/edit/:clientId(\d+)">
                <Header />
                <SideBar />
                <ClientForm />
                <Footer />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route exact path="/client-center">
                <Header />
                <SideBar />
                <ClientDetail />
                <Footer />
            </Route>
        </ClientProvider>

    </>
)
}