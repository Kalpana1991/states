import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var[a, kal]=useState('Iam a good boy');
  

  return (
    <>
      <h1>my name is santhosh KOTA {a}</h1>
      <button onClick={()=>kal('iam s student of the fsd course')}>Click</button>
    </>
  )
}

export default App
