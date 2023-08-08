import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.page.html',
  styleUrls: ['./adm.page.scss'],
})
export class AdmPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isTransparent = false;

  toggleImageDisplay(imageId: string) {
    const imagem = document.getElementById(imageId);

    if (imagem) {
      this.isTransparent = !this.isTransparent;
      imagem.style.opacity = this.isTransparent ? '0.3' : '1'; 
    } else {
      console.log('Imagem não encontrada.');
    }
  }

  
  
  
  
  
  


  isColored: boolean = false;

  toggleColor() {
    debugger
    this.isColored = !this.isColored;
  }

}
