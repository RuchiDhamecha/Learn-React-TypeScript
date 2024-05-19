import styles from '../stylesheet/Server.module.scss'
import {ServerType} from './server.type'

const Server=({serverName, status}:ServerType)=>{
    const isActive = status ? "on" : "off"
    const pillClasses = status
    ? ` ${styles.Pillonline}`
    : ` ${styles.Pilloffline}`

    const dotClasses = status
    ? `${styles.Dot} ${styles.Dotonline}`
    : `${styles.Dot} ${styles.Dotoffline}`

    return (

    <div className={`${styles.Server}`}>
         <p>server {serverName} </p>
        <div className={styles.PillContainer}>
            <div className={pillClasses}>
                {isActive}
            </div>
            <div className={dotClasses}></div>
        </div>

         <button className={styles.Button} >
            {status ? 'off server':'on server'}
         </button>
    </div>
  
    )

}
export default Server