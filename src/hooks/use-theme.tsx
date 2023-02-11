import * as React from 'react';
import { CorUIContext, theme } from '../context';

export const useTheme = () => {
  const ctx = React.useContext(CorUIContext);

  return ctx?.theme ?? theme;
};
