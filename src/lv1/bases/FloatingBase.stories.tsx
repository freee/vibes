import * as React from 'react';

import FloatingBase from './FloatingBase';
import Paragraph from '../typography/Paragraph';
import { select, boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Button from '../buttons/Button';
import TaskDialog from '../../lv2/dialogs/TaskDialog';

export default {
  component: FloatingBase,
};
export const FloatingBaseComponent = () => (
  <FloatingBase
    small={boolean('Small', false, 'FloatingBase')}
    inline={boolean('Inline', false, 'FloatingBase')}
    fitContent={boolean('fitContent', false, 'FloatingBase')}
    border={
      select(
        'Border',
        {
          none: '',
          default: 'default',
          notice: 'notice',
          alert: 'alert',
          success: 'success',
        },
        '',
        'FloatingBase'
      ) || undefined // none時にundefinedにしたいが、selectのoptionにundefinedを渡せないので空文字を||でundefinedにしている
    }
    paddingSize={
      select(
        'PaddingSize',
        {
          none: '',
          small: 'small',
          medium: 'medium',
          large: 'large',
          zero: 'zero',
        },
        '',
        'FloatingBase'
      ) || undefined
    }
    {...commonKnobs()}
  >
    FloatingBaseは浮き上がるコンテンツを配置するための領域です。
    <br />
    周囲に24dpのpaddingが入り、メニューなどに使うことができます。
  </FloatingBase>
);

export const PaddingSizeOption = () => (
  <>
    <FloatingBase mb={1}>default (1.5rem = 24px)</FloatingBase>
    <FloatingBase paddingSize="zero" mb={1}>
      paddingSize=&quot;zero&quot;
    </FloatingBase>
    <FloatingBase paddingSize="small" mb={1}>
      paddingSize=&quot;small&quot; (1rem = 16px)
    </FloatingBase>
    <FloatingBase paddingSize="medium" mb={1}>
      paddingSize=&quot;medium&quot; (1.5rem = 24px)
    </FloatingBase>
    <FloatingBase paddingSize="large" mb={1}>
      paddingSize=&quot;large&quot; (2rem = 32px)
    </FloatingBase>
  </>
);

export const BorderOption = () => (
  <>
    <FloatingBase mb={1}>without border prop</FloatingBase>
    <FloatingBase border="default" mb={1}>
      border=&quot;default&quot;
    </FloatingBase>
    <FloatingBase border="alert" mb={1}>
      border=&quot;alert&quot;
    </FloatingBase>
    <FloatingBase border="notice" mb={1}>
      border=&quot;notice&quot;
    </FloatingBase>
    <FloatingBase border="success" mb={1}>
      border=&quot;success&quot;
    </FloatingBase>
  </>
);

export const InlineOption = () => (
  <>
    <Paragraph>
      inline propを使用すると、
      <FloatingBase inline paddingSize="small" ml={0.5} mr={0.5}>
        こんなふうに
      </FloatingBase>
      display:inline の表示になります
    </Paragraph>
  </>
);

export const DialogOnPopup = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <>
      <FloatingBase>
        <Button onClick={() => setIsOpen(true)}>open dialog</Button>
      </FloatingBase>
      <TaskDialog
        title="ダイアログ"
        onRequestClose={() => setIsOpen(false)}
        closeButtonLabel={'閉じる'}
        isOpen={isOpen}
      >
        ポップアップの上にダイアログを配置することができます
      </TaskDialog>
    </>
  );
};
