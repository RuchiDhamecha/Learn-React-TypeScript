import Navbar from "../../template/Navbar/Navbar.tsx";
import styles from "./Admin.module.scss"; 
import { AdminProps } from "./Admin.types.ts" 
 
const Admin = ({}: AdminProps) => { 
    return(
        <div>
            <Navbar/> 
        </div>
    )
} 
 
export default Admin 
