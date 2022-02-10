export class Cliente { //obs. eu coloquei `;` em tudo mas não precisa
    nome;

    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}