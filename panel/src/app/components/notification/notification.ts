import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class Notification {
      ngOnInit(): void {
      initFlowbite();
    }
}
