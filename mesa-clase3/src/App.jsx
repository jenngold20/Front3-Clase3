import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Menu from './components/Menu'
import Parrafo from './components/Parrafo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Button>
        {"Vamos Camada 2"}
      </Button>
      <Menu lista={["boton 1","boton 2","boton 3","boton 1"]}></Menu>
     <Parrafo name="Camada 2"></Parrafo>
     <Parrafo name="Camada 1"></Parrafo>
    </>
  )
}

export default App
