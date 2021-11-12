import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';


import { withStyles } from "@mui/styles";



import Navbar from './components/Navbar';
import Home from './components/Home';
import Crypto from './components/Crypto';
import News from './components/News';


import styles from './styles';
import Exchanges from './components/Exchanges';

require('dotenv').config()


const App = (props) => {

    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className={classes.Navbar}>
                <Navbar />
            </div>
            <div className={classes.main}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
                <Switch>
                    <Route extact path="/cryptocurrencies">
                        <Crypto />
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/exchanges">
                        <Exchanges />
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/news">
                        <News />
                    </Route>
                </Switch>
            </div>
            <div className={classes.footer}>
                <p className={classes.ftext}>&copy; 2021 privacy policy</p>
            </div>
        </div >
    )
}

export default withStyles(styles)(App);
