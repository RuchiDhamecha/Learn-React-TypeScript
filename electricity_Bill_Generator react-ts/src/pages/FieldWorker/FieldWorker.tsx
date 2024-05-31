import Navbar from "../../template/Navbar/Navbar.tsx";
import styles from "./FieldWorker.module.scss"; 
import { FieldWorkerProps } from "./FieldWorker.types.ts" 
 
const FieldWorker = ({}: FieldWorkerProps) => { 

    return(
        <div>
            <Navbar/>
        </div>
    )
} 
 
export default FieldWorker 
