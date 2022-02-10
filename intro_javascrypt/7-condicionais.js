console.log("Listas\n")

const idadeComprador = 15
const estaAcompanhada = true

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

listaDeDestinos.push("Curitiba") //push serve para adicionar itens na lista
console.log("Destinos:\n")
console.log(listaDeDestinos)

if (idadeComprador >= 18) {
    console.log("comprador maior de idade")
    listaDeDestinos.splice(2, 1) //splice remove item da lista
    console.log("Destinos:\n")
    console.log(listaDeDestinos)
}
else if (estaAcompanhada) {
    console.log("menor acompanhado")
}
else {
    console.log("menor de idade")
}

// console.log(listaDeDestinos[2])