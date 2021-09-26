import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navbar from './Navbar';
import Body from './Body';
import Blog from './Blog/Blog';
import Footer from './footer'

const Main = () => {
    return (
        <Router>

            <Switch>
                <Route exact path="/blog">
                    <Navbar position="right-2/4" />
                    <Blog />
                </Route>

                <Route exact path="/">
                    <Body />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default Main;
