import styles from "./Search.module.scss"; 
import { SearchProps } from "./Search.types.ts" 
 
const Search = ({}: SearchProps) => { 
    return(
        <div>
            <p className={styles.Search}>Search Here</p>
        </div>
    )
} 
 
export default Search 
