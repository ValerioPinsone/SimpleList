import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaDbComponent } from '../lista-db/lista-db.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista = new Array();
  lista_export = [{valore_lista: ""}];
  inserimento: string = "";

  constructor(public http: HttpClient,/*private db_comp: ListaDbComponent*/) { }
  
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

  //Aggiungere refresh del componente lista-db
  aggiungiDb(){
    this.lista_export.pop();
    for(let i:number=0; i<this.lista.length; i++){
      
        this.lista_export.push({valore_lista: this.lista[i]});
      
    }
    
    this.http.post<any>("http://localhost:8086/lista/inseriscimultiplo",this.lista_export).subscribe();
    this.lista = [];
    this.ngOnInit();
    
  }

}
