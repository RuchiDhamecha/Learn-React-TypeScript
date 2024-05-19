import style from './product.module.scss'
import { ProductProps } from './product.types';


const Product=({img, name, price, buttonText}:ProductProps)=>{
    return(

        <div className={style.Box}>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p>{name}</p>
                <p>Rs. {price}</p>
            </div>
            <div>
                <button>{buttonText}</button>
            </div>
        </div>
    )
}
export default Product;