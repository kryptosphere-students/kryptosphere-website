
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
          // Only split node_modules, keep React core together
          if (id.includes('node_modules')) {
            // Leaflet is heavy and only used by KryptoTour - separate it
            if (id.includes('leaflet')) {
              return 'leaflet-vendor';
            }
            // TanStack Query - separate heavy dependency
            if (id.includes('@tanstack')) {
              return 'query-vendor';
            }
            // Radix UI components - separate UI library
            if (id.includes('@radix-ui')) {
              return 'radix-vendor';
            }
            // Other heavy libraries
            if (id.includes('lucide-react') || id.includes('recharts') || id.includes('sonner')) {
              return 'ui-vendor';
            }
            // Keep React, React DOM, React Router together in main vendor chunk
            // This prevents the createContext error
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  preview: {
    port: 8080,
    host: "::",
  },
}));
