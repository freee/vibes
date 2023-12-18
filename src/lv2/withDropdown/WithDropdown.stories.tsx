import * as React from 'react';

import { action } from '@storybook/addon-actions';
import WithDropdown from './WithDropdown';
import { boolean } from '@storybook/addon-knobs';

export default {
  component: WithDropdown,
};

export const WithDropdownComponent = () => {
  const disabled = boolean('disabled', false, 'WithDropdown');
  return (
    <WithDropdown
      dropdownContents={[
        {
          type: 'selectable',
          text: 'menu1',
          ariaLabel: 'menu1',
          onClick: action('click'),
        },
        {
          type: 'selectable',
          text: 'menu2',
          ariaLabel: 'menu2',
          onClick: action('click'),
        },
        {
          type: 'selectable',
          text: 'とてもとてもとてもとてもとてもとてもとてもとてもとてもとてもとてもとてもとてもとても長い',
          ariaLabel: 'menu3',
          onClick: action('click'),
        },
        {
          type: 'selectable',
          text: 'menu4 (disabled)',
          ariaLabel: 'menu4',
          disabled: true,
        },
        { type: 'selectable', text: '発注（あなたが作成中）' },
        { type: 'selectable', text: '発注（取引先の確認待ち）' },
        { type: 'selectable', text: '発注（確認済み）' },
        { type: 'selectable', text: 'もっと見る', disableOnRequestClose: true },
      ]}
      disabled={disabled}
      renderButton={(dropdownId, isOpen, buttonRef, togglePopup) => (
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
      onOpen={action('open')}
      onClose={action('close')}
    ></WithDropdown>
  );
};
