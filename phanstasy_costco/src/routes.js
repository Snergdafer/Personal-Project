import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import AccountDetails from './components/AccountDetails'
import Cart from './components/Cart'
import ItemDetails from './components/ItemDetails'
import StoreFront from './components/StoreFront'


export default (
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path='/account' component={AccountDetails}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/details' component={ItemDetails}/>
        <Route path='/store' component={StoreFront}/>
    </Switch>
)