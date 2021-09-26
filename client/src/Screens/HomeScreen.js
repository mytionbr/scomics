import React, { useEffect} from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productsActions";
import LoadingOverlay from "../components/LoadingOverlay";
import ProductCarousel from "../components/ProductCarousel";
import PresentationCarousel from "../components/PresentationCarousel";

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
          <>
        <div>
          <PresentationCarousel />
        </div>     
        <div className="container py-3" >
          <h2 className="session-title">Livros</h2>
            <ProductCarousel products={products.filter(item=>item.category === 'livros')}/>
        </div>
        <div className="container py-3">
        <h2 className="session-title">Hq's</h2>
          <ProductCarousel products={products.filter(item=>item.category === 'hqs')}/>
      </div>
      <div className="container py-3">
        <h2 className="session-title">Mangás</h2>
          <ProductCarousel products={products.filter(item=>item.category === 'mangás')}/>
      </div>
      
      </> 
        )}
    </div>
        
  );
}
