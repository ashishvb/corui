import { IBreakPoints } from '../context';
import _ from 'lodash';

export const getBreakPointIndex = (
  breakpoints: IBreakPoints,
  width: number
) => {
  let index = 0;

  console.log('WIDTH', width);

  _.find(Object.keys(breakpoints), (_key: keyof IBreakPoints, i) => {
    if (width <= breakpoints[_key]) {
      console.log({
        bkT: _key,
        bkvalue: breakpoints[_key],
        width: width,
      });
      index = i;
      return true;
    }

    return false;
  });

  return index;
};
