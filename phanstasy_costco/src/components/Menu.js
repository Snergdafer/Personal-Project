import React, {useState} from 'react'
import axios from 'axios'
import {withRouter, Link} from 'react-router-dom'
import {logoutUser} from '../redux/userReducer'
import {updateSearch} from '../redux/itemsReducer'
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
                <button onClick={() => props.updateSearch('All')}>All Items</button>
            </div>
            <div className={'section armor'}>
                <button onClick={() => props.updateSearch('Armor')}>Armor</button>
                <button onClick={() => props.updateSearch('Light')}>Light Armor</button>
                <button onClick={() => props.updateSearch('Medium')}>Medium Armor</button>
                <button onClick={() => props.updateSearch('Heavy')}>Heavy Armor</button>
            </div>
            <div className={'section weapons'}>
                <button onClick={() => props.updateSearch('Weapon')}>Weapons</button>
                <button onClick={() => props.updateSearch('Bludgeoning')}>Bludgeoning Weapons</button>
                <button onClick={() => props.updateSearch('Slashing')}>Slashing Weapons</button>
                <button onClick={() => props.updateSearch('Ranged')}>Ranged Weapons</button>
            </div>
            <div className={'section misc'}>
                <button onClick={() => props.updateSearch('Adventure')}>Adventure</button>
                <button onClick={() => props.updateSearch('Bundle')}>Bundles</button>
                <button onClick={() => props.updateSearch('Magic')}>Magic Items</button>
            </div>
            <div className={'section user'}>
                <Link to='/cart'>
                    <button onClick={() => props.switch()}>View Cart</button>
                </Link>
                <button onClick={() => {
                    logout()
                    props.updateSearch('')
                    props.switch()
                }}>Logout</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => state

export default withRouter(connect(mapStateToProps, {logoutUser, updateSearch})(Menu))