<p align="center">
  <img style="width: 200px" src="https://github.com/mytionbr/images-videos/blob/master/S.png" alt="scomics logo" />
</p>


<div align="center">
  
  # SCOMICS
  
  ![Demontration](https://github.com/mytionbr/images-videos/blob/master/scomics-desmostracao.gif)
  
  Scomics é uma livraria virtual desenvolvida com MERN Stack (MongoDB, ExpressJS, ReactJs e NodeJs).
</div>


## Fluxos

Por enquanto a aplicação apresenta somente o fluxo do cliente:

- O cliente pode navegar nas categorias e produtos da loja;
- O cliente pode realizar filtragens e buscas por produtos;
- O cliente ao escolher um produto pode adicioná-lo  no carrinho e realizar uma encomenda ou voltar para a loja;
- O cliente pode realizar o pagamento utilizando uma conta do paypal ou um cartão de crédito;

## Features

- O backend é fornecido através de uma aplicação NodeJs;
- As requisições, respostas e rotas são realizadas por meio do middleware do Express;
- A modelagem de dados da aplicação é realizada utilizando os esquemas Mongoose, que por sua vez irão popular um banco de dados MongoDB;
- Os componente de IU são construídos e exibidos através da biblioteca ReactJs;
- O estado dos componentes do frontend são gerenciados por meio da biblioteca Redux;

## Setup

### 1. Clone

```
$ git clone https://github.com/mytionbr/scomics.git
$ cd scomics
```

### 2. Setup MongoDB

- Para um setup local
  - Instale o [mongoDB](https://www.mongodb.com/https://www.mongodb.com/)
  - Navegue até a pasta raiz do projeto e crie um arquivo `.env`
  - Crie uma variável local `MONGODB_URL=mongodb://localhost/scomics`
  
- Para um setup no MongoDB Cloud
  - Crie um banco de dados no [MongoDB Cloud](https://www.mongodb.com/pt-br/cloud)
  - Navegue até a pasta raiz do projeto e crie um arquivo `.env`
  - Crie uma váriavel local `MONGODB_URL=your_authentication_url_to_mongo_db`

### 3. Variáveis de ambiente 
  - Navegue até a pasta raiz do projeto e acesse o arquivo `.env`
  ```
  JWT_SECRET=your_jwt_secret
  PAYPAL_CLIENT_ID=your_paypal_client_id 
  ```
  
### 4. Run Backend
```
cd scomics
yarn install // or npm install
yarn start // or npm start
# Para desenvolvimento: yarn mongoose // or  npm mongoose
```

### 5. Run Client
```
cd scomics
cd client
yarn install // or npm install
yarn start // or npm start
# Para desenvolvimento: yarn mongoose // or npm mongoose
```

### 6. Popule o banco de dados 

- Rode o backend
- Entre em um navegador
- Acesse as urls [http://localhost:5000/api/products/seed](http://localhost:5000/api/products/seed) e [http://localhost:5000/api/users/seed](http://localhost:5000/api/users/seed)
- Isso irá adicionar 15 produtos e 2 usuários (Um cliente e um adm) no BD

## Screenshots

Home screen
![home screen](https://github.com/mytionbr/images-videos/blob/master/home-page.PNG)

Carrousel
![carrousel](https://github.com/mytionbr/images-videos/blob/master/carrousel.PNG)

Product screen
![product screen](https://github.com/mytionbr/images-videos/blob/master/product-screen.PNG)

Cart screen
![cart-screen](https://github.com/mytionbr/images-videos/blob/master/cart-screen.PNG)

Order screen
![order-screen](https://github.com/mytionbr/images-videos/blob/master/order-screen.PNG)

Search screen
![search-screen](https://github.com/mytionbr/images-videos/blob/master/search-screen.PNG)

Sidebar
![side-bar](https://github.com/mytionbr/images-videos/blob/master/side-bar.PNG)

## Demo

A aplicação está implementada no Heroku. Confira [aqui](scomics.herokuapp.com/)

## Linguagens & ferramentas

- [NodeJs](https://nodejs.org/en/)
- [ReactJs](https://pt-br.reactjs.org/)
- [ExpressJs](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [ReduxJs](https://redux.js.org/)
- [SCSS](https://sass-lang.com/guide)
- [API do Paypal](https://developer.paypal.com/home)
- [React-slick](https://react-slick.neostack.com/)

# Desenvolvedor

<table>
  <tr>
    <td align='center'>
      <a href='https://github.com/mytionbr'><img style="width: 100px" src='https://avatars.githubusercontent.com/u/43896079?v=4' /><br />Matheus Sousa de Jesus</a>
    </td>
  </tr>
</table>




  
  


  

