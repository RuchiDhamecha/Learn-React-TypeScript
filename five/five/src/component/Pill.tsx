import styles from '../stylesheet/Pill.module.scss'
// import {ServerType} from './server.type'

const Pill=(status:boolean)=>{
    const isActive = status ? "on" : "off"
    const pillClasses = status
    ? ` ${styles.PillOnline}`
    : ` ${styles.PillOffline}`

    return (
        
        <div>
            <div className={pillClasses}>
                {isActive}
            </div>
            {/* <div className={dotClasses}></div> */}
        </div>
    )

}
export default Pill;