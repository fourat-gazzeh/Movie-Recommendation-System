// src/components/Routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Profile from '../pages/Profile/Profile';

const Routes = () => {

    return (
        <Switch>
            <Route path='/profile' component={Profile} exact /> {/* Specific route for profile */}
            <Route path='/:category/search/:keyword' component={Catalog} exact />
            <Route path='/:category/:id' component={Detail} exact />
            <Route path='/:category' component={Catalog} exact />
            <Route path='/' component={Home} exact />
        </Switch>
    );
}

export default Routes;
