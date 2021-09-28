import {BrowserRouter, Route} from "react-router-dom"
import ProductScreen from "./Screens/ProductScreen";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./Screens/SigninScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import { signout } from "./actions/userActions";
import ShippingAddressScreen from "./Screens/ShippingAddressScreen";
import PaymentMethodScreen from "./Screens/PaymentMethodScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import OrderHistoryScreen from "./Screens/OrderHistoryScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import IconLink from "./components/IconLink";
import SearchScreen from "./Screens/SearchScreen";
import { useEffect, useState } from "react";
import { listProductCategories } from "./actions/productsActions";
import SlideDrawer from "./components/SlideDrawer";
import SearchAccordion from "./components/SearchAccordion";

function App() {
  const cart = useSelector((state)=> state.cart)
  const { cartItems } = cart
  const userSignin = useSelector((state)=> state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch()
  const signoutHandler = () =>{
    dispatch(signout())
  }

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchBarOpen, setSearchBarOpen] = useState(false)

  const handleDrawerToggleClick  = ()=>{
    setDrawerOpen(!drawerOpen)
  }

  const handleSearchToggleClick = ()=>{
    setSearchBarOpen(!searchBarOpen)
  }

  return (
    <BrowserRouter>
   
    <div className="grid-container">
      <SlideDrawer show={drawerOpen} handleShow={handleDrawerToggleClick} />
      <header className="row">
        <div className="flex w-220">
          <IconLink href="#" iconName="fas fa-bars" onClick={handleDrawerToggleClick}>Menu</IconLink>
          <div className="sm-down">
            <IconLink href="#"  iconName="fas fa-search" onClick={handleSearchToggleClick}>Buscar</IconLink>
          </div>
        </div>
        <div>
          <Link className="brand" to="/">
            Scomics
          </Link >
        </div>
        <div className="none sm-up">
          <IconLink href="#"  iconName="fas fa-search" onClick={handleSearchToggleClick}>Buscar</IconLink>
        </div>
        <div className="flex w-220 sm-down">
        <IconLink href="/cart" iconName="fas fa-shopping-cart">
          Carrinho
              {
                cartItems.length > 0 && (
                  <span className="badge">
                    {cartItems.length}
                  </span>
                )
              }
        </IconLink>
        
            {
              userInfo ? (
                <div className="dropdown"> 
                <IconLink href="#" iconName="fas fa-user">
                {userInfo.name} <i className="fa fa-caret-down"></i>
                
                </IconLink>
                  <ul className="dropdown-content">
                  <li>
                      <Link to="/profile">
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <Link to="/orderhistory">
                        Histórico
                      </Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sair
                      </Link>
                    </li>
                  </ul>
                </div>
                
              ) :
              (
                <IconLink href="/signin" iconName="fas fa-door-open">
                  Entrar
                </IconLink>
              )
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productList">Products</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}          
        </div>
      </header>
      <main>
      <SearchAccordion show={searchBarOpen} handleShow={handleSearchToggleClick}/>
      <div className="container-main">
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/shipping" component={ShippingAddressScreen} exact></Route>
      <Route path="/payment" component={PaymentMethodScreen} exact></Route>
      <Route path="/placeorder" component={PlaceOrderScreen} exact></Route>
      <Route path="/order/:id" component={OrderScreen}></Route>
      <Route path="/orderhistory" component={OrderHistoryScreen} exact></Route>
      <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
      <PrivateRoute path="/profile" component={ProfileScreen} exact></PrivateRoute>
      <Route path="/" component={HomeScreen} exact></Route>
      </div>
      </main>
      <footer className="row center">©Scomics</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
