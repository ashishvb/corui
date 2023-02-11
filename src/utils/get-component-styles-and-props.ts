import { stylesArray, styleColorsArray } from './styles-arrays';
import _ from 'lodash';
import { IColors, IFontFamily, ITheme } from '../context';

const getResponsiveStyleProps = (
  styleProps: Record<string, any | any[]>,
  breakpointIndex: number,
  theme: ITheme
) => {
  let responsiveStyles: any = {};

  _.forEach(Object.keys(styleProps), key => {
    const styles: any | any[] = styleProps[key];
    let value = styles;

    if (styles?.length) {
      if (typeof styles[breakpointIndex] !== 'undefined') {
        value = styles[breakpointIndex];
      } else {
        value = styles[styles.length - 1];
      }
    }

    responsiveStyles[key] = value;
  });

  // Add precedence for inline component styles
  if (responsiveStyles?.style) {
    responsiveStyles = { ...responsiveStyles, ...responsiveStyles?.style };
  }

  // Replace theme tokens
  if (responsiveStyles['fontFamily']) {
    if (responsiveStyles['fontFamily'] in theme.fontFamily) {
      responsiveStyles['fontFamily'] =
        theme.fontFamily[
          (responsiveStyles['fontFamily'] as unknown) as keyof IFontFamily
        ];
    }
  }

  _.forEach(styleColorsArray, _styleAttribute => {
    if (_styleAttribute in responsiveStyles) {
      responsiveStyles[_styleAttribute] = getColor(
        responsiveStyles[_styleAttribute],
        theme?.colors
      );
    }
  });

  return responsiveStyles;
};

const getColor = (_key: string | undefined, _colorsObj: IColors) => {
  if (_key) {
    let color = _key;

    //  eg _key = "burgundy"
    if (_key in _colorsObj) {
      // eg burgundy = "#800020"
      if (typeof _colorsObj[_key] === 'string') {
        color = _colorsObj[_key] as string;
      }

      // eg burgundy  = {}
      if (typeof _colorsObj[_key] === 'object') {
        //@ts-ignore
        color = _colorsObj[_key]['500'] ?? _colorsObj[_key]['0'];
      }
    }

    let [key1, key2] = _key.split('.');

    if (key1 && key2) {
      if (key1 in _colorsObj) {
        let colorPallete: Record<string, string> = _colorsObj[key1] as Record<
          string,
          string
        >;

        if (key2 in colorPallete) {
          color = colorPallete[key2];
        }
      }
    }

    return color;
  }

  return undefined;
};

// Component Prop types = T
export function getComponentStylesAndProps(
  _allProps: Record<string, any>,
  breakpointIndex: number,
  theme: ITheme
) {
  let style: any = {};
  let restProps: any = {};

  Object.keys(_allProps).forEach(key => {
    if (stylesArray.includes(key)) {
      style[key] = _allProps[key];
      return;
    }

    restProps[key] = _allProps[key];
  });

  let responsiveStyles = getResponsiveStyleProps(style, breakpointIndex, theme);

  return [responsiveStyles, restProps];
}
