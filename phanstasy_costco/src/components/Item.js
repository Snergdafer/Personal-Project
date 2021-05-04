import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Item = (props) => {
    const [itemId, setItemId] = useState('')
    
    useEffect(() => {
        setItemId(props.item.item_id)
    },[])


    return (
        <Link to={`/item/${itemId}`}>
            <div className="ItemCard">
                <h4>{props.item.item_name}</h4>
                <img src={props.item.item_image} className={'itemImage'}/>
            </div>
        </Link>
    )
}

export default Item