import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

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
  external: ['react', 'react-dom'],
  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    replace({
      preventAssignment: true,
      'process.browser': true,
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
  ]
};