import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Regra dos Nove', url: '/calculator-body', icon: 'body' },
    { title: 'Login', url: '/login', icon: 'paper-plane' },
    // { title: 'Contato', url: '/folder/Contato', icon: 'heart' },
    // { title: 'Sobre', url: '/folder/Sobre', icon: 'archive' }  
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
 
}
