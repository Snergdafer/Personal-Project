import React, {useState, useEffect} from 'react'
import {useLocation, Link, Redirect} from 'react-router-dom'
import '../styles/header.css'



const Header = (props) => {
    const [back, setBack] = useState(false)
    const {pathname} = useLocation()

    useEffect(() => {
        setBack(false)
    })

    

    return (
        <div className="header">

            <div>
                <button onClick={() => pathname === '/account'? setBack(!back) : pathname === '/cart'? setBack(!back) : props.switch()}>
                    {pathname === '/account'? 'Back' : pathname === '/cart'? 'Back' : 'Hamguber'}
                </button>
            </div>
            <div>
            {pathname === '/' && <h1>Fantasy Costco</h1>}
            {pathname === '/store' && <h1>Store</h1>}
            {pathname === '/account' && <h1>Account</h1>}
            </div>
            <div>
                <Link to='/account'>
                    <button>Profile</button>
                </Link>
            </div>
            {back && <Redirect to='./store'/>}

        </div>
    )
}

export default Header