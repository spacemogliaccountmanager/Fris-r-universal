import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
export default defineConfig({
    plugins: [react()],
    root: "client",
    publicDir: path.resolve(__dirname, "public"),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "client/src"),
            "@shared": path.resolve(__dirname, "shared"),
        },
    },
    build: {
        outDir: path.resolve(__dirname, "dist/client"),
        emptyOutDir: true,
    },
});
//# sourceMappingURL=vite.config.js.map