import { defineConfig, type Plugin } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { staticAssetsAdapter } from "@vinext/cloudflare/cache/static-assets-adapter";

// In dev, Vite pre-bundles `next/document` for the server, which gives the
// custom Document its own copy of vinext's placeholder context. The renderer
// then can't splice in the page or scripts, so pages render outside <html>
// with no CSS and no hydration. Keep it out of the server dep optimizer.
function unbundledNextDocument(): Plugin {
  return {
    name: "unbundled-next-document",
    configEnvironment(name) {
      if (name === "client") return;
      return { optimizeDeps: { exclude: ["next/document"] } };
    },
  };
}

export default defineConfig({
  plugins: [
    unbundledNextDocument(),
    vinext({
      cache: { cdn: staticAssetsAdapter() },
    }),
    cloudflare(),
  ],
});
