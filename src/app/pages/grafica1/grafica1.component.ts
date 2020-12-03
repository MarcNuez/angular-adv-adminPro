import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  label1 = ['x', 'y', 'z'];
  label2 = ['a', 'b', 'c'];

  data1 = [
    [590, 340, 230]

  ];
  data2 = [
    [356, 120, 989]

  ];

  constructor() { }

  ngOnInit(): void {
  }
}
