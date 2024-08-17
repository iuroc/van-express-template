import { defineConfig } from 'vite'
import { serverPort } from '../server/src/config.json'

export default defineConfig({
    server: {
        proxy: {
            '/api': `http://127.0.0.1:${serverPort}`
        }
    }
})