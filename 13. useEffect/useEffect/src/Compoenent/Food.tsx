import { Component } from "react";
import style from "./Food.module.scss";
import { FoodProps } from "./FoodProps";
import { useEffect, useState } from "react";

const Food = ({ foodname, seconds }: FoodProps) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
//   const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1);

    //   setVisible(false);
    }, 1000);
    console.log(intervalId)
    return () => clearInterval(intervalId);
  }, []);

  useEffect(()=>{
    
  },[])

  
  return (
    <>
      {
        (timeLeft > 0) ? (
            <div className={style.Box}>
            <p>{foodname}</p>
            <p>timeLeft: {timeLeft}s </p>
            </div>
        ) : (
            <div />
        )
      }

      {/* <p>timeLeft: {timeLeft}s </p>  */}

    </>
  );
};

export default Food;

// interface FoodState {
//     timeLeft: number;
//   }
  
//   class Food extends Component<FoodProps, FoodState> {
//     constructor(props: FoodProps) {
//       super(props);
//       this.state = {
//         timeLeft: props.seconds,
//       };
//       this.intervalId = null; 
//     }
  
//     componentDidMount() {
//       this.intervalId = setInterval(() => {
//         this.setState((prevState) => ({
//           timeLeft: prevState.timeLeft > 0 ? prevState.timeLeft - 1 : 0,
//         }));
//       }, 1000);
//       console.log(this.intervalId);
//     }
  
//     componentWillUnmount() {
//       clearInterval(this.intervalId);
//     }
  
//     render() {
//       const { timeLeft } = this.state;
  
//       return (
//         <>
//           {(timeLeft > 0) ? (
//             <div className={style.Box}>
//               <p>{this.props.foodname}</p>
//               <p>timeLeft: {timeLeft}s</p>
//             </div>
//           ) : (
//             <div />
//           )}
  
//         </>
//       );
//     }
//   }
  
//   export default Food;