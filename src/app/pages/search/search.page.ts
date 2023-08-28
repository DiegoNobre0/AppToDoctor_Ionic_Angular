import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedService } from 'src/app/service/med.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  backgroundColor: any;
  meds:any;
  termoPesquisa: string = '';
  

  constructor(
    private route: ActivatedRoute,
    private medService: MedService,
    protected router: Router,
  ) { 
    this.backgroundColor = this.route.snapshot.paramMap.get('backgroundColorSearch');
  }

  ngOnInit() {
    const tipoAtendimento = localStorage.getItem("tipoAtendimento")

    this.medService.GetAll().subscribe((response: any) => {
      if(tipoAtendimento === "Adulto"){
        this.meds = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Adulto"});
      }
      if(tipoAtendimento === "Pediatrico"){
        this.meds = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Pediátrico"});
      }  
    });
  }

  filtrarMedicacoes(): any[] {
    if (this.termoPesquisa.trim() === '') {
      return this.meds;
    } else {
      return this.meds.filter((med: any) => {
        return med.nome.toLowerCase().includes(this.termoPesquisa.toLowerCase());
      });
    }
  }

  getTipoMedicamentoClass(tipo: any) {  
    switch (tipo) {
      case 'Antibiótico':
        return 'tipo-Antibiotico';
      case 'Anti-Convulsivante':
        return 'tipo-Convulsivante';
      case 'Anti-Inflamatório':
        return 'tipo-Inflamatorio';
      case 'Anti-Fúngico':
        return 'tipo-Fungico';
      case 'Anti-Histamínico':
        return 'tipo-Histaminico';
      case 'Anti-Parasitário':
        return 'tipo-Parasitario';
      case 'Broncodilatadores':
          return 'tipo-Broncodilatadores';
      case 'Corticosteróide':
          return 'tipo-Corticosteroide';
      case 'Laxativo':
          return 'tipo-Laxativo';
      case 'Sintomático':
        return 'tipo-Sintomatico';
      case 'Hidratação Venosa':
        return 'tipo-Hidratacao';
      case 'Outros':
        return 'tipo-Outros';
      default:
        return '';
    }
  }


  getMed(getData: any) {      
    if(getData.tipo === "Antibiótico"){
      let backgroundColor = 'primary';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Antibióticos';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);     
    }

    if(getData.tipo === "Anti-Convulsivante"){
      let backgroundColor = 'secondary';
      let dados = encodeURIComponent(JSON.stringify(getData))
      let type = 'Anti-Convulsivantes';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Anti-Inflamatório"){
      let backgroundColor = 'tertiary';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Anti-Inflamatórios';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Anti-Fúngico"){
      let backgroundColor = 'success';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Anti-Fúngicos';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Anti-Histaminico"){
      let backgroundColor = 'warning';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Anti-Histaminico';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Anti-Parasitario"){
      let backgroundColor = 'danger';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Anti-Parasitarios';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Broncodilatadores"){
      let backgroundColor = 'medium';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Broncodilatadores';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Corticosteroide"){
      let backgroundColor = 'dark';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Corticosteroides';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Laxativo"){
      let backgroundColor = 'primary';;
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Laxativos';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Sintomatico"){
      let backgroundColor = 'secondary';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Sintomaticos';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Hidratação Venosa"){
      let backgroundColor = 'tertiary';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Hidratação Venosa';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }

    if(getData.tipo === "Outros"){
      let backgroundColor = 'success';
      let dados = encodeURIComponent(JSON.stringify(getData));
      let type = 'Outros Medicamentos';
      this.router.navigate(['/calculator', dados, backgroundColor,type]);
    }
  }

  back(){
    history.back()
  }
}
