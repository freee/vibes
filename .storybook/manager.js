import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import logo from './logo-vibes.svg';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'vibes',
    brandImage: logo,
  }),
});
