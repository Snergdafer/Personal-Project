import {useState} from 'react'

const NavStyles = () => {
    const [style, setStyle] = useState({
        header: {
            backgroundColor: 'blue',
            height: 100,
            width: '110vw',
            display: 'flex'
        },
        menu: {
            position: 'fixed',
            right: 200,
            display: 'flex',
            flexDirection: 'column'
        }
    })
    return style
}

export default NavStyles