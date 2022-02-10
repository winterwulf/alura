console.log("Listas\n")

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

listaDeDestinos.push("Curitiba") //push serve para adicionar itens na lista
console.log("Destinos:\n")
console.log(listaDeDestinos)

listaDeDestinos.splice(2,1) //splice remove item da lista

console.log("Destinos:\n")
console.log(listaDeDestinos)
console.log(listaDeDestinos[2])