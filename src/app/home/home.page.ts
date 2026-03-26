import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { ILivro } from './acervo.interface';
import { IProduto } from './produto.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  livros: ILivro[] = [
  { 
    isbn: "123",
    titulo: "O Ladrão de Estrelas",
    categoria: [{ nome: "Fantasia"}, { nome: "Aventura"}, { nome: "Romance"}]
  },
  {
    isbn: "124",
    titulo: "Ecos do Amanhã",
    categoria: [{ nome: "Ficção Científica"}, { nome: "Distopia"}]
  },
  {
    isbn: "125",
    titulo: "O Mistério da Mansão Hill",
    categoria: [{ nome: "Suspense"}, { nome: "Terror"}]
  },
  {
    isbn: "126",
    titulo: "Caminhos de Areia",
    categoria: [{ nome: "Drama"}, { nome: "Ficção Histórica"}]
  },
  {
    isbn: "127",
    titulo: "A Última Alquimista",
    categoria: [{ nome: "Fantasia"}, { nome: "História"}]
  },
  {
    isbn: "128",
    titulo: "Código de Silêncio",
    categoria: [{ nome: "Policial"}, { nome: "Thriller"}]
  },
  {
    isbn: "129",
    titulo: "O Jardim de Vidro",
    categoria: [{ nome: "Realismo Mágico"}, { nome: "Poesia"}]
  },
  {
    isbn: "130",
    titulo: "Navegantes do Vácuo",
    categoria: [{ nome: "Ficção Científica"}, { nome: "Space Opera"}]
  },
  {
    isbn: "131",
    titulo: "As Crônicas de Aethelgard",
    categoria: [{ nome: "Alta Fantasia"}, { nome: "Épico"}]
  },
  {
    isbn: "132",
    titulo: "Sombras no Asfalto",
    categoria: [{ nome: "Noir"}, { nome: "Crime"}]
  },
  {
    isbn: "133",
    titulo: "O Coração do Relógio",
    categoria: [{ nome: "Steampunk"}, { nome: "Aventura"}]
  },
  {
    isbn: "134",
    titulo: "Memórias de um Outono",
    categoria: [{ nome: "Não-Ficção"}, { nome: "Biografia"}]
  },
  {
    isbn: "135",
    titulo: "A Revolta das Máquinas",
    categoria: [{ nome: "Cyberpunk"}, { nome: "Tecnologia"}]
  },
  {
    isbn: "136",
    titulo: "O Vale das Brumas",
    categoria: [{ nome: "Mistério"}, { nome: "Sobrenatural"}]
  },
  {
    isbn: "137",
    titulo: "Luzes de Paris",
    categoria: [{ nome: "Romance Contemporâneo"}]
  },
  {
    isbn: "138",
    titulo: "O Enigma de Einstein",
    categoria: [{ nome: "Divulgação Científica"}, { nome: "Educação"}]
  },
  {
    isbn: "139",
    titulo: "Fronteiras Invisíveis",
    categoria: [{ nome: "Geopolítica"}, { nome: "Sociologia"}]
  },
  {
    isbn: "140",
    titulo: "A Dança das Espadas",
    categoria: [{ nome: "Fantasia Medieval"}]
  },
  {
    isbn: "141",
    titulo: "O Último Voo do Dragão",
    categoria: [{ nome: "Infantojuvenil"}, { nome: "Fantasia"}]
  },
  {
    isbn: "142",
    titulo: "Culinária de Outros Mundos",
    categoria: [{ nome: "Gastronomia"}, { nome: "Humor"}]
  },
  {
    isbn: "143",
    titulo: "Arquitetura do Caos",
    categoria: [{ nome: "Ensaio"}, { nome: "Filosofia"}]
  }
];

  produtos: IProduto[] = [
    {codigo: "123", nome: "robô aspirador", preco: "2000"},
    {codigo: "124", nome: "smartphone 5G", preco: "3500"},
    {codigo: "125", nome: "notebook gamer", preco: "5500"},
    {codigo: "126", nome: "fone de ouvido bluetooth", preco: "250"},
    {codigo: "127", nome: "monitor 24 polegadas", preco: "900"},
    {codigo: "128", nome: "teclado mecânico", preco: "350"},
    {codigo: "129", nome: "mouse vertical sem fio", preco: "180"},
    {codigo: "130", nome: "smartwatch", preco: "1200"},
    {codigo: "131", nome: "caixa de som portátil", preco: "450"},
    {codigo: "132", nome: "webcam full hd", preco: "300"},
    {codigo: "133", nome: "cadeira de escritório ergonômica", preco: "1100"},
    {codigo: "134", nome: "hd externo 1tb", preco: "400"},
    {codigo: "135", nome: "carregador portátil", preco: "150"},
    {codigo: "136", nome: "microfone condensador", preco: "600"},
    {codigo: "137", nome: "tablet 10 polegadas", preco: "1800"},
    {codigo: "138", nome: "roteador wi-fi 6", preco: "700"},
    {codigo: "139", nome: "impressora multifuncional", preco: "950"},
    {codigo: "140", nome: "suporte para notebook", preco: "80"},
    {codigo: "141", nome: "luminária de mesa inteligente", preco: "220"},
    {codigo: "142", nome: "ssd nvme 500gb", preco: "380"},
    {codigo: "143", nome: "adaptador usb-c multi porta", preco: "130"}
];


}
