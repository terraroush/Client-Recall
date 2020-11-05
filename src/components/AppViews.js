import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../components/Home";
import { ClientList } from "../components/clients/ClientList";
import { ClientProvider } from "../components/clients/ClientProvider";
import { ClientForm } from "../components/clients/ClientForm";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { SidebarLeft } from "./sidebars/SidebarLeft";
import { SidebarRight } from "./sidebars/SidebarRight";
import { VisitProvider } from "./visits/VisitProvider";
import { VisitList } from "./visits/VisitList";
import { ClientSearch } from "./clients/ClientSearch";
import { VisitForm } from "./visits/VisitForm";
import { UserProvider } from "./users/UserProvider";
import { PhotoFormUpload } from "./photos/PhotoForm";
import { PhotoProvider } from "./photos/PhotoProvider";

export const AppViews = () => {
  return (
    <>
    <UserProvider>
    <PhotoProvider>
      <ClientProvider>
        <VisitProvider>
          <Header />
          <SidebarLeft />

          <Route exact path="/">
            <Home />
          </Route>
          

          <Route exact path="/clients">
            <ClientList />
          </Route>

          <Route path="/clients/create">
            <ClientForm />
          </Route>

          <Route path="/clients/edit/:clientId(\d+)">
            <ClientForm />
          </Route>

          <Route exact path="/client-history/:clientId(\d+)">
            <VisitList />
          </Route>

          <Route exact path="/client-history/edit/:visitId(\d+)">
            <VisitForm />
          </Route>

          <Route exact path="/client-history/create">
            <VisitForm />
          </Route>

          <Route exact path="/client-photos/edit/:visitId(\d+)">
            <PhotoFormUpload />
          </Route>

          <Route exact path="/client-photos/create">
            <PhotoFormUpload />
          </Route>

          <Route exact path="/client-history/search">
            <ClientSearch />
          </Route>

          <SidebarRight />
          <Footer />
        </VisitProvider>
      </ClientProvider>
      </PhotoProvider>
      </UserProvider>
    </>
  );
};
