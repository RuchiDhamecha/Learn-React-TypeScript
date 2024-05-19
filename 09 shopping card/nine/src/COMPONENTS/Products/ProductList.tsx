// import Data from './product.data'
import Product from "./product";
import { ProductProps } from "./product.types";

const ProductList = ({ data }: ProductProps[]) => {
  let boxes = data.map((item: ProductProps) => {
    return (
      <Product
        img={item.img}
        name={item.name}
        price={item.price}
        buttonText={item.buttonText}
      />
    );
  });

  return( 
    <>
      {boxes}
    </>
  );
};
export default ProductList;
