import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),viteSingleFile()],
  server:{
    host:"127.0.0.1",
    port:3002
  }
})
