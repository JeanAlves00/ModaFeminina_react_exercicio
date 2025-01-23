import { useState } from 'react'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import './styles.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="navbar">
      <div className="logo">
        <a href="/">Moda Feminina</a>
      </div>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#novidades" onClick={() => setIsMenuOpen(false)}>
          Novidades
        </a>
        <a href="#promo" onClick={() => setIsMenuOpen(false)}>
          Promoções
        </a>
        <a href="#categorias" onClick={() => setIsMenuOpen(false)}>
          Categorias
        </a>
        <a href="#contato" onClick={() => setIsMenuOpen(false)}>
          Contato
        </a>
      </nav>
      <div className="cart">
        <FaShoppingCart size={24} />
      </div>
      <button className="menu-btn" onClick={toggleMenu} aria-label="Abrir menu">
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </header>
  )
}

export default Navbar
