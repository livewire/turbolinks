import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import resolve from "rollup-plugin-node-resolve"
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/index.js',
    output: {
        name: 'LivewireTurbolinks',
        file: 'dist/livewire-turbolinks.js',
        format: 'umd',
    },
    plugins: [
        commonjs(),
        resolve(),
        filesize(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}
