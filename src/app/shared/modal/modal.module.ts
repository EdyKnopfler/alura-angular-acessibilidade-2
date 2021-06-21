import { DirectivesModule } from '../directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal.service';
import { ModalComponent } from './component/modal.component';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    // Não preciso exportar pois é criado dinamicamente, internamente ao módulo
  ],
  providers: [
    // Dando acesso ao service a quem importar o módulo
    ModalService
  ]
})
export class ModalModule { }
