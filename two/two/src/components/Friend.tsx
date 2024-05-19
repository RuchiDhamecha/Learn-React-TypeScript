import { Component, ReactNode } from "react"
import style from './Friend.module.css'

const Friend = () => {
  const Props =(name:any)=>{
    return name
  }
  return (
    <>
      <div >
        <p>{Props.name}</p>
      </div>
    </>
  )
}

class FriendClass extends Component {
  render(): ReactNode {
    return (
      <>
      <div>
        <p>This is friend class</p>
      </div>
    </>
    )
  }
}

export default {
  Friend,
  FriendClass
}