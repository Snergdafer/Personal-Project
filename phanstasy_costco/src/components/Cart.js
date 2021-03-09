import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Item from './Item'
import axios from 'axios'

const Cart = () => {
    const [cart, setCart] = useState([])
    const [emptyCart, setEmptyCart] = useState(true)

    useEffect( async () => {
        setEmptyCart(true)
        try{
            const getCart = await axios.get('/cart/get')
            if(getCart) {
                setCart(getCart.data)
                setEmptyCart(false)
            }
        }catch{
            console.log('Error getting cart. Log in maybe')
        }
    },[])

    const removeFromCart = (id) => {
        console.log('steve')
        axios.delete(`/cart/remove/${id}`)
    }

    console.log(cart[0])

    return (
        <div className="Cart">
            {emptyCart? <h1>Your cart is empty! Go get some stuff</h1>:(
                <>
                {cart.map(elem => (
                <>
                    <Item item={elem}/>
                    <button onClick={() => removeFromCart(elem.item_id)}>Remove</button>
                </>

            ))}</>)}
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Cart)