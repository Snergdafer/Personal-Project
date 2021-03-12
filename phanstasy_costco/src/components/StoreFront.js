import React, {useState, useEffect} from 'react'
import Item from './Item'
import updateSearch from '../redux/itemsReducer'
import { connect } from 'react-redux'

const StoreFront = (props) => {
    const [storeItems, setStoreItems] = useState([])
    

    //This keeps this component's state up to date with Redux
    useEffect(() => {
        console.log('hit')
        setStoreItems(props.itemsReducer.terms)
    },[props.itemsReducer.terms])



    return (
        <div className="Store">
            {storeItems.map(elem => (
                <>
                    <Item item={elem}/>
                </>
            ))}
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {updateSearch})(StoreFront)