import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
// import eslint from 'vite-plugin-eslint';

const path = require('path');
const reactSvgPlugin = require('vite-plugin-react-svg');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    reactSvgPlugin({
      expandProps: 'start',
      memo: true,
      svgo: true,
    }),
  ],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  server: {
    fs: { strict: false },
  },
});
