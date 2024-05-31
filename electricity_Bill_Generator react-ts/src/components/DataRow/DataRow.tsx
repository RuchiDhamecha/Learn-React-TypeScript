import styles from "./DataRow.module.scss"; 
import { DataRowProps } from "./DataRow.types.ts" 
 
const DataRow = ({fullName,location}: DataRowProps) => { 
    return(
        <div className={styles.DataRow}>
            <span>{fullName}</span>
            <span>{location}</span>
            <button>Raise Issue</button>
        </div>
    )
} 

export default DataRow 
