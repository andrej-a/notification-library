import { babel } from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import svgr from '@svgr/rollup';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';

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
            url({
                include: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.eot'],
                limit: Infinity,
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            external(['styled-components']),
            resolve({
                extensions: ['.mjs', '.js', '.json', '.node', '.jsx'],
            }),
            commonjs(),
            postcss(),
            typescript({
                tsconfig: './tsconfig.json',
            }),
            terser(),
            svgr({ icon: true }),
        ],
    },
];
