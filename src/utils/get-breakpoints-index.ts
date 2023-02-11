import { IBreakPoints } from '../context';
import _ from 'lodash';

export const getBreakPointIndex = (
  breakpoints: IBreakPoints,
  width: number
) => {
  let index = 0;

  _.find(Object.keys(breakpoints), (_key: keyof IBreakPoints, i) => {
    if (width <= breakpoints[_key]) {
      index = i;
      return true;
    }

    return false;
  });

  return index;
};
