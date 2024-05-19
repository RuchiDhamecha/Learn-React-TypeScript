import styles from "./DOM.module.scss"; 
import { DOMProps } from "./DOM.types.ts"
import {useRef} from 'react' 
 
const DOM = ({}: DOMProps) => { 
    const inputref = useRef<HTMLInputElement>(null);

    const handleClick =()=>{
        inputref.current.focus();
    }
    return(
        <>
         <input type="text" ref={inputref}/>
        <button onClick={handleClick}>focus input</button>
        </>
       
    )
} 
 
export default DOM 
