import {BrowserRouter, Route} from "react-router-dom"
import ProductScreen from "./Screens/ProductScreen";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state)=> state.cart)
  const { cartItems } = cart

  return (
    <BrowserRouter>
   
    <div className="grid-container">
      <header className="row">
        <div>
          <Link to="/cart">Menu</Link >
          <Link to="/signin">Pesquisar</Link >
        </div>
        <div>
          <Link className="brand" to="/">
            Scomics
          </Link >
        </div>
        <div>
          <Link to="cart.html">
            Carrinho
            {
              cartItems.length > 0 && (
                <span className="badge">
                  {cartItems.length}
                </span>
              )
            }</Link >
          <Link to="signin.html">Entrar</Link >
        </div>
      </header>
      <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
       
      </main>
      <footer className="row center">©Scomics</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
