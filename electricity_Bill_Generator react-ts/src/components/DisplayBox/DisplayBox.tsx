import DataRow from "../DataRow/DataRow.tsx";
import styles from "./DisplayBox.module.scss"; 
import { DisplayBoxProps } from "./DisplayBox.types.ts" 
 
const DisplayBox = ({data}: DisplayBoxProps) => { 
    console.log(data)
    return(
        <div className={styles.DisplayBox}>
            {data.map((user:any,index:any)=>{
                return(
                    <DataRow 
                    key={index}
                    fullName={user.fullName}
                    location={user.location}
                    />
                )
            })}
        </div>
    )
} 
 
export default DisplayBox 
