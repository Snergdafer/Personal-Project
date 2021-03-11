import React, {useState, useEffect} from 'react'
import Item from './Item'
import updateSearch from '../redux/itemsReducer'
import { connect } from 'react-redux'

const StoreFront = (props) => {
    const [storeItems, setStoreItems] = useState([])
    

    useEffect(() => {
        console.log('storeLoad')
        setStoreItems(props.itemsReducer.terms)
    },[props.itemsReducer.terms])

    // when redux state updates i then want to reload my storeFront with the new items

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