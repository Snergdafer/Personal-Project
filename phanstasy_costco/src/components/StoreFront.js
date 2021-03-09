import React, {useState, useEffect} from 'react'
import Item from './Item'
import axios from 'axios'

const StoreFront = () => {
    const [items, setItems] = useState([])
    
    useEffect( async () => {
        try{
        const response = await axios.get('/items/all')
        setItems(response.data)
        }catch{
            console.log('error')
        }
    }, [])

  

    
    return (
        <div className="Store">
            {items.map(elem => (
                <>
                    <Item item={elem}/>
                </>
            ))}
        </div>
    )
}

export default StoreFront