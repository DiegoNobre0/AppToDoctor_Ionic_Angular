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

  isTransparent: boolean = false;
  isColored: boolean = false;
  totalValue = 0; 

  toggleImageDisplay(imageId: string, imageValue: number) {
    const imagem = document.getElementById(imageId);

    if (imagem) {
      this.isTransparent = imagem.style.opacity !== '0.3';
      imagem.style.opacity = this.isTransparent ? '0.3' : '1';

      if (this.isTransparent) {
        this.totalValue += imageValue;
      } else {
        this.totalValue -= imageValue;
      }
      
    } else {
      console.log('Imagem não encontrada.');
    }
  }

  toggleColor() {
    debugger
    this.isColored = !this.isColored;
  }

}
