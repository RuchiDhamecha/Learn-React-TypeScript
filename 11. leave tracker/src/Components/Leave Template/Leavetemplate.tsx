import style from './Leave_template.module.scss'
import {LeaveTemplateProps} from './Leave_template.types'
import Body from '../Body/Body'
import { leavetype } from '../Body/Body.types';

const Leavetemplate=({leavetype}:leavetype)=>{
    let button1 , button2;
    if(leavetype === 'S'){
        button1 = 'M'; button2 = 'P'
    }
    else if(leavetype === 'M'){
        button1 = 'S'; button2 = 'P'
    }
    else{
        button1 = 'M'; button2 = 'S'
    }
    
    console.log(button1)
    
    if(leavetype==="sick"){
        const sicklist =({data}:LeaveTemplateProps[])=>{
            let sickBox = data.map((item:LeaveTemplateProps)=>{
                return(
                    <div className={style.Template}>
                        {leavetype}
                        <div>
                            <p>{item.date}</p>
                            <p>{item.occasion}</p>
                        </div>
                        
                        <div>
                            <button>{button1}</button>
                            <button>{button2}</button>
                        </div>
                    </div>
                );
            });
            }
        }
       
   
}

export default Leavetemplate;