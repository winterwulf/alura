import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    
    agencia;

    _cliente;
    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof  Cliente)
        this._cliente = novoValor;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor; //retorna o valor para onde a função foi chamada, ou seja, mostra  o valor atualizado depois das operações acima.
        }
    }

    depositar (valor){
        if(valor <=  0) return; //técnica early return
        this._saldo += valor;        
    }

    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        return `\n${valorSacado} reais transferido para ${conta._cliente.nome}\n`
    }
}