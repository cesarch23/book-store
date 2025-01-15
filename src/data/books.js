export const books = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/41mYy-x2XEL._SX342_SY445_.jpg",
    title: "Cien años de soledad",
    price: 15.99,
    type: 'eBook',
    prices: [{type:'eBook', price:15.99}, {type:'Phisical', price:25.99},{type:'Hardcover', price:35.10}],
    author: "Gabriel García Márquez",
    stars: 5,
    href: "cien-años-de-soledad",
    productDetails: {
      summerize: "La novela narra la historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo, ubicado en Colombia.La saga comienza con José Arcadio Buendía y su esposa Úrsula Iguarán, quienes fundan Macondo. La historia abarca siete generaciones de Buendías, y cada miembro de la familia vive experiencias y sucesos extraordinarios que reflejan temas como la soledad, el amor, la guerra, la muerte y la repetición de patrones familiares. La novela está llena de elementos de realismo mágico, donde lo fantástico y lo cotidiano coexisten de manera natural.Uno de los aspectos más destacados de la obra es su estilo lírico y su capacidad para entrelazar lo mágico y lo real, creando una atmósfera única que ha cautivado a lectores de todo el mundo. A través de sus personajes y sus historias, García Márquez explora la condición humana y las complejidades de la vida",
      pages: 496,
      weight: "1.1 pounds",
      dimensions: "6 x 1.1 x 9 inches",
      year: 1967,
      publisher: "Editorial Sudamericana"
    },
    aboutAuthor: {
      name: "Gabriel García Márquez",
      bio: "Novelista colombiano y ganador del Premio Nobel de Literatura, famoso por su estilo de realismo mágico."
    },
    reviews: [
      {
        user: "Juan Perez",
        comment: "Una obra maestra del realismo mágico.",
        rating: 5
      },
      {
        user: "Maria Lopez",
        comment: "La narrativa es simplemente increíble.",
        rating: 5
      }
    ]
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/51vv75oglyL._SX331_BO1,204,203,200_.jpg",
    title: "El gran Gatsby",
    price: 10.99,
    type: 'Phisical',
    prices: [{type:'eBook', price:15.99}, {type:'Phisical', price:25.99},{type:'Hardcover', price:35.10}],
    author: "F. Scott Fitzgerald",
    stars: 4.5,
    href: "el-gran-gatsby",
    productDetails: {
      summerize: "Un retrato fascinante de la decadencia de los años 20 en Estados Unidos.",
      pages: 180,
      weight: "0.5 pounds",
      dimensions: "5 x 0.5 x 8 inches",
      year: 1925,
      publisher: "Scribner"
    },
    aboutAuthor: {
      name: "F. Scott Fitzgerald",
      bio: "Uno de los mayores escritores estadounidenses del siglo XX, conocido por sus representaciones de la Era del Jazz."
    },
    reviews: [
      {
        user: "Carlos Mejia",
        comment: "Un relato intemporal sobre los sueños y la desesperanza.",
        rating: 4
      },
      {
        user: "Lucia Torres",
        comment: "La prosa de Fitzgerald es mágica.",
        rating: 5
      }
    ]
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/51A5cHQhSqL._SX331_BO1,204,203,200_.jpg",
    title: "Orgullo y prejuicio",
    price: 35.10,
    type: 'Hardcover',
    prices: [{type:'eBook', price:15.99}, {type:'Phisical', price:25.99},{type:'Hardcover', price:35.10}],
    author: "Jane Austen",
    stars: 3.5,
    href: "orgullo-y-prejuicio",
    productDetails: {
      summerize: "La novela sigue las vidas de las cinco hermanas Bennet, centradas en particular en Elizabeth Bennet, una joven inteligente y con carácter. El libro aborda temas como la familia, el matrimonio y las diferencias de clase en la Inglaterra rural del siglo XIX. La historia se despliega con la llegada del carismático Sr. Bingley y su amigo, el apuesto pero reservado Sr. Darcy, a la vecindad de los Bennet.Mientras Bingley y Jane Bennet, la mayor de las hermanas, se sienten atraídos el uno por el otro, Elizabeth y Darcy se encuentran inicialmente en conflicto. Darcy es percibido como orgulloso y altanero, mientras que Elizabeth es prejuiciosa debido a sus primeras impresiones. A medida que la trama avanza, se revelan secretos y malentendidos que transforman sus percepciones mutuas. La novela culmina con el reconocimiento del amor profundo y genuino entre Elizabeth y Darcy, quienes finalmente se casan.",
      pages: 432,
      weight: "1 pound",
      dimensions: "5.5 x 0.8 x 8.5 inches",
      year: 1813,
      publisher: "T. Egerton, Whitehall"
    },
    aboutAuthor: {
      name: "Jane Austen",
      bio: "Una de las novelistas más importantes del siglo XIX, conocida por su aguda observación social y sus personajes icónicos."
    },
    reviews: [
      {
        user: "Ana Ruiz",
        comment: "Un clásico que nunca pasa de moda.",
        rating: 4
      },
      {
        user: "Pedro Sanchez",
        comment: "El ritmo es un poco lento, pero la historia es encantadora.",
        rating: 3
      }
    ]
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL._SX331_BO1,204,203,200_.jpg",
    title: "El alquimista",
    price: 45.10,
    type: 'Hardcover',
    prices: [{type:'eBook', price:15.99}, {type:'Phisical', price:25.99},{type:'Hardcover', price:45.10}],
    author: "Paulo Coelho",
    stars: 4,
    href: "el-alquimista",
    productDetails: {
      summerize: "La búsqueda espiritual de un pastor que aprende sobre el destino y los sueños.",
      pages: 208,
      weight: "0.6 pounds",
      dimensions: "5.2 x 0.7 x 8 inches",
      year: 1988,
      publisher: "HarperOne"
    },
    aboutAuthor: {
      name: "Paulo Coelho",
      bio: "Escritor brasileño conocido por su enfoque espiritual y filosófico en sus obras."
    },
    reviews: [
      {
        user: "Laura Diaz",
        comment: "Un libro inspirador que te invita a perseguir tus sueños.",
        rating: 5
      },
      {
        user: "Mario Perez",
        comment: "Interesante, pero a veces parece muy simple.",
        rating: 4
      }
    ]
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/51b5YG6Y1rL._SX331_BO1,204,203,200_.jpg",
    title: "Los pilares de la Tierra",
    price: 20.99,
    type: 'Phisical',
    prices: [{type:'eBook', price:15.99}, {type:'Phisical', price:20.99},{type:'Hardcover', price:35.10}],
    author: "Ken Follett",
    stars: 5,
    href: "los-pilares-de-la-tierra",
    productDetails: {
      summerize: "Una épica historia sobre la construcción de una catedral en la Inglaterra medieval.",
      pages: 973,
      weight: "2.5 pounds",
      dimensions: "6.1 x 1.9 x 9.2 inches",
      year: 1989,
      publisher: "Penguin Books"
    },
    aboutAuthor: {
      name: "Ken Follett",
      bio: "Escritor galés conocido por sus novelas históricas y de suspenso."
    },
    reviews: [
      {
        user: "Daniel Herrera",
        comment: "Un libro absorbente lleno de intriga y drama.",
        rating: 5
      },
      {
        user: "Sofia Gomez",
        comment: "Una historia larga pero increíblemente detallada.",
        rating: 4
      }
    ]
  },
  {
    id: 9,
    image: "https://m.media-amazon.com/images/I/51N-u8AsmdL._SX331_BO1,204,203,200_.jpg",
    title: "Crónica de una muerte anunciada",
    price: 13.5,
    type: 'Phisical',
    prices: [{type:'eBook', price:10.99}, {type:'Phisical', price:13.5},{type:'Hardcover', price:35.10}],
    author: "Gabriel García Márquez",
    stars: 5,
    href: "cronica-de-una-muerte-anunciada",
    productDetails: {
      summerize: "Una narrativa intrigante sobre un asesinato anunciado en un pueblo.",
      pages: 120,
      weight: "0.4 pounds",
      dimensions: "5.1 x 0.4 x 7.8 inches",
      year: 1981,
      publisher: "Alfaguara"
    },
    aboutAuthor: {
      name: "Gabriel García Márquez",
      bio: "Novelista colombiano y ganador del Premio Nobel de Literatura, famoso por su estilo de realismo mágico."
    },
    reviews: [
      {
        user: "Andrea Flores",
        comment: "Una narrativa corta pero poderosa.",
        rating: 5
      },
      {
        user: "Jorge Ramirez",
        comment: "Te mantiene intrigado desde el inicio.",
        rating: 5
      }
    ]
  },
  {
    id: 15,
    image: "https://m.media-amazon.com/images/I/51sBr4IWDwL._SX331_BO1,204,203,200_.jpg",
    title: "En busca del tiempo perdido",
    price: 25.99,
    type: 'Phisical',
    prices: [{type:'eBook', price:15.99}, {type:'Phisical', price:25.99},{type:'Hardcover', price:35.10}],
    author: "Marcel Proust",
    stars: 5,
    href: "en-busca-del-tiempo-perdido",
    productDetails: {
      summerize: "Una exploración detallada de la memoria y la experiencia humana.",
      pages: 4215,
      weight: "5 pounds",
      dimensions: "8.5 x 6 x 10 inches",
      year: 1913,
      publisher: "Gallimard"
    },
    aboutAuthor: {
      name: "Marcel Proust",
      bio: "Escritor francés conocido por su enfoque profundo sobre la memoria y la introspección."
    },
    reviews: [
      {
        user: "Patricia Ortiz",
        comment: "Un viaje literario profundo y enriquecedor.",
        rating: 5
      },
      {
        user: "Luis Torres",
        comment: "Requiere paciencia, pero vale la pena cada página.",
        rating: 5
      }
    ]
  }
  
];
