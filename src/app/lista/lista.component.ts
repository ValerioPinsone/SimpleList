import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

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
