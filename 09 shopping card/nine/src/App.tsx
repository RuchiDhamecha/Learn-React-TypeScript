import ProductList from "./COMPONENTS/Products/ProductList"
import Data from "./COMPONENTS/Products/productdata"
import style from './App.module.scss';

const App = () => {

  return(
    <>
    <div className={style.ProductBoxes}>
      <ProductList data = {Data}/>
    </div>
     
    </>
  )
}

export default App;