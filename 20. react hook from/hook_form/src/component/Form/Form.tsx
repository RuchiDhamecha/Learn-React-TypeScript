import { useState } from "react";
import styles from "./Form.module.scss"; 
// import { FormProps } from "./Form.types.ts" 
import {useForm} from 'react-hook-form'
 // useform is object have these functions which can be used as props.. 
 //they are not actucall props
 const {register, unregister,handleSubmit,reset} = useForm();

 const {onChange,onBlur,ref,name} = register("firstname");
//  const [showInput, setShowInput]=useState(true);


    const onSubmit=(data:any)=>console.log(data);
    
 
//  <input type="text" />
const Form = () => {

     return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label htmlFor="name">name</label>
                <input type="text"
                id="username"
                {...register("username",{
                    required:true,
                    maxLength:20,
                    minLength:1,
                    valueAsNumber:true,
                    valueAsDate:false,
                    disabled:true,
                    onChange:()=>{console.log('habsx')},
                    onBlur:()=>{console.log('habsx')}
                    
                })}
            
                />
                </div>
                <div>
                    <input type="text" {...unregister}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <div>
                    <button type="submit" onClick={()=>{unregister}}>unregister</button>
                </div>
            </form>
        </div>
     )
} 
 
export default Form 
