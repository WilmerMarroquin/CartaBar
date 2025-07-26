
const productos = {
  helados: [
    {
      img: "img/h1.jpg",
      title: "Chocolate Belga",
      desc: "Una experiencia intensa y cremosa con cacao oscuro 70% y trozos reales de chocolate europeo. Ideal para verdaderos amantes del chocolate.",
      price: "$120",
      badge: "Nuevo",
      ingredients: ["Cacao 70%", "Leche Entera", "Crema de Leche", "Trozos de Chocolate Belga"]
    },
    {
      img: "img/h2.jpg",
      title: "Vainilla Bourbon",
      desc: "Clásico irresistible con vainilla natural y notas aromáticas de bourbon. Perfecto para quienes prefieren un sabor suave pero elegante.",
      price: "$120",
      badge: "Promo",
      ingredients: ["Vainilla de Bourbon", "Leche Fresca", "Yemas de Huevo", "Azúcar Orgánica"]
    },
    {
      img: "img/h3.jpg",
      title: "Fresa Natural",
      desc: "Un clásico delicioso elaborado con fresas frescas seleccionadas y crema artesanal que resalta su sabor dulce y natural.",
      price: "$120",
      badge: null,
      ingredients: ["Fresas Frescas", "Crema Artesanal", "Leche", "Azúcar"]
    },
    {
      img: "img/h4.jpg",
      title: "Pistacho",
      desc: "Una mezcla cremosa con pistachos reales tostados, para un sabor intenso, suave y lleno de textura.",
      price: "$140",
      badge: null,
      ingredients: ["Pistachos Tostados", "Leche de Almendras", "Crema de Leche", "Sal Marina"]
    },
    {
      img: "img/h5.jpg",
      title: "Dulce de Leche",
      desc: "Una receta dulce y cremosa de leche caramelizada con un toque tradicional. Sabor profundo y nostálgico.",
      price: "$130",
      badge: "Promo",
      ingredients: ["Dulce de Leche Casero", "Leche Condensada", "Crema", "Nueces (opcional)"]
    },
    {
      img: "img/h6.jpg",
      title: "Mango Tropical",
      desc: "Exquisito helado hecho con mango colombiano maduro. Refrescante y naturalmente dulce, perfecto para días calurosos.",
      price: "$130",
      badge: null,
      ingredients: ["Pulpa de Mango Fresco", "Leche de Coco", "Jugo de Limón", "Azúcar"]
    }
  ],
  ensaladas: [
    {
      img: "img/e1.jpg",
      title: "Ensalada Tropical",
      desc: "Una mezcla colorida de frutas tropicales como piña, mango, fresa y papaya. Servida con yogurt natural y un toque de miel.",
      price: "$110",
      badge: "Nuevo",
      ingredients: ["Piña", "Mango", "Fresa", "Papaya", "Yogurt Natural", "Miel"]
    },
    {
      img: "img/e2.jpg",
      title: "Manzana y Kiwi",
      desc: "Una ensalada fresca y ligera con rodajas de manzana verde crujiente y kiwi ácido, bañadas en miel con un toque de semillas de chía.",
      price: "$110",
      badge: null,
      ingredients: ["Manzana Verde", "Kiwi", "Miel Pura", "Semillas de Chía"]
    },
    {
      img: "img/e3.jpg",
      title: "Frutos Rojos",
      desc: "Fresas, moras y arándanos mezclados con crema ligera. Coronado con granola artesanal para una textura crujiente y sabrosa.",
      price: "$120",
      badge: "Promo",
      ingredients: ["Fresas", "Moras", "Arándanos", "Crema Ligera", "Granola Artesanal"]
    }
  ],
  postres: [
    {
      img: "img/p1.jpg",
      title: "Brownie con Helado",
      desc: "Brownie tibio recién horneado acompañado de una bola de helado Sleep Ice a elección y salsa de chocolate caliente.",
      price: "$150",
      badge: "Promo",
      ingredients: ["Brownie de Chocolate", "Helado (a elección)", "Salsa de Chocolate", "Nueces"]
    },
    {
      img: "img/p2.jpg",
      title: "Banana Split",
      desc: "El clásico banana split con tres bolas de helado, banana fresca, crema batida, sirope y cerezas.",
      price: "$160",
      badge: "Nuevo",
      ingredients: ["Banana", "Helado (3 sabores)", "Crema Batida", "Sirope de Chocolate", "Cerezas"]
    },
    {
      img: "img/p3.jpg",
      title: "Waffle con Helado",
      desc: "Waffle recién hecho con helado Sleep Ice a tu gusto, frutas frescas como fresa y banano, y sirope de miel.",
      price: "$170",
      badge: null,
      ingredients: ["Waffle Belga", "Helado (a elección)", "Fresa", "Banano", "Sirope de Miel"]
    },
    {
      img: "img/p4.jpg",
      title: "Copa Sleep Ice",
      desc: "Una creación única de Sleep Ice: varias capas de helado, frutas frescas, siropes, galletas y un toque de magia pastel.",
      price: "$180",
      badge: "Nuevo",
      ingredients: ["Helado (varios sabores)", "Frutas de Estación", "Sirope de Caramelo", "Galletas Oreo", "Crema"]
    }
  ],
  bebidas: [
    {
      img: "img/b1.jpg",
      title: "Agua Mineral",
      desc: "Agua purificada con burbujas suaves, perfecta para hidratarte y equilibrar sabores dulces.",
      price: "$60",
      badge: null,
      ingredients: ["Agua Carbonatada", "Minerales"]
    },
    {
      img: "img/b2.jpg",
      title: "Refresco de Limón",
      desc: "Bebida casera de limón natural con agua fría y endulzada suavemente con panela.",
      price: "$75",
      badge: "Promo",
      ingredients: ["Jugo de Limón Fresco", "Agua", "Panela Orgánica", "Hielo"]
    },
    {
      img: "img/b3.jpg",
      title: "Malteada de Chocolate",
      desc: "Nuestra malteada estrella con helado de chocolate Sleep Ice, leche fría y crema batida. Espesa, dulce y totalmente irresistible.",
      price: "$130",
      badge: null,
      ingredients: ["Helado de Chocolate", "Leche Entera", "Crema Batida", "Sirope de Chocolate"]
    },
    {
      img: "img/b4.jpg",
      title: "Malteada de Fresa",
      desc: "Una bebida cremosa y frutal hecha con helado de fresa Sleep Ice, leche fría y un toque de vainilla para realzar el sabor.",
      price: "$130",
      badge: "Nuevo",
      ingredients: ["Helado de Fresa", "Leche", "Extracto de Vainilla", "Crema Batida"]
    }
  ]
};
