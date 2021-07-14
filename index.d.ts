import { DefaultTheme } from "@renderlesskit/react-tailwind/src/theme";
import theme from "./renderlesskit.config";

type UserTheme = typeof theme.extend;

declare global {
  namespace Renderlesskit {
    interface Theme {
      components: MergeTheme<DefaultTheme, UserTheme>;
    }
  }
}
