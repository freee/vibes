import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { FocusTrap } from './FocusTrap';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button, Paragraph, ColumnBase, TextField } from '../..';
import { Keys } from '../../utilities/keyboard';

export default {
  component: FocusTrap,
};

export const FocusTrapComponent = () => {
  const button1 = React.useRef<HTMLButtonElement>(null);
  const button5 = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button ref={button1} mb={1}>
        Button 1
      </Button>
      <FocusTrap
        loop={boolean('loop', false, 'FocusTrap')}
        onFocusInsideTop={action('onFocusInsideTop')}
        onFocusInsideBottom={action('onFocusInsideBottom')}
        onFocusOutsideTop={action('onFocusOutsideTop')}
        onFocusOutsideBottom={action('onFocusOutsideBottom')}
        {...commonKnobs}
      >
        <ColumnBase>
          <Paragraph mb={1}>
            フォーカストラップを抜けるには、Escキーを押してください（この挙動はFocusTrapコンポーネントには実装されていません）
          </Paragraph>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            onKeyDown={(e) => {
              if (e.key === Keys.ESC && button5.current) {
                button5.current.focus();
              }
            }}
          >
            <Button mr={1} mb={1}>
              Button 2
            </Button>
            <Button mr={1} mb={1}>
              Button 3
            </Button>
            <Button mr={1} mb={1}>
              Button 4
            </Button>
          </div>
        </ColumnBase>
      </FocusTrap>
      <Button ref={button5} mt={1} onClick={() => button1.current?.focus()}>
        Button 5 (Click to focus on Button 1)
      </Button>
    </>
  );
};

export const Loop = () => {
  const button1 = React.useRef<HTMLButtonElement>(null);
  const button5 = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button ref={button1} mb={1}>
        Button 1
      </Button>
      <FocusTrap loop>
        <ColumnBase>
          <Paragraph mb={1}>
            フォーカスをFocusTrapコンポーネント内でループさせられます。
          </Paragraph>
          <Paragraph mb={1}>
            フォーカストラップを抜けるには、Escキーを押してください（この挙動はFocusTrapコンポーネントには実装されていません）
          </Paragraph>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            onKeyDown={(e) => {
              if (e.key === Keys.ESC && button5.current) {
                button5.current.focus();
              }
            }}
          >
            <Button mr={1} mb={1}>
              Button 2
            </Button>
            <Button mr={1} mb={1}>
              Button 3
            </Button>
            <Button mr={1} mb={1}>
              Button 4
            </Button>
          </div>
        </ColumnBase>
      </FocusTrap>
      <Button ref={button5} mt={1} onClick={() => button1.current?.focus()}>
        Button 5 (Click to focus on Button 1)
      </Button>
    </>
  );
};

export const CustomizedFocusOrder = () => {
  const button1 = React.useRef<HTMLButtonElement>(null);
  const button2 = React.useRef<HTMLButtonElement>(null);
  const button3 = React.useRef<HTMLButtonElement>(null);
  const button4 = React.useRef<HTMLButtonElement>(null);
  const button2a = React.useRef<HTMLButtonElement>(null);
  const button2c = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button ref={button1} mr={1} mb={1}>
        Button 1
      </Button>
      <FocusTrap
        inline
        onFocusInsideTop={() => {
          button1.current?.focus();
          return true;
        }}
        onFocusInsideBottom={() => {
          button2a.current?.focus();
          return true;
        }}
        onFocusOutsideBottom={() => {
          button2c.current?.focus();
          return true;
        }}
      >
        <Button ref={button2} mr={1} mb={1}>
          Button 2
        </Button>
      </FocusTrap>
      <Button ref={button3} mr={1} mb={1}>
        Button 3
      </Button>

      <FocusTrap
        onFocusInsideTop={() => {
          button2.current?.focus();
          return true;
        }}
        onFocusInsideBottom={() => {
          button3.current?.focus();
          return true;
        }}
        onFocusOutsideTop={() => {
          button4.current?.focus();
          return true;
        }}
        onFocusOutsideBottom={() => {
          button3.current?.focus();
          return true;
        }}
      >
        <ColumnBase>
          <Button mr={1} mb={1} ref={button2a}>
            Button 2-A
          </Button>
          <Button mr={1} mb={1}>
            Button 2-B
          </Button>
          <Button mr={1} mb={1} ref={button2c}>
            Button 2-C
          </Button>
        </ColumnBase>
      </FocusTrap>
      <Button ref={button4} mt={1}>
        Button 4
      </Button>
    </>
  );
};

export const NoFocusableElement = () => {
  const button1 = React.useRef<HTMLButtonElement>(null);
  const button2 = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button ref={button1} mb={1}>
        Button 1
      </Button>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        onKeyDown={(e) => {
          if (e.key === Keys.ESC && button2.current) {
            button2.current.focus();
          }
        }}
      >
        <FocusTrap loop>
          <ColumnBase>
            <Paragraph mb={1}>
              フォーカストラップを抜けるには、Escキーを押してください（この挙動はFocusTrapコンポーネントには実装されていません）
            </Paragraph>
            <Paragraph mb={1}>
              フォーカス可能な要素がない場合、コンポーネントの提供する要素にフォーカスが留まり続けます
            </Paragraph>
            <Button disabled mr={1}>
              disbled button（フォーカスできません）
            </Button>
            <TextField
              label="テキストフィールド"
              placeholder="disabled field （フォーカスできません）"
              disabled
              width="large"
            />
          </ColumnBase>
        </FocusTrap>
      </div>
      <Button ref={button2} mt={1} onClick={() => button1.current?.focus()}>
        Button 2 (Click to focus on Button 1)
      </Button>
    </>
  );
};
