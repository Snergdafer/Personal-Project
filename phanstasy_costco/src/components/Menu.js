import React from 'react'
import axios from 'axios'
import {withRouter, Link} from 'react-router-dom'
import {logoutUser} from '../redux/userReducer'
import {connect} from 'react-redux'

const Menu = (props) => {


    
    const logout = async () => {
        await axios.post('/auth/logout')
        props.logoutUser()
        props.history.push('/')
    }

    return(
        <div className={`menu ${props.toggle ? 'active' : ''}`}>
            <div className={'section all'}>
                <h3>All Items</h3>
            </div>
            <div className={'section armor'}>
                <h3>Armor</h3>
                <h3>Light Armor</h3>
            </div>
            <div className={'section weapons'}>
                <h3>Weapons</h3>
                <h3>Finess Weapons</h3>
                <h3>Two Handed</h3>
            </div>
            <div className={'section user'}>
                <Link to='/cart'>
                    <button onClick={() => props.switch()}>View Cart</button>
                </Link>
                <button onClick={() => {
                    logout()
                    props.switch()
                }}>Logout</button>
            </div>
        </div>
    )
}

export default withRouter(connect(null, {logoutUser})(Menu))