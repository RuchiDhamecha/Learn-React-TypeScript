
import Counter from './Components/Counter'
import style from './Components/Counter.module.scss'

import { useState } from "react";
const App = () => {
 
const [count, setCount] = useState([1, 1, 1]);

  const handleClick = (index: number) => {
    if(index===0){
      count[0] = count[0] + 5;
    }
    if(index===1){
      count[1] = count[1] + 10;
    }
    if(index===2){
      count[2] = count[2] + Math.round(Math.sqrt(count[2]));
    }

    
    const countclone = [...count]; 
    //  data is hcaging but reference is same so doent rerender it , wherenver  rerencers return of compo
    setCount(countclone);
    // setCount(count);
    console.log(count);
  }

  //1

  // let [value1, updatedValue1] = useState(0);
  // let [value2, updatedValue2] = useState(0);
  // let [value3,updatedValue3] = useState(0);

  // function increament1(){
  //     updatedValue1(value1 + 5)
  // }

  // function increament2(){
  //     updatedValue2(value2 + 10)
  // }

  // function increament3(){
  //   updatedValue3(Math.sqrt(value3) + value3);
  // }



  //2

  // const [count, setCount] = useState([0, 0]);

  // const handleClick = (index: number) => {
  //   count[index]++;
  //   const countclone = [...count]; 
  //   //  data is hcaging but reference is same so doent rerender it , wherenver  rerencers return of compo
  //   setCount(countclone);
  //   // setCount(count);
  //   console.log(count);


  //3

    // const [count1, update] = useState(0);
    //  const updatefunc=()=>update(count[0] + 1);
  
  return (
    <div className={style.Box}>

    <Counter count={count[0]} increament={() => handleClick(0)} />
    <Counter count={count[1]} increament={() => handleClick(1)} />
    <Counter count={count[2]} increament={() => handleClick(2)} />

      
      {/* 1
      
      <Counter count={value1} increament={increament1}/>
      <Counter count={value2} increament={increament2}/>
      <Counter count={value3} increament={increament3}/> */}

      {/* 2
      
      <Counter count={count[0]} increament={() => handleClick(1)} /> */}
      {/* //if we directly call it it will satrt invoking when without click .. so here we cant directly register the function we r passing this to counter tsx comp ..it doont knw it has to pass index.. so lets pass nothing === undefined  */}
      {/* <Counter count={count[1]} increament={() => handleClick(0)} /> */}
      


      {/* 3
      <Counter count={count1} increament={updatefunc} /> */}

    </div>
  );
};

export default App;
