import { Routes } from "@angular/router";

export const MODULES_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        data:{ title: 'Dashboard' },
    },
    {
        path:'transactions',
         data:{ title: 'Transactions' },
        loadComponent: () => import('./transaction/transaction.component').then(m => m.TransactionComponent),
    },
    {
        path:'portfolio',
         data:{ title: 'Portfolio' },
        loadComponent: () => import('./portfolio/portfolio.component').then(m => m.PortfolioComponent),
    }
]