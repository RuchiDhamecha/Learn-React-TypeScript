import Signin from "../../components/Signin/Signin.tsx";
import Navbar from "../../template/Navbar/Navbar.tsx";
import styles from "./HomePage.module.scss"; 
import { HomePageProps } from "./HomePage.types.ts" 
 
const HomePage = ({}: HomePageProps) => { 
    return(
        <div >
            <div>
                <Navbar/>
            </div>
            <div className={styles.Body}>
                <Signin/>
            </div>
        </div>
    )
} 
 
export default HomePage 
