import React from 'react'
import ReactDOM from 'react-dom/client'
import main from './App.tsx'
import './index.css'


const {App, AppComponent} = main
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <AppComponent/>
  </React.StrictMode>,
)
