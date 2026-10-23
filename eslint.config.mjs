import next from "eslint-config-next";

// Next 16 removed `next lint`. This is the flat-config equivalent of the
// legacy `.eslintrc` `{ "extends": "next" }` that `next lint` used to apply.
const config = [{ ignores: ["dist/", ".vinext/", ".cloudflare/"] }, ...next];

export default config;
