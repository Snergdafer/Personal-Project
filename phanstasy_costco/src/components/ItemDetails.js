import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const ItemDetails = () => {
    const {id} = useParams()
    const [item, setItem] = useState({
        name: '',
        type: '',
        attr: '',
        image: '',
        desc: '',
        cost: null
    })

    useEffect( async () => {
        try{
            const itemInfo = await axios.get(`/items/${id}`)
            console.log(itemInfo.data)
            setItem({
                name: itemInfo.data.item_name,
                type: itemInfo.data.item_type,
                attr: itemInfo.data.item_attributes,
                image: itemInfo.data.item_image,
                desc: itemInfo.data.item_desc,
                cost: itemInfo.data.item_cost
            })
        }catch{
            console.log('Error getting item details')
        }
        
    },[])

    const addToCart = (id) => {
        axios.post(`/cart/add/${id}`)
        console.log(id)
    }

    return (
        <div className="ItemDetails">
            <h1>{item.name}</h1>
            <img src={item.image}/>
            <p>Description: <br/>{item.desc}</p>
            <h1>Price: {item.cost}</h1>
            <button onClick={() => addToCart(id)}>Add to cart</button>
        </div>
    )
}

export default ItemDetails