import { babel } from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import svgr from '@svgr/rollup';

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            },
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            external(),
            resolve(),
            typescript({
                tsconfig: './tsconfig.json',
            }),
            terser(),
            svgr({ icon: true }),
        ],
    },
];
