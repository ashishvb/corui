export type GetStyledMappedProps<T extends Record<string, any>> = {
  [K in keyof T]: T[K] | Array<T[K]>;
};

export type GetStyledComponentProps<T, U extends Record<string, any>> = {} & T &
  GetStyledMappedProps<U>;
