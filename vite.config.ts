import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { localPatientApi } from './localPatientApi.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localPatientApi()],
})
