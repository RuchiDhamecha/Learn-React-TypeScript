import style from './Counter.module.scss'
// import {CounterProps} from './Counter.types'

const Counter=(props:any)=>{
return (

<div className={` ${style.Counter}`}>
    <span className={style.Circle}>{props.count}</span>
    <span onClick={props.increament}>Increament</span>
</div>
)
   
   
}
export default  Counter;