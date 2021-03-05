import routes from './routes'
import Header from './components/Header'
import Menu from './components/Menu'
import {useState} from 'react'
import './styles/App.css'

function App() {
  const [toggle, setToggle] = useState(false)

  const propsToggle = () => {
    console.log('stuff')
    setToggle(!toggle)
  }

  console.log(Header)

  return (
    <div className="App">
      <Header switch={propsToggle}/>
      <Menu toggle={toggle}/>
      {routes}
    </div>
  );
}

export default App;
