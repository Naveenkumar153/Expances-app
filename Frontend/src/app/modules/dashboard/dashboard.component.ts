import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ChartInterface, DateRangeGroup, TotalExpances } from '@app/core/models/common.model';
import { ChartData, ChartEvent, ChartOptions, ChartType, Tooltip,} from 'chart.js';
import { NgChartsModule, BaseChartDirective } from 'ng2-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormControl } from '@angular/forms';
import { AngularFormsModules, CommonModules } from '@app/material.componets';
import { DoughnutChartComponent } from '@app/shared/components/doughnut-chart/doughnut-chart.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Activitie } from '@app/shared/Recent-activites';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModules,
    MatCardModule,
    MatIconModule,
    NgChartsModule,
    MatFormFieldModule,
    MatSelectModule, 
    MatInputModule,
    AngularFormsModules,
    DoughnutChartComponent,
    ScrollingModule,
    MatTableModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit{

  public chart: ChartInterface = {
    type:'bar',
    labels:[
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
    ],
    options:{
      elements: {
        line: {
          tension: 0.4,
        },
      },
      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        x: {},
        y: {
          min: 10,
        },
      },
      plugins: {
        legend: { display: true },
      },
    }
  };


  @ViewChild(BaseChartDirective) chartDirective: BaseChartDirective | undefined;


  public barChartData: ChartData<'bar'> = {
    labels: this.chart.labels,
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Expances' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Savings' },
    ],
  };

  MonthControl = new FormControl('');

  DateRange: DateRangeGroup[] = [
    {
      Year:'Year-2024',
      Month:[
        { value: 1, RangeValue: 'Jan' },
        { value: 2, RangeValue: 'Feb' },
        { value: 3, RangeValue: 'Mar' },
        { value: 4, RangeValue: 'Apr' },
        { value: 5, RangeValue: 'May' },
        { value: 6, RangeValue: 'June' },
        { value: 7, RangeValue: 'July' },
        { value: 8, RangeValue: 'Aug' },
        { value: 9, RangeValue: 'Sep' },
        { value: 10, RangeValue: 'Oct' },
        { value: 11, RangeValue: 'Nov' },
        { value: 12, RangeValue: 'Dec' },
      ],
    },
  ];


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

  dataSource = Activitie;
  displayedColumns: string[] = ['Merchant', 'Amount', 'Date'];

  constructor(){

  }
  

  ngOnInit(): void {

  }

}
