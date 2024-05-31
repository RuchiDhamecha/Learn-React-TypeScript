import Navbar from "../../template/Navbar/Navbar.tsx";
import styles from "./BoardMember.module.scss"; 
import { BoardMemberProps } from "./BoardMember.types.ts" 
 
const BoardMember = ({}: BoardMemberProps) => {
    return(
        <div>
            <Navbar/>
        </div>
    ) 
} 
 
export default BoardMember 
