import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Button'

function App() {
  
  const [isCliked, setIsClicked] = useState(false)
  function clicked(){
    setIsClicked(!isCliked)
   
  }

  return (
    <>
      <button onClick={()=>clicked()}>button</button>
      {
        isCliked && <Button/>
      }
    </>
  )
}

export default App
