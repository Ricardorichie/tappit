import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
  ThemeProps,
} from "styled-components";

interface CustomTheme extends DefaultTheme {}

export const lightTheme: CustomTheme = {
  primaryColor: "#603be8",
  mutedColorPrimary: "#e6e6e6",
  mutedColorSecondary: "#cfcfcf",
  foreground: "#b3b3b3",
  background: "#ffffff",
  textColor: "#000000",
  accentPrimary: "#00cc66",
  accentSecondary: "#ff9999",
  subtleShadow: "0px 0px 4px rgba(222,224,237,0.75)",
};

export const darkTheme: CustomTheme = {
  primaryColor: "#603be8",
  mutedColorPrimary: "#b7bdc4",
  mutedColorSecondary: "#b7bdc4",
  foreground: "#b3b3b3",
  background: "#1a1e23",
  textColor: "#ffffff",
  accentPrimary: "#00cc66",
  accentSecondary: "#ff9999",
  subtleShadow: "0px 0px 4px rgba(222,224,237,0.75)",
};

export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
body {
 background:${(props) => props.theme.background}}
  *{
                transition: background 0.3s ease;
                transition-property: background, color;
    }
`;
