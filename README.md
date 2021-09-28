# SCOMICS

Scomics é uma livraria virtual desenvolvida com MERN Stack (MongoDB, ExpressJS, ReactJs e NodeJs).

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
  
- Para um setup no Cloud MongoDB
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
- Acesse a url [http://localhost:5000/api/products/seed](http://localhost:5000/api/products/seed) e [http://localhost:5000/api/users/seed](http://localhost:5000/api/users/seed)
- Isso irá adicionar 15 produtos e 2 usuários (Um cliente e um adm) no BD


## Demo

A aplicação está implementada no Heroku. Confira [aqui](scomics.herokuapp.com/)




  
  


  

