import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'
  ]
})
export class ProgressComponent {

  valor1: number = 25;
  valor2: number = 45;

  get getValor1(){
    return `${this.valor1}%`
  }
  get getValor2(){
    return `${this.valor2}%`
  }


}
