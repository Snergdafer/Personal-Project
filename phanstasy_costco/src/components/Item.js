import React from 'react'

const Item = (props) => {
    

    return (
        <div className="ItemCard">
            <h4>{props.item.item_name}</h4>
            <img src={props.item.item_image}/>
        </div>
    )
}

export default Item