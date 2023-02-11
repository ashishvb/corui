# CorUI

An mobile first UI library, with easy to add responsive styling via utility props.

### Storybook

Run inside terminal:

```bash
yarn storybook
```

This loads the component stories from `./stories` for testing and reference

### Installation and usage

1. Installing the package and peer dependcies

```
npm install corui
```

2. Wrap your app with the corui provider

```
import { CorUIProvider, theme } from 'corui';

const App = () => {
  return (
    <>
      <CorUIProvider theme={theme}>// your app</CorUIProvider>
    </>
  );
};

```

3. Start using highly responsive corui components

```
import { Text } from 'corui';

export const TextComponent = args => (
  <Text
    fontSize={[65, 76, 87, 89]}
    color={['red', 'green', 'blue.50', 'pink', 'burgundy']}
    fontWeight="600"
    fontFamily={['body', 'body']}
  >
    test
  </Text>
);


```
