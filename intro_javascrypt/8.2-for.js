console.log("\n8 - Loops\n")

const idadeComprador = 21
const estaAcompanhada = true
let temPassagem = false
const destino = "Rio de Janeiro"

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

listaDeDestinos.push("Curitiba") //push serve para adicionar itens na lista

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;


let destinoExiste = false
for(let cont = 0; cont <= 3; cont++){
    if (listaDeDestinos[cont] == destino) {
        console.log(`Destino ${listaDeDestinos[cont]} está disponivel\n`)
        destinoExiste = true
    }
}