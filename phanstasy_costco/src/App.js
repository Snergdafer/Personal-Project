import routes from './routes'
import Header from './components/Header'
import Menu from './components/Menu'
import {useState} from 'react'
import './styles/App.css'

function App() {
  const [toggle, setToggle] = useState(false)

  const propsToggle = () => {
    setToggle(!toggle)
  }


  return (
    <div className="App">
      <Header switch={propsToggle} toggle={toggle}/>
      <Menu toggle={toggle} switch={propsToggle}/>
      {routes}
    </div>
  );
}

export default App;
