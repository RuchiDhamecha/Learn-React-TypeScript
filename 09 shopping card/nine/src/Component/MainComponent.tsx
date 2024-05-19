
import Button from './Button/button'
import Image from './image/image'
import Product from './Product/Product'
import style from './MainComponent.module.scss'

const MainComponent = ()=>{
    return(
        <>

        <div className={style.Box}>
            <div>
             <Image/>
            </div>

            <div>
                <div>
                    <Product 
                    name= "book"
                    price={150}
                    />
                   
                </div>
              
            </div>
            <div>
            <Button/>
            </div>

        </div>

          
        </>
    )
}

export default MainComponent;