import { ComponentRef } from "@angular/core";
import { ModalComponent } from "./modal.component";

export class ModalRef {

  constructor(private componentRef: ComponentRef<ModalComponent>) {
    componentRef.instance.modalRef = this;
  }

  public close() {
    console.log('chamado close()');
    this.componentRef.destroy();
  }

}
