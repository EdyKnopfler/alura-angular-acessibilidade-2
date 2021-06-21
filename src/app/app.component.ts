import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from './shared/animations/fade';
import { ModalRef } from './shared/modal/component/modal-ref';
import { ModalService } from './shared/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]  // Animação (atributo [@fade] no template)
})
export class AppComponent implements OnInit {
  title = 'Modal Acessível';

  // Injeta uma instância do template
  @ViewChild('detalhes') detalhesTemplateRef!: TemplateRef<any>;

  modalRef!: ModalRef;
  form!: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false]
    })
  }

  show() {
    this.modalRef = this.modalService.open({
      templateRef: this.detalhesTemplateRef,
      title: 'Detalhes do Usuário'
    });
  }

  submit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
    this.modalRef.close();
  }

}
