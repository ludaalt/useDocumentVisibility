const hookPackage = require('./package.json');

export default {
  input: "src/index.js",
  output: [
    {
      file: hookPackage.main,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: hookPackage.module,
      format: 'es',
      sourcemap: true
    }
  ],
};