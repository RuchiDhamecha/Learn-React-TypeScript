import styles from "./useRef.module.scss"; 
import { useRefProps } from "./useRef.types.ts" 
import {useRef} from 'react'
 
const UseRef = ({}: useRefProps) => { 
    let counterRef = useRef(0);
    function handleClick(){
        counterRef.current = counterRef.current + 1;
    }

    return(
        <>
        <button onClick={handleClick}>
            u clicked {counterRef.current}
        </button>
        </>
    )
} 
 
export default UseRef 
