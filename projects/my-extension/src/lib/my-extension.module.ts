import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule } from '@alfresco/adf-core';
import { ExtensionService, ExtensionsModule } from '@alfresco/adf-extensions';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyExtensionComponent } from './my-extension.component';

@NgModule({
  imports: [
    ExtensionsModule,
    FlexLayoutModule,
    CoreModule.forChild(),
    ContentModule.forChild()
  ],
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
