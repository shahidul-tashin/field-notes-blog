import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change "field-notes-blog" below to match your GitHub repo name.
// If your repo is named e.g. "my-blog", base should be "/my-blog/".
export default defineConfig({
  plugins: [react()],
  
  base: "/field-notes-blog/",
});
