import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import Breadcrumbs from './Breadcrumbs';

export default {
  component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof Breadcrumbs>;

export const Basic: Story = {
  args: {
    links: [
      {
        title: 'ホーム',
        url: '/',
        onSelfWindowNavigation: fn(),
      },
      {
        title: '一覧',
        url: '/',
        onSelfWindowNavigation: fn(),
      },
      {
        title: '一覧2',
        onClick: fn(),
      },
      {
        title: '詳細',
      },
    ],
    label: 'パンくずリスト',
  },
};

export const Interaction: Story = {
  ...Basic,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const breadcrumb = canvas.getByRole('navigation');
    const links = canvas.getAllByRole('link');
    const buttons = canvas.getAllByRole('button');
    const current = canvas.getByText('詳細');

    expect(breadcrumb).toBeInTheDocument();
    expect(links).toHaveLength(2);
    expect(buttons).toHaveLength(1);
    expect(current).toBeInTheDocument();

    expect(links[0]).toHaveTextContent('ホーム');
    expect(links[1]).toHaveTextContent('一覧');
    expect(buttons[0]).toHaveTextContent('一覧2');

    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[1]).toHaveAttribute('href', '/');
    expect(buttons[0]).not.toHaveAttribute('href');
    expect(current).not.toHaveAttribute('href');

    expect(links[0]).not.toHaveAttribute('aria-current');
    expect(links[1]).not.toHaveAttribute('aria-current');
    expect(buttons[0]).not.toHaveAttribute('aria-current');
    expect(current).toHaveAttribute('aria-current', 'page');

    await userEvent.click(links[0]);
    expect(args.links[0].onSelfWindowNavigation).toHaveBeenCalled();

    await userEvent.click(links[1]);
    expect(args.links[1].onSelfWindowNavigation).toHaveBeenCalled();

    await userEvent.click(buttons[0]);
    expect(args.links[2].onClick).toHaveBeenCalled();
  },
};

export const WithLoadingElement: Story = {
  args: {
    links: [
      {
        title: '口座一覧',
        url: '/',
        onSelfWindowNavigation: fn(),
      },
      {
        title: '口座名',
        url: '/',
        onSelfWindowNavigation: fn(),
        loading: true,
      },
      {
        title: '科目一覧',
        onClick: fn(),
      },
      {
        title: '科目名',
        loading: true,
      },
    ],
    label: 'パンくずリスト',
  },
};
