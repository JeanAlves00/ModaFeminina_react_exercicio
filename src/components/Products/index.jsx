import { useState } from "react";
import "./styles.css";

const products = [
  {
    id: 1,
    name: "Vestido Floral",
    description: "Perfeito para eventos casuais.",
    price: "R$ 149,90",
    image: "https://placehold.co/400x600/?text=Vestido+Floral",
  },
  {
    id: 2,
    name: "Blusa de Seda",
    description: "Confortável e elegante.",
    price: "R$ 99,90",
    image: "https://placehold.co/400x600/?text=Blusa+de+Seda",
  },
  {
    id: 3,
    name: "Calça Jeans",
    description: "Estilo clássico e moderno.",
    price: "R$ 129,90",
    image: "https://placehold.co/400x600/?text=Cal%C3%A7a+Jeans",
  },
  {
    id: 4,
    name: "Jaqueta de Couro",
    description: "Ideal para dias frios.",
    price: "R$ 299,90",
    image: "https://placehold.co/400x600/?text=Jaqueta+de+Couro",
  },
  {
    id: 5,
    name: "Saia Midi",
    description: "Estilo e sofisticação.",
    price: "R$ 89,90",
    image: "https://placehold.co/400x600/?text=Saia+Midi",
  },
  {
    id: 6,
    name: "Camisa Social",
    description: "Elegância para o trabalho.",
    price: "R$ 119,90",
    image: "https://placehold.co/400x600/?text=Camisa+Social",
  },
];

const ProductMenu = () => {
  const [cart, setCart] = useState([]);

  // Função para adicionar ao carrinho
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  return (
    <section id="promo" className="product-menu">
      <h2>Promoçoes</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="product-price">{product.price}</span>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductMenu;
