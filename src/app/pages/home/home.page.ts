import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedService } from 'src/app/service/med.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  medicacoes:any;

  constructor(
    protected router: Router,
    private medService: MedService
  ) { }
  
  ngOnInit() {
    debugger
    this.medService.GetAll().subscribe((response: any) => {
      this.medicacoes = response;
      // this.medicacoes = response.filter(function(medicacao : any) { return medicacao.medicamentoUso == "Adulto" && medicacao.tipo == "Anti-Convulsivante"});
    
  });
  }

  getListMed(getDados: any) {    
    debugger
    if(getDados.name === "ANTIBIÓTICOS"){
      let backgroundColor = 'primary';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/meds', dados, backgroundColor]);
    }

    if(getDados.name === "ANTI-CONVULSIVANTES"){
      let backgroundColor = 'secondary';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/meds', dados, backgroundColor]);
    }

    if(getDados.name === "ANTI-INFLAMATÓRIOS"){
      let backgroundColor = 'tertiary';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/meds', dados, backgroundColor]);
    }

    if(getDados.name === "ANTI-FÚNGICOS"){
      let backgroundColor = 'success';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/meds', dados, backgroundColor]);
    }

    if(getDados.name === "ANTI-HISTAMÍNICOS"){
      let backgroundColor = 'warning';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/meds', dados, backgroundColor]);
    }

    if(getDados.name === "ANTI-PARASITÁRIOS"){
      let backgroundColor = 'danger';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/meds', dados, backgroundColor]);
    }

    if(getDados.name === "BRONCODILATADORES"){
      let backgroundColor = 'medium';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/meds', dados, backgroundColor]);
    }

    if(getDados.name === "CORTICOSTERÓIDES"){
      let backgroundColor = 'dark';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/meds', dados, backgroundColor]);
    }

    if(getDados.name === "LAXATIVOS"){
      let backgroundColor = 'primary';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/meds', dados, backgroundColor]);
    }

    if(getDados.name === "SINTOMÁTICOS"){
      let backgroundColor = 'secondary';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/meds', dados, backgroundColor]);
    }

    if(getDados.name === "HIDRATAÇÃO VENOSA"){
      let backgroundColor = 'tertiary';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/meds', dados, backgroundColor]);
    }

    if(getDados.name === "OUTROS MEDICAMENTOS"){
      let backgroundColor = 'success';
      let dados = encodeURIComponent(JSON.stringify(getDados))
      this.router.navigate(['/meds', dados, backgroundColor]);
    }
  }

  public meds = [
    { name: 'ANTIBIÓTICOS', color: 'primary', icon: 'home' },
    { name: 'ANTI-CONVULSIVANTES', color: 'secondary', icon: 'home' },
    { name: 'ANTI-INFLAMATÓRIOS', color: 'tertiary', icon: 'home' },
    { name: 'ANTI-FÚNGICOS', color: 'success', icon: 'home' },
    { name: 'ANTI-HISTAMÍNICOS', color: 'warning', icon: 'home' },
    { name: 'ANTI-PARASITÁRIOS', color: 'danger', icon: 'home' },
    { name: 'BRONCODILATADORES', color: 'medium', icon: 'home' },
    { name: 'CORTICOSTERÓIDES', color: 'dark', icon: 'home' },
    { name: 'LAXATIVOS', color: 'primary', icon: 'home' },
    { name: 'SINTOMÁTICOS', color: 'secondary', icon: 'home' },
    { name: 'HIDRATAÇÃO VENOSA', color: 'tertiary', icon: 'home' },
    { name: 'OUTROS MEDICAMENTOS', color: 'success', icon: 'home' }   
  ];


  getMedFilter(name: string){
   this.medicacoes .filter(function(medicacao : any) { return medicacao.medicamentoUso == "Adulto" && medicacao.tipo == "Anti-Convulsivante"});
  }

}
