import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
 
  backgroundColor: any;
  tipo: any;
  indicacoes: any = [];
  contraIndicacoes: any = [];
  resultadoMgKg: any = [];
  resultadoMgKgReverso: any = [];
  dadosMedicamentos: any = [];
  resultadoMcgKg: any = []
  resultadoMcgKgReverso: any = []
  resultadoMcgMin: any = []
  resultadoMcgMinReverso: any = []
  solucaoTotal: any;
  solucaoTotalReverso: any;
  soroGlicosado: any;
  soroGlicosadoReverso: any;
  medicamentoMl: any;
  medicamentoMg: any;
  medicamentoMlReverso: any;
  medicamentoMgReverso: any;
  peso: any;
  doseCalculo:any;
  ampola: any;
  vazao:any;
  item: any;
  volume: any;
  teste: any;
  dosagem: any;
  preparoDiluicao: any;
  administracao: any;
  usoGestacao: any;
  dosagemMgKg: any;
  idade: any;
  clearanceCreatinina: any;
  creatina: any;

  public mgKgDia: string = 'mg/kg/dia';
  public mcgKgMin: string = 'mcg/kg/min';
  public mcgMin: string = 'mcg/min';
  public disfuncaoRenal: string = 'não';
  public genero: string = 'masculino';

  constructor(
    private route: ActivatedRoute
  ) {
    const dados : any = this.route.snapshot.paramMap.get('medCalculate');
    this.item = JSON.parse(decodeURIComponent(dados));
    this.backgroundColor = this.route.snapshot.paramMap.get('backgroundColorCalculate');
    this.tipo = this.route.snapshot.paramMap.get('typeCalculate');
    this.soroGlicosado = this.item.quantidadeSoro;
    this.soroGlicosadoReverso = this.item.quantidadeSoro;  
   }

  ngOnInit() {  
    this.metodoParse();
    this.calculoSolucaoTotal();
    this.calculoSoroGlicosado();
    this.calculoSolucaoTotalReverso();
    this.calculoSoroGlicosadoReverso();
  }


  metodoParse(){    
    this.medicamentoMl = JSON.parse(this.item.quantidadeMl);
    this.medicamentoMg = JSON.parse(this.item.quantidadeMg);  
    this.medicamentoMlReverso = JSON.parse(this.item.quantidadeMl);
    this.medicamentoMgReverso = JSON.parse(this.item.quantidadeMg);  
    this.indicacoes = JSON.parse(this.item.indicacao);
    this.contraIndicacoes  = JSON.parse(this.item.contraIndicacao);
    this.dosagem =  JSON.parse(this.item.dose);
    this.preparoDiluicao =  JSON.parse(this.item.preparoDiluicao);
    this.administracao = JSON.parse(this.item.administracao);
    this.usoGestacao = JSON.parse(this.item.usoGestacao);  
    this.dosagemMgKg = this.item.quantidadeMgKg;
    console.log(this.dosagem)
    const quantidadeMlArray = JSON.parse(this.item.quantidadeMg);
    const quantidadeMgArray  = JSON.parse(this.item.quantidadeMl);

    for (let i = 0; i < quantidadeMlArray.length || i < quantidadeMgArray.length; i++) {      
      const key = `${i}`;
      this.dadosMedicamentos[key] = {
        quantidadeMg: parseFloat(quantidadeMlArray[i]),
        quantidadeMl: parseFloat(quantidadeMgArray[i])
      };    
    }   
  }

  calculoMgKg(){   
    if(this.disfuncaoRenal === 'sim'){
      this.calculoClearanceCreatinina()
    }
    
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.peso * this.dosagemMgKg* this.dadosMedicamentos[i].quantidadeMl) / (this.dadosMedicamentos[i].quantidadeMg * this.item.numeroDoses);
      const key = `${i}`;
      this.resultadoMgKg[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
        quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
      }
    }  
  }

  calculoMcgKg(){
    var qntMg = this.medicamentoMg[0] || this.medicamentoMg
    var qntMl = this.medicamentoMl[0] || this.medicamentoMl  
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.doseCalculo * this.peso * 60)/(qntMg/(this.soroGlicosado + qntMl) * 1000);
      const key = `${i}`;
      this.resultadoMcgKg[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        quantidadeMg: this.medicamentoMg,
        quantidadeMl: this.medicamentoMl
      }
    } 
  }

  calculoMcgMin(){  
    var qntMg = this.medicamentoMg[0] || this.medicamentoMg
    var qntMl = this.medicamentoMl[0] || this.medicamentoMl  
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.doseCalculo * 60)/(qntMg/(this.soroGlicosado + qntMl) * 1000);
      const key = `${i}`;
      this.resultadoMcgMin[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        quantidadeMg: this.medicamentoMg,
        quantidadeMl: this.medicamentoMl
      }
    } 
  }


  calculoMgKgReverso(){   
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.volume * this.medicamentoMgReverso[i] * this.item.numeroDoses) / (this.peso * this.medicamentoMlReverso[i]);
      const key = `${i}`;
      this.resultadoMgKgReverso[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        quantidadeMg: this.dadosMedicamentos[i].quantidadeMg,
        quantidadeMl: this.dadosMedicamentos[i].quantidadeMl
      }
    }  
  }

  calculoMcgKgReverso(){      
    var qntMg = this.medicamentoMgReverso[0] || this.medicamentoMgReverso
    var qntMl = this.medicamentoMlReverso[0] || this.medicamentoMlReverso
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.vazao * ((qntMg) /(this.soroGlicosadoReverso + qntMl) * 1000)) / (this.peso * 60);
      const key = `${i}`;
      this.resultadoMcgKgReverso[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        quantidadeMg: this.medicamentoMgReverso,
        quantidadeMl: this.medicamentoMlReverso
      }
    }    
  }

  calculoMcgMinReverso(){   
    var qntMg = this.medicamentoMgReverso[0] || this.medicamentoMgReverso
    var qntMl = this.medicamentoMlReverso[0] || this.medicamentoMlReverso
    for (let i = 0; i < this.dadosMedicamentos.length; i++) {
      const resultado = (this.vazao * (qntMg / (this.soroGlicosadoReverso + qntMl) * 1000)) / 60;
      const key = `${i}`;
      this.resultadoMcgMinReverso[key] = {
        resultado: resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
        quantidadeMg: this.medicamentoMgReverso,
        quantidadeMl: this.medicamentoMlReverso     
      }
    }
  }

  calculoSolucaoTotal(){    
    this.solucaoTotal = this.soroGlicosado + parseFloat(this.medicamentoMl);
  }

  calculoSoroGlicosado() {  
    this.soroGlicosado = this.solucaoTotal - parseFloat(this.medicamentoMl);
  }

  calculoSolucaoTotalReverso(){    
      this.solucaoTotalReverso = this.soroGlicosadoReverso + parseFloat(this.medicamentoMlReverso);
   }

   calculoSoroGlicosadoReverso() {    
      this.soroGlicosadoReverso = this.solucaoTotalReverso - parseFloat(this.medicamentoMlReverso);
  }


  calculoClearanceCreatinina(){
    let fatorCorrecao;

    if(this.genero === 'masculino'){
      fatorCorrecao = 1;
      this.clearanceCreatinina = (((140 - this.idade) * this.peso) / (72 * this.creatina)) * fatorCorrecao;
    }else{
      fatorCorrecao = 0.85;
      this.clearanceCreatinina = (((140 - this.idade) * this.peso) / (72 * this.creatina)) * fatorCorrecao;
    }
    console.log(this.clearanceCreatinina)
  } 

  mgKgChanged(ev: any) {
    this.mgKgDia = ev.detail.value;
  }
  mcgKgminChanged(ev: any) {
    this.mcgKgMin = ev.detail.value;
  }
  mcgMinChanged(ev: any) {
    this.mcgMin = ev.detail.value;
  }

  calculoRenalChanged(ev: any){
    this.disfuncaoRenal = ev.detail.value;
  }

  generoChanged(ev: any){
    this.genero = ev.detail.value;
  }

  back(){
    history.back()
  }
}
