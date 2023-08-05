import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Login', url: '/folder/Login', icon: 'paper-plane' },
    { title: 'Contato', url: '/folder/Contato', icon: 'heart' },
    { title: 'Sobre', url: '/folder/Sobre', icon: 'archive' }  
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
