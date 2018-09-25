import { NgModule } from '@angular/core';
import { ExtensionService } from '@alfresco/adf-extensions';

import { MyExtensionComponent } from './my-extension.component';

@NgModule({
  imports: [],
  declarations: [MyExtensionComponent],
  exports: [MyExtensionComponent]
})
export class MyExtensionModule {
  constructor(extensions: ExtensionService) {
    extensions.setComponents({
      'my-extension.main.component': MyExtensionComponent
    });
  }
}
