import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(({ mode }) => {
  const { VITE_URL_API_BASE, VITE_SHOPIFY_VERSION } = loadEnv(mode, process.cwd(), "")

  return {
    resolve: {
      alias: {
        src: "/src",
      },
    },
    plugins: [react(), tsconfigPaths()],
    test: {
      environment: "jsdom",
      setupFiles: ["./src/tests/setup.ts"],
      testMatch: ["./src/tests/**/*.test.tsx"],
      globals: true,
    },
    server: {
      proxy: {
        [VITE_SHOPIFY_VERSION]: {
          target: VITE_URL_API_BASE,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
