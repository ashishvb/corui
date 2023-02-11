import * as React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle as RNTextStyle,
} from 'react-native';
import { GetStyledComponentProps } from '../types/get-styled-props';
import { useGetStyleAndPropsHook } from '../hooks';

export type TextProps = GetStyledComponentProps<RNTextProps, RNTextStyle>;

export const Text = (props: TextProps) => {
  const [style, restProps] = useGetStyleAndPropsHook(props);

  return <RNText style={style} {...restProps} />;
};
