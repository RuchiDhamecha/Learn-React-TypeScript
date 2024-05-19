// import style from './Product.types'
import {ProductProps} from './Product.types' 

const Product =({name,price}:ProductProps)=>{
    return(
        <>
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </>
    )
}
export default Product;