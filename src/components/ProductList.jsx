import ProductItem from "./ProductItem";
import '../styles/ProductList.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const response = await fetch('https://fakestoreapi.com/products'); 
                const data = await response.json();
                setProducts(data);
            }catch (error){
                console.error('Error fetching products:',error);
                
            }
        };
        fetchProducts();
    },[]);
    return (
        <div className="product-list">
           {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
};
export default ProductList;