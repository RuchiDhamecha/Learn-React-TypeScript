import {Component, ReactNode} from 'react'

const Server = (props:any) => {
    return (
      <>
        <div>
          <p>{props.status?'on':'off'}</p>
        </div>
      </>
    )
  }

  class ServerClass extends Component<any> {
    constructor (props:any){
        super(props)
    }
    render(): ReactNode {
      return (
        <>
        <div>
          <p>{this.props.status} in class</p>
        </div>
      </>
      )
    }
  }
  

export default {
    Server,
    ServerClass
}


