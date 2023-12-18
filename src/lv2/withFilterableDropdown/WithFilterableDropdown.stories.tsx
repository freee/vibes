import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import WithFilterableDropdown from './WithFilterableDropdown';
import { Button } from '../..';
import { MdAdd } from 'react-icons/md';

export default {
  component: WithFilterableDropdown,
};

export const WithDropdownComponent = () => {
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

  const disabled = boolean('disabled', false, 'WithFilterableDropdown');
  return (
    <WithFilterableDropdown
      disabled={disabled}
      isLoading={boolean('isLoading', false, 'WithFilterableDropdown')}
      {...commonKnobs()}
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
      render={(dropdownId, isOpen, buttonRef, togglePopup) => (
        <span
          // 例として、<span> で実装した例を載せています。
          // あくまでメニューの開閉ボタンはボタンであり、本来<button>で実装されるべきことに注意してください。
          role="button"
          // キーボード操作が可能になるよう、フォーカス可能にする
          tabIndex={0}
          // <span>ではクリックイベントが発火しないため、Enterキー押下時にtogglePopupする
          onKeyDown={(e) => e.key === 'Enter' && togglePopup(!isOpen)}
          // <span> なのでaria-disabledを使用しています。
          // <button> で実装する場合は、WithFilterableDropdownに渡すのと同じ条件をボタンのdisabledにも渡してください
          aria-disabled={disabled}
          aria-controls={dropdownId}
          aria-haspopup={true}
          aria-expanded={isOpen}
          ref={buttonRef as React.RefObject<HTMLButtonElement>}
        >
          開閉ボタン
        </span>
      )}
    ></WithFilterableDropdown>
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
  const disabled = boolean('disabled', false, 'WithFilterableDropdown');
  return (
    <WithFilterableDropdown
      disabled={disabled}
      {...commonKnobs()}
      dropdownContents={data.map((d) => ({
        type: 'selectable',
        text: d.label,
        keywords: d.keywords,
        onClick: action(`click menu ${d.label}`),
      }))}
      onFilterChange={action('onFilterChange')}
      onOpen={action('onOpen')}
      render={(dropdownId, isOpen, buttonRef, togglePopup) => (
        <span
          // 例として、<span> で実装した例を載せています。
          // あくまでメニューの開閉ボタンはボタンであり、本来<button>で実装されるべきことに注意してください。
          role="button"
          // キーボード操作が可能になるよう、フォーカス可能にする
          tabIndex={0}
          // <span>ではクリックイベントが発火しないため、Enterキー押下時にtogglePopupする
          onKeyDown={(e) => e.key === 'Enter' && togglePopup(!isOpen)}
          // <span> なのでaria-disabledを使用しています。
          // <button> で実装する場合は、WithFilterableDropdownに渡すのと同じ条件をボタンのdisabledにも渡してください
          aria-disabled={disabled}
          aria-controls={dropdownId}
          aria-haspopup={true}
          aria-expanded={isOpen}
          ref={buttonRef as React.RefObject<HTMLButtonElement>}
        >
          開閉ボタン
        </span>
      )}
    ></WithFilterableDropdown>
  );
};

export const WithFixedItems = () => {
  const data = [{ label: '杏', keywords: ['あんず', 'anzu'] }];
  const [status, setStatus] = React.useState<boolean[]>(
    Array(data.length).fill(false)
  );

  const disabled = boolean('disabled', false, 'WithFilterableDropdown');
  return (
    <WithFilterableDropdown
      disabled={disabled}
      isLoading={boolean('isLoading', false, 'WithFilterableDropdown')}
      {...commonKnobs()}
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
      render={(dropdownId, isOpen, buttonRef, togglePopup) => (
        <span
          // 例として、<span> で実装した例を載せています。
          // あくまでメニューの開閉ボタンはボタンであり、本来<button>で実装されるべきことに注意してください。
          role="button"
          // キーボード操作が可能になるよう、フォーカス可能にする
          tabIndex={0}
          // <span>ではクリックイベントが発火しないため、Enterキー押下時にtogglePopupする
          onKeyDown={(e) => e.key === 'Enter' && togglePopup(!isOpen)}
          // <span> なのでaria-disabledを使用しています。
          // <button> で実装する場合は、WithFilterableDropdownに渡すのと同じ条件をボタンのdisabledにも渡してください
          aria-disabled={disabled}
          aria-controls={dropdownId}
          aria-haspopup={true}
          aria-expanded={isOpen}
          ref={buttonRef as React.RefObject<HTMLButtonElement>}
        >
          開閉ボタン
        </span>
      )}
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
    ></WithFilterableDropdown>
  );
};

export const WithNoItems = () => {
  const data: any[] = [];
  const disabled = boolean('disabled', false, 'WithFilterableDropdown');
  return (
    <WithFilterableDropdown
      disabled={disabled}
      {...commonKnobs()}
      dropdownContents={data.map((d) => ({
        type: 'selectable',
        text: d.label,
        keywords: d.keywords,
        onClick: action(`click menu ${d.label}`),
      }))}
      onFilterChange={action('onFilterChange')}
      onOpen={action('onOpen')}
      render={(dropdownId, isOpen, buttonRef, togglePopup) => (
        <span
          // 例として、<span> で実装した例を載せています。
          // あくまでメニューの開閉ボタンはボタンであり、本来<button>で実装されるべきことに注意してください。
          role="button"
          // キーボード操作が可能になるよう、フォーカス可能にする
          tabIndex={0}
          // <span>ではクリックイベントが発火しないため、Enterキー押下時にtogglePopupする
          onKeyDown={(e) => e.key === 'Enter' && togglePopup(!isOpen)}
          // <span> なのでaria-disabledを使用しています。
          // <button> で実装する場合は、WithFilterableDropdownに渡すのと同じ条件をボタンのdisabledにも渡してください
          aria-disabled={disabled}
          aria-controls={dropdownId}
          aria-haspopup={true}
          aria-expanded={isOpen}
          ref={buttonRef as React.RefObject<HTMLButtonElement>}
        >
          開閉ボタン
        </span>
      )}
    ></WithFilterableDropdown>
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

  const disabled = boolean('disabled', false, 'WithFilterableDropdown');
  return (
    <WithFilterableDropdown
      disabled={disabled}
      isLoading={boolean('isLoading', false, 'WithFilterableDropdown')}
      {...commonKnobs()}
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
      render={(dropdownId, isOpen, buttonRef, togglePopup) => (
        <span
          // 例として、<span> で実装した例を載せています。
          // あくまでメニューの開閉ボタンはボタンであり、本来<button>で実装されるべきことに注意してください。
          role="button"
          // キーボード操作が可能になるよう、フォーカス可能にする
          tabIndex={0}
          // <span>ではクリックイベントが発火しないため、Enterキー押下時にtogglePopupする
          onKeyDown={(e) => e.key === 'Enter' && togglePopup(!isOpen)}
          // <span> なのでaria-disabledを使用しています。
          // <button> で実装する場合は、WithFilterableDropdownに渡すのと同じ条件をボタンのdisabledにも渡してください
          aria-disabled={disabled}
          aria-controls={dropdownId}
          aria-haspopup={true}
          aria-expanded={isOpen}
          ref={buttonRef as React.RefObject<HTMLButtonElement>}
        >
          開閉ボタン
        </span>
      )}
    ></WithFilterableDropdown>
  );
};
