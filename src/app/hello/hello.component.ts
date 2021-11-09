import { Component } from '@angular/core'

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
        
})
export class helloComponent{
    nome: string;
    clientes: Cliente[];

    constructor(){
        this.nome = 'Bruno';
        let cliente = new Cliente('Bruno', 19);
        let fulano = new Cliente ('Fulano', 32);
        let cliente2 = new Cliente ('Junior', 20)

        this.clientes = [cliente,fulano,cliente2];
    }
}

class Cliente{

    constructor(
        public nome:string,
        public idade: number
    ){

    }
    
}