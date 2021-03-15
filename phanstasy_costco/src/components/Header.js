import React, {useState, useEffect} from 'react'
import {useLocation, Link, matchPath} from 'react-router-dom'


const Header = (props) => {
    const {pathname} = useLocation()
    
    return (
        <div className="header">

            <div>
                {pathname === '/account' || pathname === '/cart' || matchPath(pathname, {path: '/item/:id'}) ? <button><Link to='/store'>Back</Link></button> : <button onClick={() => props.switch()}>Hamguber</button>}
            </div>

            <div>
            {pathname === '/' && <h1>Fantasy Costco</h1>}
            {pathname === '/store' && <h1>Fantasy Costco</h1>}
            {pathname === '/account' && <h1>Account</h1>}
            {pathname === '/cart' && <h1>Cart</h1>}
            {matchPath(pathname, {path: '/item/:id'}) && <h1>Details</h1>}
            </div>

            <div>
                <Link to='/account'>
                    <button onClick={() => props.toggle && props.switch()}>Profile</button>
                </Link>
            </div>

        </div>
    )
}

export default Header