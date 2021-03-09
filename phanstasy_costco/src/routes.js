import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import AccountDetails from './components/AccountDetails'
import Cart from './components/Cart'
import ItemDetails from './components/ItemDetails'
import StoreFront from './components/StoreFront'
import Register from './components/Register'


export default (
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path='/register' component={Register}/>
        <Route path='/account' component={AccountDetails}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/item/:id' component={ItemDetails}/>
        <Route path='/store' component={StoreFront}/>
    </Switch>
)