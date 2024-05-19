import { Component } from 'react';
import Food from './Compoenent/Food'

class App extends Component {
 
  constructor(props: {}) {
    super(props);

  }

  // this.state

  render() {
    return (
      <>


        <Food foodname="coffee" seconds={6} />
        <Food foodname="pizza" seconds={10}/>
      </>
     
    )
  }
}

export default App;


// this.state is immutable can be changed
// constructor(){
//   super();

//   this.state = {
//     msg = "hello"
//   }
// }

// subscribe(){
//   this.setState({
//     msg ="onclick"
//   )}
// }
