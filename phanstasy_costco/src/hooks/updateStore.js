import {useState, useEffect} from 'react'
import axios from 'axios'

const UpdateStore = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const func = async () => {
            let response = await axios.get('/items/all')
            setItems(response.data)
        }
        func()
    },[])


    //   | -This holds all the axios calls to get items by type or attribute- |
    //   V                                                                    V

    const doStuff = async (terms) => {
    switch (terms) {
        case 'All':
            try{
            let response = await axios.get('/items/all')
            setItems(response.data)
            }catch{
                console.log('all err')
            }
            break
        case 'Armor':
            try{
            let response = await axios.get(`/items/type/${terms}`)
            console.log(items)
            setItems(response.data)
            }catch{
                console.log('armor err')
            }
            break
        case 'Weapon':
            try{
            let response = await axios.get(`/items/type/${terms}`)
            setItems(response.data)
            }catch{
                console.log('weapon err')
            }
            break
        case 'Adventure':
            try{
            let response = await axios.get(`/items/type/${terms}`)
            setItems(response.data)
            }catch{
                console.log('adventure err')
            }
            break
        case 'Light':
            try{
            let response = await axios.get(`/items/attribute/${terms}`)
            setItems(response.data)
            }catch{
                console.log('light err')
            }
            break
        case 'Medium':
            try{
            let response = await axios.get(`/items/attribute/${terms}`)
            setItems(response.data)
            }catch{
                console.log('medium err')
            }
            break
        case 'Heavy':
            try{
            let response = await axios.get(`/items/attribute/${terms}`)
            setItems(response.data)
            }catch{
                console.log('heavy err')
            }
            break
        case 'Bludgeoning':
            try{
            let response = await axios.get(`/items/attribute/${terms}`)
            setItems(response.data)
            }catch{
                console.log('bludgeoning err')
            }
            break
        case 'Slashing':
            try{
            let response = await axios.get(`/items/attribute/${terms}`)
            setItems(response.data)
            }catch{
                console.log('slashing err')
            }
            break
        case 'Ranged':
            try{
            let response = await axios.get(`/items/attribute/${terms}`)
            setItems(response.data)
            }catch{
                console.log('ranged err')
            }
            break
        case 'Bundle':
            try{
            let response = await axios.get(`/items/attribute/${terms}`)
            setItems(response.data)
            }catch{
                console.log('bundle err')
            }
            break
        case 'Magic':
            try{
            let response = await axios.get(`/items/attribute/${terms}`)
            setItems(response.data)
            }catch{
                console.log('magic err')
            }
            break
        default:
            try{
            let respons = await axios.get('/items/all')
            setItems(respons.data)
            }catch{
                console.log('default')
            }
    }}
    return [items, doStuff]
}

export default UpdateStore