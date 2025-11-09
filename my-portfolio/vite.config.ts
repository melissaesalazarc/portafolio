import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // así sirve para rutas relativas y evita problemas de subcarpeta
});
