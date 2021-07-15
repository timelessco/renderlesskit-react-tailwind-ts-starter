import React from "react";
import { RenderlesskitProvider } from "@renderlesskit/react-tailwind";

import "./index.css";

export default function Nextra({ Component, pageProps }) {
  return (
    <RenderlesskitProvider>
      <Component {...pageProps} />
    </RenderlesskitProvider>
  );
}
