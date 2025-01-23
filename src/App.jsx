import './App.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import ProductMenu from './components/Products'
import CategoriesTab from './components/CategoriesTab'
import ContactTab from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductMenu />
      <CategoriesTab />
      <ContactTab />
    </div>
  )
}

export default App
