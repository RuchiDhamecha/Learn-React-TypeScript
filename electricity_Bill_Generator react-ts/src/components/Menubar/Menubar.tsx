import MenuItem from "../MenuItem/MenuItem.tsx";
import styles from "./Menubar.module.scss"; 
import { MenubarProps } from "./Menubar.types.ts" 
 
const Menubar = ({items,profile}: MenubarProps) => {
    return(
        <div className={styles.Menubar}>
            <MenuItem items={items} profile={profile}/>
        </div>
    ) 
} 
 
export default Menubar 
