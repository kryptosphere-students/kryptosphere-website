
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate heavy dependencies into dedicated chunks
          if (id.includes('node_modules')) {
            // React and React DOM together
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            // React Router
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            // Leaflet (used only by KryptoTour)
            if (id.includes('leaflet')) {
              return 'leaflet-vendor';
            }
            // TanStack Query
            if (id.includes('@tanstack')) {
              return 'query-vendor';
            }
            // Other node_modules dependencies
            return 'vendor';
          }
          // Separate KryptoTour into its own chunk (heaviest page)
          if (id.includes('KryptoTour')) {
            return 'kryptotour';
          }
        },
      },
    },
    // Increase chunk size warning limit (optional)
    chunkSizeWarningLimit: 600,
  },
  preview: {
    port: 8080,
    host: "::",
  },
}));
