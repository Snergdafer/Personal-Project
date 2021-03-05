import React, {useState, useEffect} from 'react'
import Item from './Item'
import axios from 'axios'

const StoreFront = () => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        axios.get('/items/all').then( res => {
            setItems(res.data)
        })
    })

    const merchandise = () => {
        items.map(elem => {
            <>
                <Item item={elem}/>
            </>
        })
    }

    return (
        <div className="Store">
            <h1>Store Front Component</h1>
            {merchandise()}
        </div>
    )
}

export default StoreFront