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
  selectedColor: string = 'red'; // Cor padrão selecionada

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  colorizeImage(event: any): void {
    const x = event.offsetX;
    const y = event.offsetY;

    const coloringImage = document.getElementById('coloringImage') as HTMLImageElement;

    const canvas = document.createElement('canvas');
    canvas.width = coloringImage.width;
    canvas.height = coloringImage.height;

    const context = canvas.getContext('2d');

    if (!context) {
      console.error('Contexto do canvas não está disponível.');
      return;
    }

    context.drawImage(coloringImage, 0, 0, coloringImage.width, coloringImage.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const pixelData = imageData.data;

    // Lógica para colorir a imagem
    this.fillArea(pixelData, canvas.width, canvas.height, x, y);

    context.putImageData(imageData, 0, 0);

    coloringImage.src = canvas.toDataURL();
  }

  fillArea(pixelData: any, width: number, height: number, startX: number, startY: number): void {
    const stack = [{ x: startX, y: startY }];

    while (stack.length > 0) {
      const { x, y } = stack.pop()!; // Use ! para informar ao TypeScript que x e y não são undefined

      if (x < 0 || x >= width || y < 0 || y >= height) {
        continue; // Ignorar pixels fora dos limites da imagem
      }

      const pixelIndex = (y * width + x) * 4;

      // Verificar se o pixel ainda é preto (área não colorizada)
      if (pixelData[pixelIndex] === 0 && pixelData[pixelIndex + 1] === 0 && pixelData[pixelIndex + 2] === 0) {
        pixelData[pixelIndex] = parseInt(this.selectedColor.substr(4, 3));
        pixelData[pixelIndex + 1] = parseInt(this.selectedColor.substr(9, 3));
        pixelData[pixelIndex + 2] = parseInt(this.selectedColor.substr(14, 3));
        pixelData[pixelIndex + 3] = 255;

        // Empilhar pixels vizinhos para processamento
        stack.push(
          { x: x - 1, y: y },
          { x: x + 1, y: y },
          { x: x, y: y - 1 },
          { x: x, y: y + 1 }
        );
      }
    }
  }

}
