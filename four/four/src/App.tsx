// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Server from './Component/servers'
import style  from "./Component/servers.module.css";


const App=()=>{
  return(
    <>
  <div className={style.button_green}>
    <p>server is on</p>
  </div>
    < Server
     status="on"/>
 
    </>
  )
}
export default App
