import { NgModule } from '@angular/core';
import { ExtensionService, ExtensionsModule } from '@alfresco/adf-extensions';

import { MyExtensionComponent } from './my-extension.component';

@NgModule({
  imports: [ExtensionsModule],
  declarations: [MyExtensionComponent],
  exports: [MyExtensionComponent],
  entryComponents: [MyExtensionComponent]
})
export class MyExtensionModule {
  constructor(extensions: ExtensionService) {
    extensions.setComponents({
      'my-extension.main.component': MyExtensionComponent
    });
  }
}
