import { BodyInjectorService } from './../body-injector/body-injector.service';
import { ModalComponent } from './component/modal.component';
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { ModalConfig } from './modal.interface';
import { ModalRef } from './component/modal-ref';

// Não está disponível no "root" e sim no módulo (ver modal.module.ts)
@Injectable()
export class ModalService {

  private factory: ComponentFactory<ModalComponent>;

  // ComponentFactoryResolver: permite a criação dinâmica de componentes
  // Burocrático mas vira receitinha de bolo
  constructor(
    resolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
  ) {
    this.factory = resolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    console.log('chamado open()');
    const componentRef: ComponentRef<ModalComponent> = this.factory.create(this.injector);
    componentRef.instance.config = config;
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    return new ModalRef(componentRef);
  }

}

