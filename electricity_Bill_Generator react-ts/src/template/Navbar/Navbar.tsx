import styles from "./Navbar.module.scss"; 
import { NavbarProps } from "./Navbar.types.ts" 
 
const Navbar = ({}: NavbarProps) => { 
    return(
        <div>
            <h3 className={styles.Navbar}>Electricity Bill Management</h3>
        </div>
    )
} 
 
export default Navbar 
