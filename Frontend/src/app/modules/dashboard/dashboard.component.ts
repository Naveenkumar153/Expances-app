import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TotalExpances } from '@app/core/models/common.model';
import { ChartData, ChartEvent, ChartOptions, ChartType,} from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    NgChartsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  public chart:any;
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: string[] = [
    `Technology $${ 10000 }`,
    `Teaching Tools  $${ 5000 }`,
    `Equipments $${ 6000 }`,
    `Subscriptions $${ 7000 }`,
    `Tranings $${ 3000 }`,
    `Support Services $${ 4000 }`,
    `Health $${ 1020 }`,
    `Facilities $${ 5000 }`,
    `Others $${ 9000 }`,
  ];
  public doughnutChartData: ChartData<'doughnut', number[]> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [10000, 5000, 6000,7000,3000,4000,1020,5000,9000],
        backgroundColor:[
          'rgb(255, 99, 132)', 
          'rgb(54, 162, 235)', 
          'rgb(255, 205, 86)',
          // '#89D69B',
          // '#EE9C48',
          // '#F37761',
          '#EC7093',
          '#B060A1',
          '#607EBA',
          '#BD8DC2',
          '#2FBCA9',
          'rgb(195,31,29)',
        ] 
        
      },
    ],
  };
  public chartOptions: ChartOptions = {
    // resizeDelay: 1,
    // responsive: true,
    plugins:{
      legend:{ position:'right' },
    },
    maintainAspectRatio: false,
    layout:{
      padding:2
    }
  }
  // events
  public chartClicked({ event, active, }: { event: ChartEvent; active: object[]; }): void {
    console.log(event, active);
  }

  public chartHovered({ event,active, }: { event: ChartEvent; active: object[]; }): void {
    console.log(event, active);
  }


  TotalExpances: TotalExpances[] = [
    {
      title: 'Total Expances',
      icons: 'account_balance_wallet',
      date: 'Jan 2024',
      amount: '10,00,000',
      symbol: '₹' //&#8377;
    },
    {
      title: 'Total Budget',
      icons: 'account_balance_wallet',
      date: 'Jan 2024',
      symbol: '₹',
      amount: '12,00,000'
    },
    {
      title: 'Expense Analysis',
      icons: 'account_balance_wallet',
      date: 'Jan 2024',
      symbol: '₹',
      amount: '15,00,000'
    },
  ];

  constructor(){

  }
  

  ngOnInit(): void {
  }

}
