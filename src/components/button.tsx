import * as React from 'react';
import {
  Pressable,
  PressableProps as RNPressableProps,
  ViewStyle,
} from 'react-native';
import { GetStyledComponentProps } from '../types/get-styled-props';
import { useGetStyleAndPropsHook } from '../hooks';

export type ButtonProps = GetStyledComponentProps<RNPressableProps, ViewStyle>;

export const Button = (props: ButtonProps) => {
  const [style, restProps] = useGetStyleAndPropsHook(props);

  return <Pressable style={style} {...restProps} />;
};
