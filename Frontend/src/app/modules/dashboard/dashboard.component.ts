import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TotalExpances } from '@app/core/models/common.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

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
  ]
  
}
