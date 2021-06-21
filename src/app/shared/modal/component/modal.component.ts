import { ModalRef } from './modal-ref';
import { Component, HostBinding, OnInit } from '@angular/core';
import { fade } from '../../animations/fade';
import { ModalConfig } from '../modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]  // Ver shared/animations/fade.ts
})
export class ModalComponent implements OnInit {

  config!: ModalConfig;
  modalRef!: ModalRef;

  // Definindo o atributo @fade no elemento host do comopnente
  // @ = atributos de animação
  @HostBinding('@fade') fade = true;

  constructor() { }

  ngOnInit(): void {
  }

  overlayClick(event: any) {
    // Os cliques nos elementos filhos do overlay também disparam o click
    // Alternativas:
    // - definir um (click) no modal-content e fazer event.stopPropagation()
    // - ler o target se é o próprio overlay
    if (event.target.className.indexOf('modal-overlay') >= 0) {
      this.modalRef.close();
    }
  }

}
