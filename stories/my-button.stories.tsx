import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, CorUIProvider, theme } from '../src';

export default {
  title: 'components/MyText',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Basic: ComponentStory<typeof Text> = args => (
  <CorUIProvider theme={theme}>
    <Text
      fontSize={[65, 76, 87, 89]}
      color={['red', 'green', 'blue', 'yellow']}
      fontWeight="600"
    >
      test
    </Text>
  </CorUIProvider>
);

Basic.args = {};
