import React from 'react'
import '../styles/Menu.css'

const Menu = (props) => {
    return(
        <div className={`menu ${props.toggle ? 'active' : ''}`}>
            <h1>menu stuff</h1>
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
                <h3>Cart</h3>
                <h3>Account</h3>
                <h3>Logout</h3>
            </div>
        </div>
    )
}

export default Menu