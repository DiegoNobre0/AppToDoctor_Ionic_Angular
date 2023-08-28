import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  atendimento: string = 'Adulto';
  teste: string = ''

  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Regra dos Nove', url: '/calculator-body', icon: 'body' },
    { title: 'Login', url: '/login', icon: 'paper-plane' },
    // { title: 'Contato', url: '/folder/Contato', icon: 'heart' },
    // { title: 'Sobre', url: '/folder/Sobre', icon: 'archive' }  
  ];
  
  constructor() {}
 

  tipoAtendimento(tipoAtendimento: string){
    if(tipoAtendimento == "Adulto"){
      localStorage.setItem("tipoAtendimento", "Adulto");
      this.atendimento = "Adulto"
    }else{
      localStorage.setItem("tipoAtendimento", "Pediatrico");
      this.atendimento = "Pediatrico"
    }
  }
}
