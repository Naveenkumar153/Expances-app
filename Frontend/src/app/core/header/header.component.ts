import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  title: string = '';
  constructor(
    private activeRoute:ActivatedRoute,
    private router:Router,
  ) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.activeRoute),
      map((route) => {
        while(route.firstChild) { route = route.firstChild; }
        return route
      }),
      mergeMap((route) => route.data)
    ).subscribe((event) => {
      this.title = event['title']
    });
  }
}
