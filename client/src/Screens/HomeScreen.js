import React, { useEffect} from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productsActions";
import LoadingOverlay from "../components/LoadingOverlay";
import ProductCarousel from "../components/ProductCarousel";

export default function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector((state)=> state.productList)
  const { loading,error,products} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <div>
        {loading ? (
            <LoadingOverlay />
        ) : error ?(
            <MessageBox variant="danger">{error}</MessageBox>
        ) : (      
        <div>
        
            <ProductCarousel products={products}/>
           
        </div>
        )}
    </div>
        
  );
}
