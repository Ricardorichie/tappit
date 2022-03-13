import "styled-components";

interface Fontsize {
  xSmall?: string;
  small: string;
  normal: string;
  medium: string;
  large: string;
  extraLarge?: string;
}

export const mobile: Fontsize = {
  large: "32px",
  medium: "18px",
  small: "12px",
  normal: "16px",
};

export const desktop: Fontsize = {
  extraLarge: "clamp(30px,3.0vw,35px)",
  large: "clamp(25px,2.1vw,30px)",
  medium: "clamp(18px,1.2vw,25px)",
  normal: "clamp(16px,1.04vw,18px)",
  small: "clamp(12px,0.9vw,16px)",
  xSmall: "clamp(10px,0.9vw,12px)",
};

export const defaultFont: Fontsize = {
  extraLarge: "3.2rem",
  large: "2.4rem",
  medium: "1.8rem",
  normal: "1.4rem",
  small: "1rem",
  xSmall: "0.8rem",
};
