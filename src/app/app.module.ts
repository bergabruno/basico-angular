import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { helloComponent } from './hello/hello.component';
import { CursoAngularComponent } from './curso-angular/curso-angular.component';

import {ClientesModule} from './clientes/clientes.module'

@NgModule({
  declarations: [
    AppComponent,
    helloComponent,
    CursoAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
