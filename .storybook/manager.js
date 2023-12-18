import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import logo from '../.storybook/logo-vibes.svg';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'vibes',
    brandImage: logo,
  }),
})
