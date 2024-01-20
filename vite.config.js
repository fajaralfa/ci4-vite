import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
    build: {
        copyPublicDir: false,
        outDir: 'public/assets',
        assetsDir: '',
        rollupOptions: {
            input: 'frontend/main.js',
            output: {
                entryFileNames: 'main.js',
                assetFileNames: '[name][extname]',
            },
        },
    },
    plugins: [solidPlugin()],
})
