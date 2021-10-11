import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navbar from './Navbar';
import Body from './Body';
import Blog from './Blog/Blog';
import Login from '../components/Auth/Login';
import Register from './Auth/Register';
import Products from './products/Products';
import Footer from './footer';

const Main = () => {

    if (localStorage.getItem('data') === null) {

        return (
            <Router>

                <Switch>
                    <Route exact path="/">
                        <Body />
                    </Route>

                    <Route exact path="/blog">
                        <Navbar position="right-0" activeBlog="true" />
                        <Blog />
                    </Route>

                    <Route exact path="/products">
                        <Navbar position="right-0" activeProducts="true" />
                        <Products />
                    </Route>

                    <Route exact path="/login">
                        <Navbar position="right-0" />
                        <Login  redirect="home"/>
                    </Route>

                    <Route exact path="/register">
                        <Navbar position="right-0" />
                        <Register />
                    </Route>

                </Switch>
                <Footer />
            </Router>
        );

    } else {

        return (
            <Router>

                <Switch>
                    <Route exact path="/">
                        <Body />
                    </Route>

                    <Route exact path="/blog">
                        <Navbar position="right-0" activeBlog="true" />
                        <Blog />
                    </Route>

                    <Route exact path="/products">
                        <Navbar position="right-0" activeProducts="true" />
                        <Products />
                    </Route>

                    <Route exact path="/login">
                        <Navbar position="right-0" />
                        <Login redirect="home"/>
                    </Route>

                    <Route exact path="/register">
                        <Navbar position="right-0" />
                        <Register redirect="home" />
                    </Route>

                </Switch>
                <Footer />
            </Router>
        );
    }




}

export default Main;
