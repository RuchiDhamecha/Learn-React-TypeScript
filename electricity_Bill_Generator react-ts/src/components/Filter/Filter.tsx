import styles from "./Filter.module.scss"; 
import { FilterProps } from "./Filter.types.ts" 
 
const Filter = ({}: FilterProps) => { 
    return(
        <div>
            <p className={styles.Filter}>Filters</p>
        </div>
    )
} 
 
export default Filter 
