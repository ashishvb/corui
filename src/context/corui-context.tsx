import * as React from 'react';
import { ITheme } from './theme';

type ICorUIContext = {
  theme: ITheme;
};

const CorUIContext = React.createContext(({} as unknown) as ICorUIContext);

const CorUIConsumer = CorUIContext.Consumer;

type ICorUIProviderProps = {
  children: React.ReactNode;
  theme: ITheme;
};

const CorUIProvider = ({ children, theme }: ICorUIProviderProps) => {
  return (
    <>
      <CorUIContext.Provider value={{ theme: theme }}>
        {children}
      </CorUIContext.Provider>
    </>
  );
};

export { ICorUIProviderProps, CorUIProvider, CorUIConsumer, CorUIContext };
