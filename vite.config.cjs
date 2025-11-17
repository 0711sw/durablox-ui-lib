// vite.config.cjs
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const { resolve } = require('path');

module.exports = defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'DurabloxUI',
      formats: ['es', 'cjs'],
      fileName: (format) =>
        format === 'es' ? 'index.esm.js' : 'index.cjs'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-i18next', '@headlessui/react', '@heroicons/react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
});