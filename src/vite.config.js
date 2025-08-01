import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        tailwindcss(),
        viteReact()
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
});
