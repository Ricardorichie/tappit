import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor?: string;
    secondaryColor?: string;
    mutedColorPrimary: string;
    mutedColorSecondary: string;
    background: string;
    foreground: string;
    textColor: string;
    accentPrimary: string;
    accentSecondary: string;
    subtleShadow: string;
  }
}
