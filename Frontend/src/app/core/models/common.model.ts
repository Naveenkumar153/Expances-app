import { ChartOptions, ChartType } from "chart.js";

export interface sideNav {
    id:number,
    icon:string,
    name:string,
    className:string,
    routerLink?:string,
}

export interface TotalExpances {
    id?:number,
    title:string,
    icons:string,
    date:string,
    symbol:any,
    amount:string
}

interface DateRange {
    value: number;
    RangeValue: string;
}
  
export interface DateRangeGroup {
    disabled?: boolean;
    Year: string;
    Month: DateRange[];
}

export interface ChartInterface {
    type: ChartType,
    labels:string[],
    options?: ChartOptions,
}

export interface Activities {
    name:string,
    amount:string,
    date:string,
}
