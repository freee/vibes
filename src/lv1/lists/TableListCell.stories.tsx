import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import TableListCell from './TableListCell';
import JumpButton from '../buttons/JumpButton';
import TextField from '../forms/TextField';
import Button from '../buttons/Button';
import CheckBox from '../forms/CheckBox';
import MessageIcon from '../../lv2/messageIcon/MessageIcon';
import WithBalloon from '../../lv2/withBalloon/WithBalloon';

export default {
  component: TableListCell,
};

type WrapperProps = { children: React.ReactNode; style?: React.CSSProperties };
const Wrapper: React.FC<WrapperProps> = ({ children, style }: WrapperProps) => (
  <table style={style}>
    <tbody>
      <tr>{children}</tr>
    </tbody>
  </table>
);

export const TableListCellComponent = () => (
  <Wrapper style={{ width: '20rem' }}>
    <TableListCell
      url={text('Url', '', 'TableListCell')}
      small={boolean('Small', false, 'TableListCell')}
      alignBottom={boolean('AalignBottom', false, 'TableListCell')}
      alignCenter={boolean('AlignCenter', false, 'TableListCell')}
      alignRight={boolean('Alignright', false, 'TableListCell')}
      alignTop={boolean('AlignTop', false, 'TableListCell')}
      breakWord={boolean('BreakWord', false, 'TableListCell')}
      indentLevel={number('IndentLevel', 0, {}, 'TableListCell')}
      onSelfWindowNavigation={action('self window navigation')}
      {...commonKnobs()}
    >
      {text('Children', 'テーブルセル', 'TableListCell')}
    </TableListCell>
  </Wrapper>
);

export const WithUrlAndClickables = () => (
  <Wrapper>
    <TableListCell
      url="https://www.freee.co.jp/"
      small={boolean('Small', false, 'TableListCell')}
      alignCenter={boolean('AlignCenter', false, 'TableListCell')}
      alignRight={boolean('Alignright', false, 'TableListCell')}
      breakWord={boolean('BreakWord', false, 'TableListCell')}
      indentLevel={number('IndentLevel', 0, {}, 'TableListCell')}
      onSelfWindowNavigation={action('self window navigation')}
      {...commonKnobs()}
    >
      <>
        テキスト <span>span</span>
        <JumpButton url="https://corp.freee.co.jp">リンク</JumpButton>
        <TextField label="テキストフィールド" />
        <Button onClick={action('button click')}>ボタン</Button>
        <CheckBox>チェックボックス</CheckBox>
        <MessageIcon label="バルーン">MessageIcon</MessageIcon>
        <WithBalloon
          balloonContent="WithBalloon"
          border="default"
          renderContent={() => 'WithBalloon'}
        />
      </>
    </TableListCell>
  </Wrapper>
);

export const VerticalAlign = () => (
  <Wrapper>
    <TableListCell alignTop>上寄せのカラム</TableListCell>
    <TableListCell alignBottom>下寄せのカラム</TableListCell>
    <TableListCell>
      複数行のカラム
      <br />
      複数行のカラム
      <br />
      複数行のカラム
      <br />
      複数行のカラム
      <br />
      複数行のカラム
      <br />
    </TableListCell>
  </Wrapper>
);

export const WithTruncatedText = () => (
  <Wrapper style={{ width: 480, tableLayout: 'fixed' }}>
    <TableListCell>
      <div
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト
        長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト
        長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト
      </div>
    </TableListCell>
    <TableListCell>隣のカラム</TableListCell>
  </Wrapper>
);
