import React, {useEffect} from 'react'
import axios from 'axios'
import {withRouter, Link} from 'react-router-dom'
import {logoutUser} from '../redux/userReducer'
import UpdateStore from '../hooks/UpdateStore'
import {updateSearch} from '../redux/itemsReducer'
import {connect} from 'react-redux'

const Menu = (props) => {
    const [items, setTerms] = UpdateStore()

    //This moves all the axios responses from the custom Hook to Redux
    useEffect(() => {
        props.updateSearch(items)
    },[items])
    
    
    const logout = async () => {
        await axios.post('/auth/logout')
        props.logoutUser()
        props.history.push('/')
    }


    return(
        <div className={`menu ${props.toggle ? 'active' : ''}`}>
            <div className={'section all'}>

                <button onClick={() => {
                    setTerms('All')
                    props.switch()
                }}>All Items</button>

            </div>
            <div className={'section armor'}>

                <button onClick={() => {
                    setTerms('Armor') 
                    props.switch()
                }}>Armor</button>
                <button onClick={() => {
                    setTerms('Light')
                    props.switch()
                }}>Light Armor</button>
                <button onClick={() => {
                    setTerms('Medium')
                    props.switch()
                }}>Medium Armor</button>
                <button onClick={() => {
                    setTerms('Heavy')
                    props.switch()
                }}>Heavy Armor</button>

            </div>
            <div className={'section weapons'}>

                <button onClick={() => {
                    setTerms('Weapon')
                    props.switch()
                }}>Weapons</button>
                <button onClick={() => {
                    setTerms('Bludgeoning')
                    props.switch()
                }}>Bludgeoning Weapons</button>
                <button onClick={() => {
                    setTerms('Slashing')
                    props.switch()
                }}>Slashing Weapons</button>
                <button onClick={() => {
                    setTerms('Ranged')
                    props.switch()
                }}>Ranged Weapons</button>

            </div>
            <div className={'section misc'}>

                <button onClick={() => {
                    setTerms('Adventure')
                    props.switch()
                }}>Adventure</button>
                <button onClick={() => {
                    setTerms('Bundle')
                    props.switch()
                }}>Bundles</button>
                <button onClick={() => {
                    setTerms('Magic')
                    props.switch()
                }}>Magic Items</button>

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