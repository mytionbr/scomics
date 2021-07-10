
import {BrowserRouter, Route} from "react-router-dom"
import ProductScreen from "./Screens/ProductScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
   
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/cart">Menu</a>
          <a href="/signin">Pesquisar</a>
        </div>
        <div>
          <a className="brand" href="/">
            Scomics
          </a>
        </div>
        <div>
          <a href="cart.html">Carrinho</a>
          <a href="signin.html">Entrar</a>
        </div>
      </header>
      <main>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
       
      </main>
      <footer className="row center">©Scomics</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
