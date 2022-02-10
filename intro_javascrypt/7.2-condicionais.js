console.log("Listas\n")

const idadeComprador = 21
const estaAcompanhada = true
const temPassagem = true

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

listaDeDestinos.push("Curitiba") //push serve para adicionar itens na lista
// console.log("Destinos:\n")
// console.log(listaDeDestinos)

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viagem!")
    listaDeDestinos.splice(2, 1) //splice remove item da lista
    console.log("Destinos:\n")
    console.log(listaDeDestinos)
}
else {
    console.log("menor de idade")
}

if(idadeComprador >=18 && temPassagem) {
    console.log("pode embarcar")
}
else{ console.log("não pode embarcar")}

// console.log(listaDeDestinos[2])