function memoize(fn) {
  const cache = {};
  return function (...args) {
    const chave = JSON.stringify(args);
    if (cache[chave]) return cache[chave];
    const resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}
