function ProductCard({ product }) {
  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <li className="product-card">
      <div className="product-card-info">
        <h2>{product.name}</h2>
        <span className="product-price">{formattedPrice}</span>
      </div>

      {/* Renderização condicional: o texto e a cor do badge dependem de product.inStock */}
      {product.inStock ? (
        <span className="badge badge-in-stock">Em estoque</span>
      ) : (
        <span className="badge badge-out-stock">Esgotado</span>
      )}
    </li>
  )
}

export default ProductCard
