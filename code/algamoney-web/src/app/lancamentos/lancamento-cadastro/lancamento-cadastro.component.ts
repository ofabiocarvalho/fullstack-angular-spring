import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.scss']
})
export class LancamentoCadastroComponent implements OnInit {
  tipos = [
    { label : 'Receita', value: 'RECEITA' },
    { label : 'Despesa', value: 'DESPESA' },
  ];

  categorias = [
    { label : 'Alimentação', value: 1 },
    { label : 'Transporte', value: 2 },
  ];

  pessoas = [
    { label : 'João da Silva', value: 1 },
    { label : 'Sebastião Souza', value: 2 },
    { label : 'Maria Abadia', value: 3 },
  ];

  constructor(
    private route: ActivatedRoute,
    private title: Title,
  ) { }

  ngOnInit() {

    console.log(this.route.snapshot.params['codigo']);
    this.title.setTitle('Novo lançamentos');
  }

}
