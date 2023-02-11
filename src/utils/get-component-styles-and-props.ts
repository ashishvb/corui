import { stylesArray } from './styles-arrays';
import _ from 'lodash';

const getResponsiveStyleProps = (
  styleProps: Record<string, any | any[]>,
  breakpointIndex: number
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
  return responsiveStyles;
};

// Component Prop types = T
export default function getComponentStylesAndProps(
  _allProps: Record<string, any>,
  breakpointIndex: number
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

  const responsiveStyles = getResponsiveStyleProps(style, breakpointIndex);

  return [responsiveStyles, restProps];
}
