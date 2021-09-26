import bcrypt from 'bcryptjs'

const data ={
    users:[
        {
        name:"Jose",
        email:"admin@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin:true
    },
    {
        name:"Lucas",
        email:"lucas@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin:false
    },

],
    products:[
        {
            
            name:"Admirável mundo novo",
            category:'livros',
            author: 'Aldous Leonard Huxley',
            image:'https://m.media-amazon.com/images/P/B00ITZ9XR4.01._SCLZZZZZZZ_SX500_.jpg',
            price:22.50,
            brand:'Biblioteca Azul',
            rating: 4.5,
            numReviews:20,
            countInStock:4,
            description:'Um clássico moderno, o romance distópico de Aldous Huxley é incontornável para quem procura um dos exemplos mais marcantes da tematização de estados autoritários, ao lado de 1984, de George Orwell.'
        },
        {
            
            name:"A revolução dos bichos",
            category:'livros',
            author: 'George Orwell',
            image:'https://m.media-amazon.com/images/P/B009WWDBX0.01._SCLZZZZZZZ_SX500_.jpg',
            price:10,
            brand:'Companhia das Letras',
            rating: 5,
            numReviews:25,
            countInStock:5,
            description:'A revolução dos bichos é uma história intrigante e provocativa em que, numa primeira leitura, ressalta a fábula, caracterizada por ser um tipo de narrativa protagonizada geralmente por animais, mas que reflete ações humanas com algum ensinamento de cunho moral. '
        },
        {
            
            name:"1984",
            category:'livros',
            author: 'George Orwell',
            image:'https://m.media-amazon.com/images/P/B009XE662U.01._SCLZZZZZZZ_SX500_.jpg',
            price:50,
            brand:'Companhia das Letras',
            rating: 4.5,
            numReviews:10,
            countInStock:20,
            description:'Publicada originalmente em 1949, a distopia futurista 1984 é um dos romances mais influentes do século XX, um inquestionável clássico moderno. Lançada poucos meses antes da morte do autor, é uma obra magistral que ainda se impõe como uma poderosa reflexão ficcional sobre a essência nefasta de qualquer forma de poder totalitário.'
        },
        {
            
            name:"Sapiens",
            category:'livros',
            author: 'Yuval Noah Harari',
            image:'https://m.media-amazon.com/images/P/B08MDJRDHH.01._SCLZZZZZZZ_SX500_.jpg',
            price:50,
            brand:'Companhia das Letras',
            rating: 5,
            numReviews:30,
            countInStock:30,
            description:'sapiens (Nova edição): Uma breve história da humanidade Capa comum – 13 novembro.'
        },
        {
            
            name:"Uma Breve História do Tempo",
            category:'livros',
            image:'https://m.media-amazon.com/images/P/B00RTQVEQC.01._SCLZZZZZZZ_SX500_.jpg',
            price:40,
            author:'Stephen Hawking',
            brand:'Intrínseca',
            rating: 5,
            numReviews:49,
            countInStock:20,
            description:'Uma Breve História do Tempo Capa comum – 22 janeiro 2015'
        },
        { 
            name:"Cosmos",
            category:'livros',
            image:'https://m.media-amazon.com/images/P/B075RLFWHK.01._SCLZZZZZZZ_SX500_.jpg',
            price:50,
            brand:'ASUS',
            author:'Carl Sagan',
            rating: 4.5,
            numReviews:20,
            countInStock:20,
            description:'Escrito por um dos maiores divulgadores de ciência do século XX, Cosmos retraça 14 bilhões de anos de evolução cósmica, explorando tópicos como a origem da vida, o cérebro humano, hieróglifos egípcios, missões espaciais, a morte do sol, a evolução das galáxias e as forças e indivíduos que ajudaram a moldar a ciência moderna. '
        },
        { 
            name:"Maus",
            category:'hqs',
            image:'https://images-na.ssl-images-amazon.com/images/I/917jVBPYKFL.jpg',
            price:60,
            brand:'Quadrinhos na Cia',
            author:'Art Spiegelman',
            rating: 4.5,
            numReviews:10,
            countInStock:20,
            description:'Maus ("rato", em alemão) é a história de Vladek Spiegelman, judeu polonês que sobreviveu ao campo de concentração de Auschwitz, narrada por ele próprio ao filho Art.'
        },
        { 
            name:"Watchmen",
            category:'hqs',
            image:'https://images-na.ssl-images-amazon.com/images/I/81IOAiyRD+L.jpg',
            price:70,
            brand:'Panini',
            author:'Alan Moore',
            rating: 5,
            numReviews:20,
            countInStock:50,
            description:'Uma das Graphic Novels mais influentes de todos os tempos e um eterno bestseller, WATCHMEN só cresceu em estatura desde sua publicação original, como minissérie, em 1986.'
        },
        { 
            name:"Batman - A Piada Mortal",
            category:'hqs',
            image:'https://images-na.ssl-images-amazon.com/images/I/51hT55FbIFL.jpg',
            price:70,
            brand:'Panini',
            author:'Alan Moore',
            rating: 4.5,
            numReviews:20,
            countInStock:10,
            description:'Do premiado roteirista Alan Moore (Watchmen, V de Vingança) conta como um dia ruim na vida de um homem pode significar a linha que separa a sanidade da loucura. Principalmente quando se trata do Coringa, o maior e mais conhecido vilão do mundo dos quadrinhos.'
        },
        { 
            name:"Novos X-Men",
            category:'hqs',
            image:'https://images-na.ssl-images-amazon.com/images/I/51jYzdc4ADL.jpg',
            price:50,
            brand:'Panini',
            author:'Grant Morrison',
            rating: 4.5,
            numReviews:20,
            countInStock:10,
            description:'O geneterrorista conhecido como Magneto está de volta para destruir os X-Men em mais um capítulo da genial passagem de Grant Morrison pelo título dos mutantes! '
        },
        { 
            name:"What If...?",
            category:'hqs',
            image:'https://images-na.ssl-images-amazon.com/images/I/51hUsBIzQsL._SX323_BO1,204,203,200_.jpg',
            price:50,
            brand:'Panini',
            author:'Ed Brubaker',
            rating: 4.5,
            numReviews:20,
            countInStock:10,
            description:'O que aconteceria se o Aniquilador tivesse chegado à Terra em Aniquilação? O que aconteceria se o Homem de Ferro tivesse perdido a Guerra Civil?'
        },
        { 
            name:"Chainsaw Man",
            category:'mangás',
            image:'https://images-na.ssl-images-amazon.com/images/I/51BeRXEKuWL.jpg',
            price:30,
            brand:'Panini',
            author:'Tatsuki Fujimoto',
            rating: 5,
            numReviews:20,
            countInStock:10,
            description:'Denji é um jovem extremamente pobre que junto de Pochita, seu demônio de estimação, trabalha feito um condenado como Caçador de Demônios para pagar a imensa dívida que possui.'
        },
        { 
            name:"Jujutsu Kaisen - Batalha de Feiticeiros",
            category:'mangás',
            image:'https://images-na.ssl-images-amazon.com/images/I/512VBluGpqL._SX340_BO1,204,203,200_.jpg',
            price:50,
            brand:'Panini',
            author:'Gege Akutami',
            rating: 4,
            numReviews:20,
            countInStock:10,
            description:'Itadori investiga os assassinatos causados por uma maldição e acaba conhecendo Junpei, um garoto que é fascinado por Mahito, o responsável pelas mortes. Qual será a reação de Itadori ao ver o novo amigo transformado em fantoche da maldição?'
        },
       
        { 
            name:"My Hero Academia",
            category:'mangás',
            image:'https://m.media-amazon.com/images/P/B07GL4LKMV.01._SCLZZZZZZZ_SX500_.jpg',
            price:13,
            brand:'Panini',
            author:'Kohei Horikoshi',
            rating: 4,
            numReviews:20,
            countInStock:10,
            description:'O Matador de Heróis Stain surge diante de Iida, e quem aparece para ajudar são Midoriya e Todoroki! Diante de uma barreira difícil de quebrar, os protótipos de herói aprenderão lições valiosas nesta experimentação profissional.'
        },
        { 
            name:"Fullmetal Alchemist",
            category:'mangás',
            image:'https://images-na.ssl-images-amazon.com/images/I/61CDuYoINqL.jpg',
            price:23,
            brand:'Panini',
            author:'Hiromu Arakawa',
            rating: 5,
            numReviews:20,
            countInStock:10,
            description:'Fullmetal Alchemist, obra máxima de Hiromu Arakawa, está de volta em uma Edição Especial de Colecionador! Edward e Alphonse Elric são jovens alquimistas que estão em busca da lendária Pedra Filosofal para recuperarem os seus corpos.'
        },
    ]
}

export default data