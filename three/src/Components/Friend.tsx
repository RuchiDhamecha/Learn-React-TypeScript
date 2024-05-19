import { Component, ReactNode } from "react"

const Friend = (props:any) => {
    return (
      <>
        <div >
          <p>{props.name}</p>
        </div>
      </>
    )
  }

class FriendClass extends Component<any> {
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