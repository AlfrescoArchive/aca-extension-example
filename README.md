# ACA Extension Example

Provides an Angular workspace setup for Alfresco Content Application (ACA) extensions.

Please also refer to the [Extensibility](https://alfresco.github.io/alfresco-content-app/#/extending/) documentation.

This project contains:

- Blank Angular application
- Simple ACA extension project featuring:
  - Extra application route backed by custom component
  - New side navigation link
- ADF dependencies (Extensions, Core and Content Services)
- Scripts to build, package and publish extension libraries

You can create multiple libraries in the same workspace.

See also:

- **Official article**: [Library support in Angular CLI 6](https://github.com/angular/angular-cli/wiki/stories-create-library#library-support-in-angular-cli-6)
- **Blog**: The Angular Library Series - Creating a Library with the Angular CLI
  - Part 1: https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5
  - Part 2: https://blog.angularindepth.com/creating-a-library-in-angular-6-part-2-6e2bc1e14121

**Important**: you can also create and test extension libraries as part of the ACA project clone.
See: [Redistributable libraries](https://alfresco.github.io/alfresco-content-app/#/extending/redistributable-libraries) article for more details.

## Building

Run the following script to build the library

```sh
npm run build:my-extension
```

## Publishing

```sh
cd dist/my-extension
npm publish --access=public
```

## Testing with local ACA instance

Build and package the extension library locally without publishing to NPM:

```sh
npm run package:my-extension
```

The script produces the `dist/my-extension/my-extension-0.0.1.tgz` file
that can be used to install dependency.

Switch to the ACA project and run:

```sh
npm i <path>/aca-extension-example/dist/my-extension/my-extension-0.0.1.tgz
```

Update the `extensions.module.ts` file and append the module:

```ts
import { MyExtensionModule } from 'my-extension';

@NgModule({
  imports: [
    ...,
    MyExtensionModule
  ]
})
export class AppExtensionsModule {}
```

Update the `app.extensions.json` file and register new plugin:

```json
{
  "$schema": "../../extension.schema.json",
  "$name": "app",
  "$version": "1.0.0",
  "$references": [
    "my-extension.json"
  ],
}
```

Copy `dist/assets/my-extension.json` to the `src/assets/plugins` folder.

Run the ACA application

```sh
npm start
```

Depending on the setup, you might need to log in as an administrator
and enable external plugins feature for your local run.
