import React from 'react'

const updateStore = () => {
    switch (terms) {
        case 'All':
            try{
            let response = await axios.get('/items/all')
            setItems(response.data)
            }catch{
                console.log('all')
            }
            break
        case 'Armor':
            try{
            let response = await axios.get(`/items/type`, {terms})
            console.log('hit armor')
            setItems(response.data)
            }catch{
                console.log('armor')
            }
            break
        case 'Weapon':
            let response = await axios.get(`/items/type`, {terms})
            setItems(response.data)
            break
        case 'Adventure':
            response = await axios.get(`/items/type`, {terms})
            setItems(response.data)
            break
        case 'Light':
            response = await axios.get(`/items/attribute`, {terms})
            setItems(response.data)
            break
        case 'Medium':
            response = await axios.get(`/items/attribute`, {terms})
            setItems(response.data)
            break
        case 'Heavy':
            response = await axios.get(`/items/attribute`, {terms})
            setItems(response.data)
            break
        case 'Bludgeoning':
            response = await axios.get(`/items/attribute`, {terms})
            setItems(response.data)
            break
        case 'Slashing':
            response = await axios.get(`/items/attribute`, {terms})
            setItems(response.data)
            break
        case 'Ranged':
            response = await axios.get(`/items/attribute`, {terms})
            setItems(response.data)
            break
        case 'Bundle':
            response = await axios.get(`/items/attribute`, {terms})
            setItems(response.data)
            break
        case 'Magic':
            response = await axios.get(`/items/attribute`, {terms})
            setItems(response.data)
            break
        case 'Cost':
            response = await axios.get('/items/cost', {terms})
            setItems(response.data)
        default:
            try{
            let respons = await axios.get('/items/all')
            setItems(respons.data)
            }catch{
                console.log('default')
            }
    }
}

export default updateStore