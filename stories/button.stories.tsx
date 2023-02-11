import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, Text } from '../src';

export default {
  title: 'components/MyButton',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => (
  <Button
    alignItems="center"
    justifyContent="center"
    paddingVertical={12}
    paddingHorizontal={32}
    borderRadius={4}
    elevation={2}
    backgroundColor={['blue', 'green', 'red']}
    maxWidth={150}
  >
    <Text color={'white'} textAlign="center">
      test Button
    </Text>
  </Button>
);

Basic.args = {};
