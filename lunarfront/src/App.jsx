import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from '/logo.png'
import './App.css'
import Header from './header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <Header/>
      </div>
    </>
  )
}

export default App
