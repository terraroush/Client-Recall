import React from 'react'
import { Route } from "react-router-dom"
import { Home } from "../components/Home"
import { ClientList } from '../components/clients/ClientList'
import { ClientProvider } from '../components/clients/ClientProvider'
import { ClientForm } from '../components/clients/ClientForm'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { SidebarLeft } from './sidebars/SidebarLeft'
import { SidebarRight } from './sidebars/SidebarRight'
import { VisitProvider } from './visits/VisitProvider'
import { VisitList } from './visits/VisitList'
import { ClientSearch } from './clients/ClientSearch'
import { VisitForm } from './visits/VisitForm'

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
        
            <Route path="/clients/create">
                <Header />
                <SidebarLeft />
                    <ClientForm />
                <SidebarRight />
                <Footer />
            </Route>
        
            <Route path="/clients/edit/:clientId(\d+)">
                <Header />
                <SidebarLeft />
                    <ClientForm />
                <SidebarRight />
                <Footer />
            </Route>
        
            <VisitProvider>
                
                <Route exact path="/client-history/:clientId(\d+)">
                    <Header />
                    <SidebarLeft />
                        <VisitList />
                    <SidebarRight />
                    <Footer />
                </Route>
            
                <Route exact path="/client-history/create">
                    <Header />
                    <SidebarLeft />
                        <VisitForm />
                    <SidebarRight />
                    <Footer />
                </Route>
            
                <Route exact path="/client-history/search">
                    <Header />
                    <SidebarLeft />
                        <ClientSearch />
                    <SidebarRight />
                    <Footer />
                </Route>
            </VisitProvider>
        </ClientProvider>
    </>
)
}