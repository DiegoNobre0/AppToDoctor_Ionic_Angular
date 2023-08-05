import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meds',
  templateUrl: './meds.page.html',
  styleUrls: ['./meds.page.scss'],
})
export class MedsPage implements OnInit {
  meds: any;
  backgroundColor: any;
  typeMed: any;
  constructor(   
    protected router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    const dados : any = this.route.snapshot.paramMap.get('med');
    this.meds = JSON.parse(decodeURIComponent(dados));
    this.backgroundColor = this.route.snapshot.paramMap.get('backgroundColor');
    this.typeMed = this.route.snapshot.paramMap.get('type');
  }



  getMed(getData: any) {      
    if(getData.tipo === "Antibiótico"){
      let backgroundColor = this.backgroundColor;
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Anti-Convulsivantes';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
      console.log(dados)
      console.log(getData)
    }

    if(getData.tipo === "Anti-Convulsivante"){
      let backgroundColor = this.backgroundColor;
      let dados = encodeURIComponent(JSON.stringify(getData))
      this.router.navigate(['/calculator', dados, backgroundColor]);
    }

    if(getData.tipo === "Anti-Inflamatório"){
      let backgroundColor = this.backgroundColor;
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Anti-Inflamatórios';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Anti-Fúngico"){
      let backgroundColor = this.backgroundColor;
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Anti-Fúngicos';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Anti-Histaminico"){
      let backgroundColor = this.backgroundColor;
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Anti-Histaminico';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Anti-Parasitario"){
      let backgroundColor = this.backgroundColor;
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Anti-Parasitarios';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Broncodilatadores"){
      let backgroundColor = this.backgroundColor;
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Broncodilatadores';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Corticosteroide"){
      let backgroundColor = this.backgroundColor;
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Corticosteroides';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Laxativo"){
      let backgroundColor = '#dc3545';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Laxativos';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Sintomatico"){
      let backgroundColor = '#fd7e14';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Sintomaticos';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Hidratação Venosa"){
      let backgroundColor = '#ffc107';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Hidratação Venosa';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Outros"){
      let backgroundColor = '#28a745';
      let type = 'Outros Medicamentos';
      let dados = encodeURIComponent(JSON.stringify(getData))
      this.router.navigate(['/calculos', dados, backgroundColor,type]);
    }
  }

}
