import style from './LeaveList.module.scss'
import Leave from '../Leave/Leave'
import {LeaveListProps} from './LeaveList.types'
const LeaveList=({title,leaves,action}:LeaveListProps)=>{
    return(
        <>
            <div className={style.LeaveList}>
                <h4>{title}</h4>
                <div>
                    {
                        leaves.map((leave)=>{
                            console.log(leave)
                            return(
                                <>
                                    <Leave
                                    date={leave.date}
                                    description={leave.description}
                                    action={action}
                                    />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default LeaveList;