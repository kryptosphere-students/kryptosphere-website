
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
            // CRITICAL: Keep React, React DOM, React Router, and React-dependent libs together
            // This prevents createContext errors when chunks load out of order
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router') || id.includes('react-leaflet') || id.includes('leaflet')) {
              return 'vendor';
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
            // All other dependencies go to vendor
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
