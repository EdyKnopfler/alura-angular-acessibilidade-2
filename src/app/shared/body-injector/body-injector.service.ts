import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable } from '@angular/core';

// Acesso ao elemento body para inserir o modal (ou qualquer outra coisa)
// como o primeiro elemento da página

@Injectable({
  providedIn: 'root'
})
export class BodyInjectorService {

  constructor(private appRef: ApplicationRef) { }

  public stackBeforeAppRoot(componentRef: ComponentRef<any>) {
    const domElement = this.createDomElement(componentRef);
    const appRoot = document.body.querySelector('app-root');
    document.body.insertBefore(domElement, appRoot);
  }

  private createDomElement(componentRef: ComponentRef<any>): HTMLElement {
    // hostView = template associado ao componente (o seu .html) (tipo genérico)
    // EmbeddedViewRef = implementação
    this.appRef.attachView(componentRef.hostView);
    const domElement = componentRef.hostView as EmbeddedViewRef<any>;
    return  domElement.rootNodes[0] as HTMLElement;
  }

}
