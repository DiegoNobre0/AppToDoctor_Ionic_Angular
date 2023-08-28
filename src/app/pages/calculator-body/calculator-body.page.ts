import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-body',
  templateUrl: './calculator-body.page.html',
  styleUrls: ['./calculator-body.page.scss'],
})
export class CalculatorBodyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isTransparent: boolean = false;
  isColored: boolean = false;
  totalValue = 0; 
  peso: any;
  formParkland: any;

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

  calculateBody(){
    this.formParkland = this.totalValue * this.peso * 4;
  }


}
