import * as React from 'react';
import { Dimensions } from 'react-native';
import { getBreakPointIndex } from '../utils/get-breakpoints-index';
import getComponentStylesAndProps from '../utils/get-component-styles-and-props';
import { useTheme } from './use-theme';

export const useGetStyleAndPropsHook = (props: any) => {
  const theme = useTheme();

  const [measurement, setMeasurement] = React.useState({
    width: Dimensions.get('window')?.width,
    height: Dimensions.get('window')?.height,
  });

  // LISTEN TO CHANGE IN DIMENSIONS
  React.useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setMeasurement({ width: window?.width, height: window?.height });
    });
    return () => subscription?.remove();
  });

  const breakpointIndex = getBreakPointIndex(
    theme?.breakpoints,
    measurement?.width
  );

  const [style, restProps] = getComponentStylesAndProps(
    props,
    breakpointIndex,
    theme
  );

  return [style, restProps];
};
