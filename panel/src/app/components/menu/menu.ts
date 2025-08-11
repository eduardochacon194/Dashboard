import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
    ngOnInit(): void {
    initFlowbite();
  }
}
