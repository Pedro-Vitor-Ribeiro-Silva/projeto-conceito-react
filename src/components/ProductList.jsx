import ProductCard from './ProductCard'

function ProductList({ products }) {
  // Renderização condicional: mensagem alternativa quando a lista está vazia
  if (products.length === 0) {
    return <p className="empty-message">Nenhum produto encontrado.</p>
  }

  return (
    <ul className="product-list">
      {/* Lista renderizada com .map(), cada item precisa de uma key única */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default ProductList
