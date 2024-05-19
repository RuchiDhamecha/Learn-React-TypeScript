import { Component, ReactNode } from "react"
import friend from "./components/Friend"
import style from "./App.module.css"

const {Friend,FriendClass} = friend;
const App = () => {
  return (
    <>
    <div className={style.friend}>
      <p >App Component</p>
    </div>
    <Friend/>

    </>
  )
}

class AppComponent extends Component {
  render(): ReactNode {
    return (
      <>
        <div className={style.friend}>
          <p>App Component</p>
        </div>
        <Friend />
    <FriendClass/>

      </>
    )
  }
}

export default {
  App,
  AppComponent
}