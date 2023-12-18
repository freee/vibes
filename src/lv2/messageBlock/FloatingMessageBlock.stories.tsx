import * as React from 'react';

import FloatingMessageBlock from './FloatingMessageBlock';
import { commonKnobs } from '../../../stories';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../../lv1/buttons/Button';

export default {
  component: FloatingMessageBlock,
};

export const FloatingMessageBlockComponent = () => (
  <>
    <FloatingMessageBlock
      info={boolean('Info', false, 'FloatingMessageBlock')}
      error={boolean('Error', false, 'FloatingMessageBlock')}
      success={boolean('Success', false, 'FloatingMessageBlock')}
      notice={boolean('Notice', false, 'FloatingMessageBlock')}
      linkTarget={text('LinkTarget', '_blank', 'FloatingMessageBlock')}
      linkTitle={text('LinkTitle', '詳細', 'FloatingMessageBlock')}
      linkUrl={text('LinkURL', '#', 'FloatingMessageBlock')}
      linkRel={text('LinkRel', '', 'FloatingMessageBlock')}
      onLinkClick={action('onLinkClick')}
      onClose={action('close')}
      onSelfWindowNavigation={action('onSelfWindowNavigation')}
      {...commonKnobs()}
    >
      {text('children', '情報メッセージ', 'FloatingMessageBlock')}
    </FloatingMessageBlock>
  </>
);

const CounterInternal = () => {
  const [count, setCount] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button
        mt={3}
        onClick={() => {
          setCount(count + 1);
          setVisible(true);
        }}
      >
        push me
      </Button>
      {visible && (
        <FloatingMessageBlock
          info={boolean('Info', false, 'FloatingMessageBlock')}
          error={boolean('Error', false, 'FloatingMessageBlock')}
          success={boolean('Success', false, 'FloatingMessageBlock')}
          notice={boolean('Notice', false, 'FloatingMessageBlock')}
          linkTarget={text('LinkTarget', '_blank', 'FloatingMessageBlock')}
          linkTitle={text('LinkTitle', '詳細', 'FloatingMessageBlock')}
          linkUrl={text('LinkURL', '#', 'FloatingMessageBlock')}
          linkRel={text('LinkRel', '', 'FloatingMessageBlock')}
          onLinkClick={action('onLinkClick')}
          onClose={() => setVisible(false)}
          {...commonKnobs()}
        >
          {`カウンターは ${count} です`}
        </FloatingMessageBlock>
      )}
    </>
  );
};

export const CounterExample = () => <CounterInternal />;
