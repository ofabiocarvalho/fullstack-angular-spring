import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.scss']
})
export class LancamentosPesquisaComponent implements OnInit {
  lancamentos = [
    { codigo: 1, tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { codigo: 2, tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2017, 5, 10),
      dataPagamento: new Date(2017, 5, 30), valor: 80000, pessoa: 'Atacado Brasil' },
    { codigo: 3, tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2017, 6, 20),
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
    { codigo: 4, tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date(2017, 5, 5),
      dataPagamento: new Date(2017, 4, 30), valor: 800, pessoa: 'Escola Abelha Rainha' },
    { codigo: 5, tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2017, 7, 18),
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
    { codigo: 6, tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2017, 6, 10),
      dataPagamento: new Date(2017, 6, 9), valor: 1750, pessoa: 'Casa Nova Imóveis' },
    { codigo: 7, tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2017, 6, 13),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top' }
  ];

  constructor(
    private title: Title
  ){}

  ngOnInit(){
    this.title.setTitle('Pesquisa de lançamentos');
  }
}
