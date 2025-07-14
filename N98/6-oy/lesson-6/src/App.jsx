import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Product from './components/produtcs/product'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Product/>
    </>
  )
}

export default App
