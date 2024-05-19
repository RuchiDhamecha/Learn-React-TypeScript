import {LeaveProps  } from "./Leave.types";
import style from './Leave.module.scss'

const Leave =({date,description,action}:LeaveProps)=>{
    return (
       <>
        <div className={style.Leave}>
            <div className={style.LeaveText}>
                <span>{date}</span>
                <span>{description}</span>
            </div>

            <div>
                <button onClick={(event: React.MouseEvent<HTMLElement>) => {
                action.map(event=>(event.target as any))
                }}></button>
            </div>
         </div>
        </>
    )
}
export default Leave;