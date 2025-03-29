import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY': JSON.stringify('52qp7ogE1jy09ILe8'),
    'import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID': JSON.stringify('template_o8yl2xd'),
    'import.meta.env.VITE_APP_EMAILJS_SERVICE_ID': JSON.stringify('service_9egt4wc'),
  },
})
