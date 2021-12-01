import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-db',
  templateUrl: './lista-db.component.html',
  styleUrls: ['./lista-db.component.css']
})
export class ListaDbComponent implements OnInit {

  lista = new Array("Elemento prova");
  inserimento: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  aggiungi(){
    if(this.inserimento!=""){
      this.lista.push(this.inserimento);
    }
  }

  rimuovi(id:number){
    this.lista.splice(id,1);
  }

}
