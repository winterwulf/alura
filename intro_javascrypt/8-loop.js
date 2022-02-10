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

let contador = 0
let destinoExiste = false
while (contador <= 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log(`Destino ${listaDeDestinos[contador]} está disponivel\n`)
        break;
    }
    //console.log(listaDeDestinos[contador])
    contador++
}