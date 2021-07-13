import {BrowserRouter, Route} from "react-router-dom"
import ProductScreen from "./Screens/ProductScreen";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./Screens/SigninScreen";
import { signout } from "./actions/userActions";

function App() {
  const cart = useSelector((state)=> state.cart)
  const { cartItems } = cart
  const userSignin = useSelector((state)=> state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch()
  const signoutHandler = () =>{
    dispatch(signout())
  }

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
          <Link to="/cart">
            Carrinho
            {
              cartItems.length > 0 && (
                <span className="badge">
                  {cartItems.length}
                </span>
              )
            }</Link >
            {
              userInfo ? (
                <div className="dropdown"> 
                  <Link to="#">{userInfo.name}
                    <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
                
              ) :
              (
                <Link to="/signin">Entrar</Link >
              )
            }
          
        </div>
      </header>
      <main>
      <Route path="/signin" component={SigninScreen}></Route>
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
