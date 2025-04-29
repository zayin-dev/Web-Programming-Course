import React, { useContext } from "react";
import '../App.css';
import { Routes, Route }    from "react-routes-dom";
import { AuthContext }      from "./Login/AuthContext";
import { Layout }           from "./Login/Layout";
import { Home }             from './pages/Home';
import { Contacts }         from './pages/Contacts';
import { Blogs }            from './pages/Blog';
import { Wikipedia }        from './pages/Wikipedia';
import { NoPage }           from './pages/notFound';
import { Login }            from './Login/Login';
import { OutletContent }    from './pages/OutletContent';
import { PublicLayout }     from './pages/PublicLayout';
import { Logout }           from './pages/Logout' 

const App = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    return (
        <Routes>
            <Route element = { <PublicLayout/> }>
                <Route path = "/"           element = { <Home /> }/>
                <Route path = "/login"      element = { <Login /> }/>
                <Route path = "/home"       element = { <Home /> }/>
                <Route path = "/blogs"      element = { <Blogs /> }/>
                <Route path = "/contacts"   element = { <Contacts /> }/>
                <Route path = "/logout"     element = { <Logout /> }/>
                <Route path = "*"           element = { <NoPage /> }/>
            </Route>
            
            { isLoggedIn && (
                <Route path = "/private" element = { <OutletConten t/> }>
                    <Route index element = { <Layout /> }/>
                    <Route path = "" element = {  }/>
                    <Route path = "" element = {  }/>
                    <Route path = "" element = {  }/>
                    <Route path = "" element = {  }/>
                </Route>
            )}
        </Routes>
    )
}

