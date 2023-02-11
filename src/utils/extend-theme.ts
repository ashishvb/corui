import { ITheme, theme } from '../context';
import _ from 'lodash';

type IPartialTheme<T> = T extends object
  ? {
      [P in keyof T]?: IPartialTheme<T[P]>;
    }
  : T;

export const extendTheme = (_theme: IPartialTheme<ITheme>) => {
  let newTheme = { ...theme };

  _.forEach(Object.keys(newTheme), _property => {
    if (_property in _theme) {
      //@ts-ignore
      let p = _theme[_property];

      //@ts-ignore
      newTheme[_property] = {
        //@ts-ignore
        ...newTheme[_property],
        ...p,
      };
    }
  });

  return newTheme;
};
