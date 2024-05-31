import styles from "./MenuItem.module.scss"; 
import { MenuItemProps } from "./MenuItem.types.ts" 
 
const MenuItem = ({items,profile}: MenuItemProps) => { 
    return(
        <div>
            <h4 className={styles.MenuItem}>{items}</h4>
            <h4 className={styles.MenuItem}>{profile}</h4>
        </div>
    )
} 
 
export default MenuItem 
