import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from '../src';

export default {
  title: 'components/MyText',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Basic: ComponentStory<typeof Text> = args => (
  <Text {...args}>test</Text>
);

Basic.args = {
  fontWeight: '600',
  fontFamily: ['body', 'body'],
  fontSize: [65, 76, 87, 89],
  color: ['red', 'green', 'blue.50', 'pink', 'burgundy'],
};
