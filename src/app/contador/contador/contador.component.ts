import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>{{titulo}}</h1>
    <button (click)="acumular(base)" >+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)" >-{{base}}</button>`
})
export class ContadorComponent{
    numero :number = 0;
    titulo:string="Contador";
    base:number=5;
    acumular (valor:number){
      this.numero  += valor;
    }
}