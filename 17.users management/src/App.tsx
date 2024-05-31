import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.scss'
import Header from './component/Header/Header'
import Main from './component/Main/Main'

function App() {
    return(
      <>
      <div className={style.App}>
        <Header/>
        <Main/>
      </div>
      
      </>
    )
}

export default App
