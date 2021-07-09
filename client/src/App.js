import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="cart.html">Menu</a>
          <a href="signin.html">Pesquisar</a>
        </div>
        <div>
          <a className="brand" href="index.html">
            Scomics
          </a>
        </div>
        <div>
          <a href="cart.html">Carrinho</a>
          <a href="signin.html">Entrar</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <div key={product._id} className="card">
              <a href={`product._id/${product._id}`}>
                <img
                  className="medium"
                  src={product.image}
                  alt="procuct"
                />
              </a>
              <div className="card-body">
                <a href={`product._id/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">R$ {product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row center">©Scomics</footer>
    </div>
  );
}

export default App;
