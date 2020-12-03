import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') valorBarra: number;
  @Input() btnClass: string = "btn-primary";

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {

    this.btnClass = `btn ${this.btnClass}`
  }

  onChange(valor: number) {
    if(valor >= 100){
      this.valorBarra = 100
      
    }else if(valor<=0){
      this.valorBarra = 0;
    }else{
      this.valorBarra = valor;
    }
    this.valorSalida.emit(this.valorBarra)
  }


  aumentar(valor: number) {
    if (this.valorBarra >= 100) {
      this.valorSalida.emit(100)
      return this.valorBarra = 100;
    }
    this.valorBarra += valor;
    this.valorSalida.emit(this.valorBarra)
  }

  disminuir(valor: number) {
    if (this.valorBarra <= 0) {
      this.valorSalida.emit(0)
      return this.valorBarra = 0;
    }
    this.valorBarra += valor;
    this.valorSalida.emit(this.valorBarra)
  }
}
