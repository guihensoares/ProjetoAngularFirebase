import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  projeto: any = [
    { descricao: "Tomar banho", local: "casa", hora_inicio: "19:00", hora_termino: "22:53", status: "em espera" },
    { descricao: "Beber agua", local: "escola", hora_inicio: "14:40", hora_termino: "17:03", status: "concluido" },
    { descricao: "Comer pão", local: "casa", hora_inicio: "08:20", hora_termino: "15:10", status: "concluido" },
    { descricao: "Ir para casa", local: "ônibus", hora_inicio: "18:25", hora_termino: "00:10", status: "em progresso" },
  ];

}
