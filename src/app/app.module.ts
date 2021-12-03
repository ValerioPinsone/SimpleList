import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';


//Material
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListaComponent } from './lista/lista.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ListaDbComponent } from './lista-db/lista-db.component';
import {MatGridListModule} from '@angular/material/grid-list';



//http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaDbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule
  ],
  exports:[ ListaDbComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
