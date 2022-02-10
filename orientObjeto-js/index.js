import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("João", 12345679801);
const cliente2 = new Cliente("Maria", 22242679801);

console.log("\n\nCliente 1: ", cliente1, "\n\nCliente 2: ", cliente2)

const conta1 = new ContaCorrente(cliente1, 6969);
const conta2 = new ContaCorrente(cliente2, 1337);

console.log("\n\nConta 1: ", conta1,"\n\nConta 2: ", conta2);

//para cliente2 vou fazer a declaração de maneira diferente
//conta2.cliente = new Cliente();
// const client2 = new Cliente();
// cliente2.cpf = 22242679801;
// cliente2.nome = "Maria";
//conta2.client=client2;
// conta2.cliente.cpf = 22242679801;
// conta2.cliente.nome = "Maria";
// conta2.agencia = 1001;

conta1.depositar(100);
conta1.depositar(100);
conta1.depositar(-100);

//const valorSacado = conta1.sacar(50);
//console.log(valorSacado);

//console.log(conta1.transferir(35,conta2));

//console.log(cliente1, cliente2)