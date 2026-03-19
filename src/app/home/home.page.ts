import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { Livro } from './livros.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  livros: Livro[] = [
  {
    isbn: '123',
    titulo: 'O Estranho Misterioso',
    sinopse: 'Um estranho muito misterioso na idade média.',
    data_lancamento: '25/12/1991',
    paginas: '188',
    autor: [{ nome: 'Gui Soares', email: 'guissoares@hotmail.com' }],
    categoria: [{ nome: 'mistério' }],
    editora: { nome: 'Maquinaria', email: 'maquinariaeditora@hotmail.com' }
  },
  {
    isbn: '124',
    titulo: 'Sombras do Amanhã',
    sinopse: 'Uma distopia sobre o controle da mente no futuro.',
    data_lancamento: '10/05/2010',
    paginas: '320',
    autor: [{ nome: 'Ana Clara', email: 'anaclara@editora.com' }],
    categoria: [{ nome: 'Ficção Científica' }],
    editora: { nome: 'Galáxia', email: 'contato@galaxia.com' }
  },
  {
    isbn: '125',
    titulo: 'O Segredo do Vale',
    sinopse: 'Segredos antigos enterrados em uma pequena vila suíça.',
    data_lancamento: '15/08/2015',
    paginas: '245',
    autor: [{ nome: 'Lucas Mendes', email: 'lucas.m@gmail.com' }],
    categoria: [{ nome: 'Suspense' }],
    editora: { nome: 'Horizonte', email: 'sac@horizonte.com.br' }
  },
  {
    isbn: '126',
    titulo: 'Caminhos de Areia',
    sinopse: 'A jornada de um nômade atravessando o deserto do Saara.',
    data_lancamento: '02/02/2005',
    paginas: '210',
    autor: [{ nome: 'Beatriz Silva', email: 'beatriz.s@yahoo.com' }],
    categoria: [{ nome: 'Aventura' }],
    editora: { nome: 'Terra Brasilis', email: 'vendas@terrabrasilis.com' }
  },
  {
    isbn: '127',
    titulo: 'O Código de Praga',
    sinopse: 'Um historiador descobre um manuscrito que pode mudar o mundo.',
    data_lancamento: '20/11/2018',
    paginas: '412',
    autor: [{ nome: 'Ricardo Farias', email: 'ricardo.f@hotmail.com' }],
    categoria: [{ nome: 'Histórico' }, { nome: 'Mistério' }],
    editora: { nome: 'Maquinaria', email: 'maquinariaeditora@hotmail.com' }
  },
  {
    isbn: '128',
    titulo: 'Algoritmos do Amor',
    sinopse: 'Um romance moderno entre dois desenvolvedores de software.',
    data_lancamento: '12/06/2021',
    paginas: '280',
    autor: [{ nome: 'Carla Rocha', email: 'carla.dev@gmail.com' }],
    categoria: [{ nome: 'Romance' }],
    editora: { nome: 'TechBooks', email: 'atendimento@techbooks.com' }
  },
  {
    isbn: '129',
    titulo: 'Noite Infinita',
    sinopse: 'O que acontece quando o sol deixa de brilhar por 48 horas?',
    data_lancamento: '30/10/2022',
    paginas: '350',
    autor: [{ nome: 'Marcos Pontes', email: 'marcos.p@outlook.com' }],
    categoria: [{ nome: 'Terror' }],
    editora: { nome: 'Abismo', email: 'contato@abismoeditora.com' }
  },
  {
    isbn: '130',
    titulo: 'A Última Nota',
    sinopse: 'A biografia de um pianista prodígio que perdeu a audição.',
    data_lancamento: '05/03/2012',
    paginas: '195',
    autor: [{ nome: 'Helena Souza', email: 'helena.s@gmail.com' }],
    categoria: [{ nome: 'Biografia' }],
    editora: { nome: 'Melodia', email: 'suporte@melodia.com' }
  },
  {
    isbn: '131',
    titulo: 'O Voo da Águia',
    sinopse: 'Estratégias de liderança baseadas na natureza.',
    data_lancamento: '18/09/2019',
    paginas: '150',
    autor: [{ nome: 'Jorge Oliveira', email: 'jorge.coach@uol.com.br' }],
    categoria: [{ nome: 'Autoajuda' }],
    editora: { nome: 'Sucesso', email: 'vendas@editorasucesso.com' }
  },
  {
    isbn: '132',
    titulo: 'Planeta Invisível',
    sinopse: 'Uma expedição para um planeta que reflete a luz de forma diferente.',
    data_lancamento: '21/01/2023',
    paginas: '430',
    autor: [{ nome: 'Fabio Lima', email: 'fabio.l@gmail.com' }],
    categoria: [{ nome: 'Ficção Científica' }],
    editora: { nome: 'Cosmos', email: 'info@cosmos.com' }
  },
  {
    isbn: '133',
    titulo: 'Receitas de Vó',
    sinopse: 'Um compilado de segredos culinários de gerações.',
    data_lancamento: '14/05/2017',
    paginas: '120',
    autor: [{ nome: 'Maria Antônia', email: 'maria.vovo@hotmail.com' }],
    categoria: [{ nome: 'Culinária' }],
    editora: { nome: 'Sabor', email: 'receitas@editorasabor.com' }
  }
];

}
