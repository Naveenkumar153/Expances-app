import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { ChartInterface } from '@app/core/models/common.model';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [
    NgChartsModule,
  ],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DoughnutChartComponent {

  constructor(
    private changeDetectRef:ChangeDetectorRef,
  ){

  }

  @ViewChild(BaseChartDirective) charts!: BaseChartDirective;

  public chart: ChartInterface = {
    type: 'doughnut',
    labels: [
      `Technology`,
      `Teaching Tools`,
      `Equipments`,
      `Subscriptions`,
      `Tranings`,
      `Support Services`,
      `Health`,
      `Facilities`,
      `Others`,
    ],
    options: {
      responsive: true,
      plugins:{
        legend:{
           position:'right', 
           display:true
        },
        tooltip: {
           position:"nearest",
           enabled:true,
           callbacks:{
            // label: function(context) {
            //   console.log('context toolti[',context);
            //   const value = context.dataset.data[context.dataIndex];
            //   const label = context?.chart?.data?.labels![context.dataIndex];
            //   return `${label}: ${value}`;
            //  },
           },
           
        },
        datalabels:{
          anchor:'center',
          align:'center',
          color:'#fff',
        //   display: function(context) {
        //   const minValue  = context.dataset.data;
        //   const threshold = Math.min(...(minValue as number[]).filter(val => val !== null));
        //   console.log('threshold',threshold);
        //   const dataValue = context.dataset.data[context.dataIndex];
        //   console.log('dataValue',dataValue);
        //   // Check if dataValue is a number
        //   if (typeof dataValue === 'number') {
        //     return dataValue >= threshold;
        //   }
        //   // Handle other types if needed, or return false for non-numeric values
        //   return false;
        //  }
        },
        
      },
      maintainAspectRatio: false,
      layout:{ padding:2 },
      // scales:{
      //   y:{
      //     suggestedMax: Math.max(...this.doughnutChartData.datasets[0].data),
      //     suggestedMin: Math.min(...this.doughnutChartData.datasets[0].data),
      //   }
      // },
      elements:{
        // center: {
        //   text: 'Total\n' + this.doughnutChartData.datasets[0].data.reduce((a, b) => a + b, 0),
        //   color: '#36A2EB', // Text color
        //   fontStyle: 'Arial', // Font style
        //   sidePadding: 20, // Padding around the text
        // },
      }
    }
  };
  public seriesData = [10000, 5000, 6000,7000,3000,4000,1001,5000,9000];
  // public total      = this.seriesData.reduce((a,v) => a + v);
  // public inPercent  = this.seriesData.map(v => Math.max(v / this.total * 100)); 
  public barChartPlugins = [DataLabelsPlugin];
  public ChartData: ChartData<'doughnut', number[]> = {
    labels: this.chart.labels,
    datasets: [
      { 
        data: this.seriesData,
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
        ],
        hoverBorderColor: "#fff",
                    // borderColor: 'rgba(75, 192, 192, 1)',
        // borderWidth: 3
        
      },
    ],   
  };
  public chartClicked({ event, active, }: { event: ChartEvent; active: object[]; }): void {
    console.log(event, active);
  }

  public chartHovered({ event,active, }: { event: ChartEvent; active: object[]; }): void {
    console.log(event, active);
  }

}
