import React, {useEffect} from 'react'
import axios from 'axios'
import {withRouter, Link} from 'react-router-dom'
import {logoutUser} from '../redux/userReducer'
import UpdateStore from '../hooks/UpdateStore'
import updateSearch from '../redux/itemsReducer'
import {connect} from 'react-redux'

const Menu = (props) => {
    const [items, setTerms] = UpdateStore()

    useEffect(() => {
        updateSearch(items)
    },[items])
    
    const logout = async () => {
        await axios.post('/auth/logout')
        props.logoutUser()
        props.history.push('/')
    }

    // set terms will return items^^^. I then need to set items to
    // redux state

    return(
        <div className={`menu ${props.toggle ? 'active' : ''}`}>
            <div className={'section all'}>
                <button onClick={() => setTerms('All')}>All Items</button>
            </div>
            <div className={'section armor'}>
                <button onClick={() => setTerms('Armor')}>Armor</button>
                <button onClick={() => setTerms('Light')}>Light Armor</button>
                <button onClick={() => setTerms('Medium')}>Medium Armor</button>
                <button onClick={() => setTerms('Heavy')}>Heavy Armor</button>
            </div>
            <div className={'section weapons'}>
                <button onClick={() => setTerms('Weapon')}>Weapons</button>
                <button onClick={() => setTerms('Bludgeoning')}>Bludgeoning Weapons</button>
                <button onClick={() => setTerms('Slashing')}>Slashing Weapons</button>
                <button onClick={() => setTerms('Ranged')}>Ranged Weapons</button>
            </div>
            <div className={'section misc'}>
                <button onClick={() => setTerms('Adventure')}>Adventure</button>
                <button onClick={() => setTerms('Bundle')}>Bundles</button>
                <button onClick={() => setTerms('Magic')}>Magic Items</button>
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

const mapStateToProps = state => state

export default withRouter(connect(mapStateToProps, {logoutUser, updateSearch})(Menu))