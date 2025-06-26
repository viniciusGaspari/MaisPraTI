function nomesPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(p => p.nome);
}
