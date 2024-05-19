import { useState } from 'react'
import style from './Counter.module.scss'
import {CounterProps} from './Counter.types'

const Counter=({}:CounterProps)=>{

    let [value, updatedValue] = useState(0);
    function increament(){
        updatedValue(value + 1)
    }
    function decreament(){
        updatedValue(value - 1)
    }

    return(
        <div className={style.Counter}>
            <span onClick = {increament}>+</span>
            <span>{value}</span>
            <span onClick = {decreament}>-</span>
        </div>
    )
}
export default  Counter;