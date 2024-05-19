// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Friends from './Components/Friend'
import Servers from './Components/server'
import Profile from './Components/profile'


const App=()=>{
  return(
    <>
    <Friends.Friend name='nayan'/>
    <Friends.Friend name='ruchi'/>
    <Friends.Friend name='vaishnavi'/>
    <Friends.Friend name='sanika'/>
    <Friends.Friend name='sacja'/>
    <Servers.Server status = "on"/>
    <Servers.ServerClass status = "off"/>
    <Profile 
    name='rchi'
    surname="djamecha"
    age={21}
    isMarried={false}
    friends={['a','b','c']}
    // address="{
    //   city':dhule'
    // }",


    />
 
    </>
  )
}
export default App
