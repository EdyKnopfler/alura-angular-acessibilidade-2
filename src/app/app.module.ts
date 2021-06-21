import { ModalModule } from './shared/modal/modal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Para suportar este módulo em browsers antigos:
    // descomentar o import do web-animations-js no polyfills.js e instalar o pacote indicado
    BrowserAnimationsModule,

    ModalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
