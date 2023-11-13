# Sass File Generation Package

This package provides a function to generate Sass files based on specific options.

## Installation

```bash
npm install mart-obj-to-sass
```

## Usage

```ts
import { writeSassFiles } from "my-sass-generator-package";
import { choices } from "my-core-tokens-package";

const folder = "./packages/core/sass/setting";
writeSassFiles(choices, folder, false);
```

The **'writeSassFiles'** function takes an options object and creates Sass files in a specific folder, and options three is for importing the files created by this function

## Contributions

Contributions are welcome. If you encounter a bug or have any improvement suggestions, please open an issue or submit a pull request.

**GitHub:** [Mart-obj-to-sass](https://github.com/jefferson-lopez-dev/mart-ui.git)

## License

This package is under the MIT License.
