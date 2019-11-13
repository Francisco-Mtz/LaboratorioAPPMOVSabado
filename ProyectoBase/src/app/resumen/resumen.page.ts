import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss']
})
export class ResumenPage implements OnInit {
  @ViewChild('barCanvas') doughnutChartCanvas: ElementRef;

  private doughnutChart: Chart;

  constructor() {}

  ngOnInit() {
    this.doughnutChart = new Chart(this.doughnutChartCanvas.nativeElement, {
      type: ' doughnut',
      data: {
        // tslint:disable-next-line: max-line-length
        labels: ['Deuda', 'Hogar', 'Alimento', 'Entretenimiento', 'Transporte', 'Educacion', 'Regalos'​, ​'Viajes'​, ​'Ingresos'​, ​'Ropa y Calazado'],
        datasets: [
          {
            label: '# de Porcentaje',
            data: [​10​,​10​,​10​,​10​,​10​,​10​,​10​,​10​,​10​,​10​],
            backgroundColor: [
              ​'rgba(255, 99, 132, 0.2)'​,
              'rgba(54, 162, 235, 0.2)'​,
              ​'rgba(255, 206, 86, 0.2)'​,
              'rgba(75, 192, 192, 0.2)'​,
              'rgba(153, 102, 255, 0.2)'​,
              'rgba(255, 159, 64, 0.2)'​, ​//color repetido, se tiene que cambiar
              'rgba(255, 159, 64, 0.2)'​,​ //color repetido, se tiene que cambiar
              ​'rgba(255, 159, 64, 0.2)'​,​ //color repetido, se tiene que cambiar
              'rgba(255, 159, 64, 0.2)'​,​ //color repetido, se tiene que cambiar
              'rgba(255, 159, 64, 0.2)'  ​//color repetido, se tiene que cambiar 
            ],
            // tslint:disable-next-line: max-line-length
            hoverBackgroundColor: ['#FF6384'​, ​'#36A2EB'​, ​'#FFCE56'​, ​'#FF6384'​, ​'#36A2EB'​, '#FFCE56'​,​ ​'#FFCE56'​, ​'#FFCE56'​, '#FFCE56'​, ​'#FFCE56'​],
          }
        ]
      }
    });
  }
}
