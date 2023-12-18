import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { commonKnobs } from '../../../stories';
import FilterableDropdownButton from './FilterableDropdownButton';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Button } from '../..';
import { MdAdd } from 'react-icons/md';

export default {
  component: FilterableDropdownButton,
};

export const FilterableDropdownComponent = () => {
  const data = [
    { label: '杏', keywords: ['あんず', 'anzu'] },
    { label: '円', keywords: ['まどか', 'madoka'] },
    { label: '桜', keywords: ['さくら', 'sakura'] },
    { label: '巴', keywords: ['ともえ', 'tomoe'] },
    { label: '焔', keywords: ['ほむら', 'homura'] },
    { label: '渚', keywords: ['なぎさ', 'nagisa'] },
    {
      label: '海鮮助六',
      keywords: ['かいせんすけろく', 'kaisensukeroku', 'さやか', 'sayaka'],
    },
    {
      label: '助六',
      keywords: ['すけろく', 'sukeroku', 'さやか', 'sayaka'],
    },
  ];
  const [status, setStatus] = React.useState<boolean[]>(
    Array(data.length).fill(false)
  );

  return (
    <FilterableDropdownButton
      buttonLabel={text(
        'buttonLabel',
        '開閉ボタン',
        'FilterableDropdownButton'
      )}
      appearance={
        select(
          'appearance',
          {
            primary: 'primary',
            secondary: 'secondary',
            tertiary: 'tertiary',
            undefined: '',
          },
          '',
          'FilterableDropdownButton'
        ) || undefined
      }
      iconOnly={boolean('iconOnly', false, 'FilterableDropdownButton')}
      disabled={boolean('disabled', false, 'FilterableDropdownButton')}
      small={boolean('small', false, 'FilterableDropdownButton')}
      large={boolean('large', false, 'FilterableDropdownButton')}
      dropdownContents={data.map((d, i) => ({
        type: 'checkbox',
        text: d.label,
        keywords: d.keywords,
        checked: status[i],
        onChange: (e) => {
          const newStatus = [...status];
          newStatus[i] = e.target.checked;
          setStatus(newStatus);
        },
      }))}
      onFilterChange={action('onFilterChange')}
      onOpen={action('onOpen')}
      iconPosition={
        select(
          'iconPosition',
          { left: 'left', right: 'right', undefined: '' },
          '',
          'FilterableDropdownButton'
        ) || undefined
      }
      {...commonKnobs()}
    ></FilterableDropdownButton>
  );
};

export const FilterableMenu = () => {
  const data = [
    { label: '杏', keywords: ['あんず', 'anzu'] },
    { label: '円', keywords: ['まどか', 'madoka'] },
    { label: '桜', keywords: ['さくら', 'sakura'] },
    { label: '巴', keywords: ['ともえ', 'tomoe'] },
    { label: '焔', keywords: ['ほむら', 'homura'] },
    { label: '渚', keywords: ['なぎさ', 'nagisa'] },
    {
      label: '海鮮助六',
      keywords: ['かいせんすけろく', 'kaisensukeroku', 'さやか', 'sayaka'],
    },
    {
      label: '助六',
      keywords: ['すけろく', 'sukeroku', 'さやか', 'sayaka'],
    },
  ];
  return (
    <FilterableDropdownButton
      buttonLabel={text(
        'buttonLabel',
        '開閉ボタン',
        'FilterableDropdownButton'
      )}
      appearance={
        select(
          'appearance',
          {
            primary: 'primary',
            secondary: 'secondary',
            tertiary: 'tertiary',
            undefined: '',
          },
          '',
          'FilterableDropdownButton'
        ) || undefined
      }
      iconOnly={boolean('iconOnly', false, 'FilterableDropdownButton')}
      disabled={boolean('disabled', false, 'FilterableDropdownButton')}
      small={boolean('small', false, 'FilterableDropdownButton')}
      dropdownContents={data.map((d) => ({
        type: 'selectable',
        text: d.label,
        keywords: d.keywords,
        onClick: action(`click menu ${d.label}`),
      }))}
      onFilterChange={action('onFilterChange')}
      onOpen={action('onOpen')}
      iconPosition={
        select(
          'iconPosition',
          { left: 'left', right: 'right', undefined: '' },
          '',
          'FilterableDropdownButton'
        ) || undefined
      }
      {...commonKnobs()}
    ></FilterableDropdownButton>
  );
};

export const WithFixedItems = () => {
  const data = [
    { label: '杏', keywords: ['あんず', 'anzu'] },
    { label: '円', keywords: ['まどか', 'madoka'] },
    { label: '桜', keywords: ['さくら', 'sakura'] },
    { label: '巴', keywords: ['ともえ', 'tomoe'] },
    { label: '焔', keywords: ['ほむら', 'homura'] },
    { label: '渚', keywords: ['なぎさ', 'nagisa'] },
    {
      label: '海鮮助六',
      keywords: ['かいせんすけろく', 'kaisensukeroku', 'さやか', 'sayaka'],
    },
    {
      label: '助六',
      keywords: ['すけろく', 'sukeroku', 'さやか', 'sayaka'],
    },
  ];
  const [status, setStatus] = React.useState<boolean[]>(
    Array(data.length).fill(false)
  );

  return (
    <FilterableDropdownButton
      buttonLabel={text(
        'buttonLabel',
        '開閉ボタン',
        'FilterableDropdownButton'
      )}
      appearance={
        select(
          'appearance',
          {
            primary: 'primary',
            secondary: 'secondary',
            tertiary: 'tertiary',
            undefined: '',
          },
          '',
          'FilterableDropdownButton'
        ) || undefined
      }
      iconOnly={boolean('iconOnly', false, 'FilterableDropdownButton')}
      disabled={boolean('disabled', false, 'FilterableDropdownButton')}
      small={boolean('small', false, 'FilterableDropdownButton')}
      large={boolean('large', false, 'FilterableDropdownButton')}
      dropdownContents={data.map((d, i) => ({
        type: 'checkbox',
        text: d.label,
        keywords: d.keywords,
        checked: status[i],
        onChange: (e) => {
          const newStatus = [...status];
          newStatus[i] = e.target.checked;
          setStatus(newStatus);
        },
      }))}
      onFilterChange={action('onFilterChange')}
      onOpen={action('onOpen')}
      iconPosition={
        select(
          'iconPosition',
          { left: 'left', right: 'right', undefined: '' },
          '',
          'FilterableDropdownButton'
        ) || undefined
      }
      fixedItems={[
        {
          onSelect: () => {
            // no-op
          },
          isVisible: () => true,
          label: 'もっと見る',
          disableOnRequestClose: true,
        },
        {
          onSelect: () => {
            // no-op
          },
          isVisible: () => true,
          label: (value) => `${value}を新規登録`,
        },
        {
          onSelect: () => {
            // no-op
          },
          isVisible: (value) => !value,
          label: 'valueが空の時だけ表示',
        },
      ]}
      {...commonKnobs()}
    ></FilterableDropdownButton>
  );
};

export const WithNoItems = () => {
  const data: any[] = [];
  const [status, setStatus] = React.useState<boolean[]>(
    Array(data.length).fill(false)
  );

  return (
    <FilterableDropdownButton
      buttonLabel={text(
        'buttonLabel',
        '開閉ボタン',
        'FilterableDropdownButton'
      )}
      appearance={
        select(
          'appearance',
          {
            primary: 'primary',
            secondary: 'secondary',
            tertiary: 'tertiary',
            undefined: '',
          },
          '',
          'FilterableDropdownButton'
        ) || undefined
      }
      iconOnly={boolean('iconOnly', false, 'FilterableDropdownButton')}
      disabled={boolean('disabled', false, 'FilterableDropdownButton')}
      small={boolean('small', false, 'FilterableDropdownButton')}
      large={boolean('large', false, 'FilterableDropdownButton')}
      dropdownContents={data.map((d, i) => ({
        type: 'checkbox',
        text: d.label,
        keywords: d.keywords,
        checked: status[i],
        onChange: (e) => {
          const newStatus = [...status];
          newStatus[i] = e.target.checked;
          setStatus(newStatus);
        },
      }))}
      onFilterChange={action('onFilterChange')}
      onOpen={action('onOpen')}
      iconPosition={
        select(
          'iconPosition',
          { left: 'left', right: 'right', undefined: '' },
          '',
          'FilterableDropdownButton'
        ) || undefined
      }
      {...commonKnobs()}
    ></FilterableDropdownButton>
  );
};

export const WithDropdownBottomContent = () => {
  const data = [
    { label: '杏', keywords: ['あんず', 'anzu'] },
    { label: '円', keywords: ['まどか', 'madoka'] },
    { label: '桜', keywords: ['さくら', 'sakura'] },
    { label: '巴', keywords: ['ともえ', 'tomoe'] },
    { label: '焔', keywords: ['ほむら', 'homura'] },
    { label: '渚', keywords: ['なぎさ', 'nagisa'] },
    {
      label: '海鮮助六',
      keywords: ['かいせんすけろく', 'kaisensukeroku', 'さやか', 'sayaka'],
    },
    {
      label: '助六',
      keywords: ['すけろく', 'sukeroku', 'さやか', 'sayaka'],
    },
  ];
  const [status, setStatus] = React.useState<boolean[]>(
    Array(data.length).fill(false)
  );

  return (
    <FilterableDropdownButton
      buttonLabel={text(
        'buttonLabel',
        '開閉ボタン',
        'FilterableDropdownButton'
      )}
      appearance={
        select(
          'appearance',
          {
            primary: 'primary',
            secondary: 'secondary',
            tertiary: 'tertiary',
            undefined: '',
          },
          '',
          'FilterableDropdownButton'
        ) || undefined
      }
      iconOnly={boolean('iconOnly', false, 'FilterableDropdownButton')}
      disabled={boolean('disabled', false, 'FilterableDropdownButton')}
      small={boolean('small', false, 'FilterableDropdownButton')}
      large={boolean('large', false, 'FilterableDropdownButton')}
      dropdownContents={data.map((d, i) => ({
        type: 'checkbox',
        text: d.label,
        keywords: d.keywords,
        checked: status[i],
        onChange: (e) => {
          const newStatus = [...status];
          newStatus[i] = e.target.checked;
          setStatus(newStatus);
        },
      }))}
      renderDropdownBottomContent={(requestClose) => (
        <Button
          type="button"
          appearance="tertiary"
          iconPosition="left"
          IconComponent={MdAdd}
          onClick={() => requestClose()}
          mr={1}
        >
          取引先を追加
        </Button>
      )}
      onFilterChange={action('onFilterChange')}
      onOpen={action('onOpen')}
      iconPosition={
        select(
          'iconPosition',
          { left: 'left', right: 'right', undefined: '' },
          '',
          'FilterableDropdownButton'
        ) || undefined
      }
      {...commonKnobs()}
    ></FilterableDropdownButton>
  );
};
