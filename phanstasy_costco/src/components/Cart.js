import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Item from './Item'
import axios from 'axios'

const Cart = () => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect( async () => {
        try{
            const getCart = await axios.get('/cart/get')
            setCart(getCart.data)
        }catch{
            console.log('Error getting cart. Log in maybe')
        }
    },[])

    useEffect(() => {
        if(cart[0]){
        let costTotal = 0
        cart.forEach((i) => {
            costTotal += i.item_cost
        })
        setTotal(costTotal)
        }
    },[cart])

    const removeFromCart = async (id) => {
        const newCart = await axios.delete(`/cart/remove/${id}`)
        setCart(newCart.data)
    }

    console.log(cart)

    return (
        <div className="Cart">
            {!cart[0]? <h1>Your cart is empty! Go get some stuff</h1>:(
                <>
                    <div className={'cartItems'}>

                        {cart.map(elem => (
                        <>
                            <Item item={elem}/>
                            <button onClick={() => removeFromCart(elem.cart_id)}>Remove</button>
                        </>
                        ))}

                    </div>
                    
                    <h1>Total: {total}</h1>
                </>
            )}
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Cart)