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
    this.medService.GetAll().subscribe((response: any) => {
      this.medicacoes = response;
    });
  }

  getListMed(getDados: any) {     
    if(getDados.name === "TODOS OS MEDICAMENTOS"){
      let backgroundColor = 'danger'; 
      this.router.navigate(['/search', backgroundColor]);
    }
    
    if(getDados.name === "ANTIBIÓTICOS"){
      let backgroundColor = 'primary';
      let med = this.getMedFilter('Antibiótico')
      let dados = encodeURIComponent(JSON.stringify(med));
      let type = 'Antibióticos';
      this.router.navigate(['/meds', dados, backgroundColor, type]);
    }

    if(getDados.name === "ANTI-CONVULSIVANTES"){
      let backgroundColor = 'secondary';
      let med = this.getMedFilter('Anti-Convulsivante')
      let dados = encodeURIComponent(JSON.stringify(med));
      let type = 'Anti-Convulsivantes';
      this.router.navigate(['/meds', dados, backgroundColor, type]);
    }

    if(getDados.name === "ANTI-INFLAMATÓRIOS"){
      let backgroundColor = 'tertiary';
      let med = this.getMedFilter('Anti-Inflamatório')
      let dados = encodeURIComponent(JSON.stringify(med));
      let type = 'Anti-Inflamatórios';
      this.router.navigate(['/meds', dados, backgroundColor, type]);
    }

    if(getDados.name === "ANTI-FÚNGICOS"){
      let backgroundColor = 'success';
      let med = this.getMedFilter('Anti-Fúngico')
      let dados = encodeURIComponent(JSON.stringify(med))
      let type = 'Anti-Fúngicos';
      this.router.navigate(['/meds', dados, backgroundColor, type]);
    }

    if(getDados.name === "ANTI-HISTAMÍNICOS"){
      let backgroundColor = 'warning';
      let med = this.getMedFilter('Anti-Histamínico')
      let dados = encodeURIComponent(JSON.stringify(med))
      let type = 'Anti-Histamínicos';
      this.router.navigate(['/meds', dados, backgroundColor, type]);
    }

    if(getDados.name === "ANTI-PARASITÁRIOS"){
      let backgroundColor = 'danger';
      let med = this.getMedFilter('Anti-Parasitário')
      let dados = encodeURIComponent(JSON.stringify(med))
      let type = 'Anti-Parasitários';
      this.router.navigate(['/meds', dados, backgroundColor, type]);
    }

    if(getDados.name === "BRONCODILATADORES"){
      let backgroundColor = 'medium';
      let med = this.getMedFilter('Broncodilatadores')
      let dados = encodeURIComponent(JSON.stringify(med))
      let type = 'Broncodilatadores';
      this.router.navigate(['/meds', dados, backgroundColor, type]);
    }

    if(getDados.name === "CORTICOSTERÓIDES"){
      let backgroundColor = 'dark';
      let med = this.getMedFilter('Corticosteróide')
      let dados = encodeURIComponent(JSON.stringify(med))
      let type = 'Corticosteróides';
      this.router.navigate(['/meds', dados, backgroundColor, type]);
    }

    if(getDados.name === "LAXATIVOS"){
      let backgroundColor = 'primary';
      let med = this.getMedFilter('Laxativo')
      let dados = encodeURIComponent(JSON.stringify(med))
      let type = 'Laxativos';
      this.router.navigate(['/meds', dados, backgroundColor, type]);
    }

    if(getDados.name === "SINTOMÁTICOS"){
      let backgroundColor = 'secondary';
      let med = this.getMedFilter('Sintomático');
      let dados = encodeURIComponent(JSON.stringify(med));
      let type = 'Sintomáticos';
      this.router.navigate(['/meds', dados, backgroundColor, type]);
    }

    if(getDados.name === "HIDRATAÇÃO VENOSA"){
      let backgroundColor = 'tertiary';
      let med = this.getMedFilter('Hidratação Venosa')
      let dados = encodeURIComponent(JSON.stringify(med))
      let type = 'Hidratação Venosa';
      this.router.navigate(['/meds', dados, backgroundColor, type]);
    }

    if(getDados.name === "OUTROS MEDICAMENTOS"){
      let backgroundColor = 'danger';
      let med = this.getMedFilter('Outros')
      let dados = encodeURIComponent(JSON.stringify(med))
      let type = 'Outros Medicamentos';
      this.router.navigate(['/meds', dados, backgroundColor, type]);
    }
  }

  public meds = [
    { name: 'TODOS OS MEDICAMENTOS', color: 'danger', icon: 'home' },
    { name: 'ANTIBIÓTICOS', color: 'primary', icon: 'home' },
    { name: 'ANTI-CONVULSIVANTES', color: 'secondary', icon: 'home' },
    { name: 'ANTI-INFLAMATÓRIOS', color: 'tertiary', icon: 'home' },
    { name: 'ANTI-FÚNGICOS', color: 'success', icon: 'home' },
    { name: 'ANTI-HISTAMÍNICOS', color: 'warning', icon: 'home' },
    { name: 'ANTI-PARASITÁRIOS', color: 'danger', icon: 'home' },
    { name: 'BRONCODILATADORES', color: 'primary', icon: 'home' },
    { name: 'CORTICOSTERÓIDES', color: 'secondary', icon: 'home' },
    { name: 'LAXATIVOS', color: 'tertiary', icon: 'home' },
    { name: 'SINTOMÁTICOS', color: 'success', icon: 'home' },
    { name: 'HIDRATAÇÃO VENOSA', color: 'warning', icon: 'home' },
    { name: 'OUTROS MEDICAMENTOS', color: 'danger', icon: 'home' }   
  ];

  getMedFilter(name: string){   
   var medList; 
   medList = this.medicacoes.filter(function(medicacao : any) {
     return  medicacao.tipo === name
    });
    return medList;
  }
}
