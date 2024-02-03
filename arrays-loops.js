// crie uma lista com 5 paises

const paises = ['Brasil', 'Portugal', 'Alemnha', 'Russia', 'italia'];
console.log(paises);

// removendo paises da lista

paises.pop();
console.log(paises);

//adicionando pais no inicio

paises.unshift('italia');
console.log(paises);

// removendo pais no inicio

paises.shift();
console.log(paises);

// imprimir o útimo item da lista

const ultimo = paises[paises.length - 1];
console.log(ultimo);

// imprima o segundo pais da lista

console.log(paises[1]);
console.log(paises[2]);