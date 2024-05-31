import Menubar from "../../components/Menubar/Menubar.tsx";
import Navbar from "../../template/Navbar/Navbar.tsx";
import styles from "./BoardAdmin.module.scss"; 
import { BoardAdminProps } from "./BoardAdmin.types.ts" 
 
const BoardAdmin = ({}: BoardAdminProps) => { 
    return(
        <div>
             <Navbar/>
             <Menubar items="Register New Users" profile={"Board Admin Profile"}/>
        </div>
    )
} 
 
export default BoardAdmin 
