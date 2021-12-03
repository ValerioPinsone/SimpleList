import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from '../models/lista.model';

@Component({
  selector: 'app-lista-db',
  templateUrl: './lista-db.component.html',
  styleUrls: ['./lista-db.component.css']
})
export class ListaDbComponent implements OnInit {

  loading: boolean = false;
  lista_obj: Lista[] = new Array();
  lista = new Array("Elemento prova");
  inserimento: string = "";
  
  constructor(public http: HttpClient) { }

  ngOnInit(): void {

    this.caricaLista();
  }

  aggiungi(){
    if(this.inserimento!=""){
      this.lista.push(this.inserimento);
    }
  }

  rimuovi(id:number){
    this.loading = true;
    this.http.delete("http://localhost:8086/lista/elimina/"+id).subscribe(() => this.loading = false);
  }

  caricaLista(): void{
    this.loading = true;
    this.http.get<Lista[]>("http://localhost:8086/lista").subscribe(res=> {
      //console.log(res);
      this.lista_obj = res;
      
    });

    this.loading = false;
  }


}
