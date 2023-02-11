export type ITheme = {
  breakpoints: IBreakPoints;
};

export type IBreakPoints = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
};

export const breakpoints: IBreakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  '2xl': 1536,
};

export const theme: ITheme = {
  breakpoints: breakpoints,
};
