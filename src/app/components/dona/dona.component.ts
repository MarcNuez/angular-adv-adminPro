import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {


  @Input() title:string = 'Sin titulo';


   // Doughnut
   @Input('labels') public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   @Input('data') public doughnutChartData: MultiDataSet = [
     [350, 450, 100]
    
   ];
    public doughnutChartType: ChartType = 'doughnut';
   public colors: Color[] = [
     {backgroundColor:['#9e120e','#ff5800','#999']}
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
