import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ANGULAR_MATERIAL_COMPONENTS } from './material.componets';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ANGULAR_MATERIAL_COMPONENTS
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Frontend';
}
