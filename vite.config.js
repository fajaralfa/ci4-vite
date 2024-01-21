import { defineConfig } from 'vite'

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
    plugins: [],
})
