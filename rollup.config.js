const hookPackage = require('./package.json');

export default {
  input: "src/index.js",
  output: [
    {
      file: hookPackage.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: hookPackage.module,
      format: 'esm',
      sourcemap: true
    }
  ],
};