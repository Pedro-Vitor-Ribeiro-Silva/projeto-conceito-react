import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import products from './data/products'
import './App.css'

function App() {
  const [onlyInStock, setOnlyInStock] = useState(false)

  // Renderização condicional: a lista exibida depende do estado onlyInStock
  const visibleProducts = onlyInStock
    ? products.filter((product) => product.inStock)
    : products

  return (
    <div className="app">
      <Header
        title="Catálogo de Produtos"
        subtitle="Exemplo simples de componentes, props, listas e renderização condicional"
      />

      <main className="main">
        <button className="toggle-button" onClick={() => setOnlyInStock(!onlyInStock)}>
          {onlyInStock ? 'Mostrar todos' : 'Mostrar apenas em estoque'}
        </button>

        <ProductList products={visibleProducts} />
      </main>

      <Footer year={2026} author="Projeto Conceito React" />
    </div>
  )
}

export default App
