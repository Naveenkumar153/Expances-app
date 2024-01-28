import { Component,OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ANGULAR_MATERIAL_COMPONENTS } from '@app/material.componets';
import { sideNav } from '@app/core/models/common.model';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/core/header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    ANGULAR_MATERIAL_COMPONENTS
  ],
})
export class SideNavComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;
  sideNav: sideNav[] = [
    {
      id:1,
      icon:'dashboard',
      name:'Dashboard',
      className:'list-items',
      routerLink:'/dashboard'
    },
    {
      id:2,
      icon:'add_circle_outline',
      name:'Add Expense',
      className:'list-items',
      // routerLink:''
    },
    {
      id:3,
      icon:'account_balance_wallet',
      name:'Transactions',
      className:'list-items',
      routerLink:'/transactions'
    },
    {
      id:4,
      icon:'pie_chart',
      name:'Portfolio',
      className:'list-items',
      routerLink:'/portfolio'
    },
    {
      id:5,
      icon:'save_alt',
      name:'Log out',
      className:'logout',
      routerLink:'/signin'
    },
  ];

  constructor(private observer: BreakpointObserver){
  }
  ngOnInit() {
  };

  toggleMenu() {
    this.sidenav.open();
    this.isCollapsed = !this.isCollapsed;
  }
}
