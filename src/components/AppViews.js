import React from 'react'
import { Route } from "react-router-dom"
import { Home } from "../components/Home"
import { ClientList } from '../components/clients/ClientList'
import { ClientProvider } from '../components/clients/ClientProvider'
import { ClientDetail } from '../components/clients/ClientDetail'
import { ClientForm } from '../components/clients/ClientForm'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { SidebarLeft } from './sidebars/SidebarLeft'
import { SidebarRight } from './sidebars/SidebarRight'


export const AppViews = () => {
  
    return (
    <>
        <Route exact path="/">
            <Header />
            <SidebarLeft />
            <Home />
            <SidebarRight />
            <Footer />
        </Route>

        <ClientProvider>
            <Route exact path="/clients">
                <Header />
                <SidebarLeft />
                <ClientList />
                <SidebarRight />
                <Footer />
            </Route>
        </ClientProvider>
        
        <ClientProvider>
            <Route path="/clients/create">
                <Header />
                <SidebarLeft />
                <ClientForm />
                <SidebarRight />
                <Footer />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route path="/clients/detail/:clientId(\d+)">
                <Header />
                <SidebarLeft />
                <ClientDetail />
                <SidebarRight />
                <Footer />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route path="/clients/edit/:clientId(\d+)">
                <Header />
                <SidebarLeft />
                <ClientForm />
                <SidebarRight />
                <Footer />
            </Route>
        </ClientProvider>

        <ClientProvider>
            <Route exact path="/client-center">
                <Header />
                <SidebarLeft />
                <ClientDetail />
                <SidebarRight />
                <Footer />
            </Route>
        </ClientProvider>

    </>
)
}