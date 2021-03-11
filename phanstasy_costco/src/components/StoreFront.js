import React, {useState, useEffect} from 'react'
import Item from './Item'
import axios from 'axios'
import { connect } from 'react-redux'

const StoreFront = (props) => {
    const [items, setItems] = useState([])
    const {terms} = props.itemsReducer

    
    useEffect( () => {
        const getData = async () => {
        console.log('effect')
        updateStore()
                 
    } 
    getData() 
    }, [props.terms])

    const updateStore = () => {
        
    }

    
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

const mapStateToProps = state => state

export default connect(mapStateToProps, {})(StoreFront)