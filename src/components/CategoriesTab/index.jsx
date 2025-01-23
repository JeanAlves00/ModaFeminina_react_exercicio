import { useState } from 'react'
import './styles.css'

const CategoriesTab = () => {
  const [activeTab, setActiveTab] = useState(1)

  const categories = [
    {
      id: 1,
      name: 'Vestidos',
      products: [
        {
          id: '1-1',
          name: 'Vestido Floral',
          image:
            'https://placehold.co/400x600/FFB6C1/000000?text=Vestido+Floral',
        },
        {
          id: '1-2',
          name: 'Vestido Casual',
          image:
            'https://placehold.co/400x600/FFC0CB/000000?text=Vestido+Casual',
        },
        {
          id: '1-3',
          name: 'Vestido Elegante',
          image:
            'https://placehold.co/400x600/FF69B4/000000?text=Vestido+Elegante',
        },
      ],
    },
    {
      id: 2,
      name: 'Blusas',
      products: [
        {
          id: '2-1',
          name: 'Blusa de Algodão',
          image:
            'https://placehold.co/400x600/ADD8E6/000000?text=Blusa+de+Algodão',
        },
        {
          id: '2-2',
          name: 'Blusa de Seda',
          image:
            'https://placehold.co/400x600/87CEEB/000000?text=Blusa+de+Seda',
        },
        {
          id: '2-3',
          name: 'Blusa Social',
          image: 'https://placehold.co/400x600/4682B4/FFFFFF?text=Blusa+Social',
        },
      ],
    },
    {
      id: 3,
      name: 'Calças',
      products: [
        {
          id: '3-1',
          name: 'Calça Jeans',
          image: 'https://placehold.co/400x600/90EE90/000000?text=Calça+Jeans',
        },
        {
          id: '3-2',
          name: 'Calça Legging',
          image:
            'https://placehold.co/400x600/32CD32/000000?text=Calça+Legging',
        },
        {
          id: '3-3',
          name: 'Calça Social',
          image: 'https://placehold.co/400x600/228B22/FFFFFF?text=Calça+Social',
        },
      ],
    },
  ]

  const handleTabClick = (id) => {
    setActiveTab(id)
  }

  return (
    <div className="categories-tab">
      {/* Abas de categorias */}
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
            onClick={() => handleTabClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Produtos da aba ativa */}
      <div className="category-products">
        {categories
          .filter((category) => category.id === activeTab)
          .map((category) => (
            <div key={category.id} className="category-section">
              <h2 className="category-title">{category.name}</h2>
              <div className="products">
                {category.products.map((product) => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <button>Adicionar ao Carrinho</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default CategoriesTab
