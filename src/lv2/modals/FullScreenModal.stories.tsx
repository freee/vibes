import * as React from 'react';

import { text, boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import { Button, ListTable, Paragraph } from '../..';
import FullScreenModal from './FullScreenModal';

export default {
  component: FullScreenModal,
};

export const FullScreenModalComponent = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <>
      <Button onClick={toggle}>open</Button>
      <FullScreenModal
        id={text('Id', '', 'FullScreenModal')}
        isOpen={isOpen}
        title={text('Title', 'フルスクリーンモーダル', 'FullScreenModal')}
        contentLabel={text(
          'ContentLabel',
          'フルスクリーンモーダル',
          'FullScreenModal'
        )}
        onRequestClose={toggle}
        disabled={boolean('Disabled', false, 'FullScreenModal')}
        shouldCloseOnEsc={boolean('ShouldCloseOnEsc', false, 'FullScreenModal')}
        {...commonKnobs()}
      >
        {[...Array.from(Array(20).keys())].map((value) => (
          <Paragraph key={value}>
            画面いっぱいに広がるモーダルです。TaskDialogに収まりきらない複雑なコンテンツを配置できます。
          </Paragraph>
        ))}
      </FullScreenModal>
    </>
  );
};

export const HeaderSideContentSample = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <>
      <Button onClick={toggle}>open</Button>
      <FullScreenModal
        id={text('Id', '', 'FullScreenModal')}
        isOpen={isOpen}
        title={text('Title', 'フルスクリーンモーダル', 'FullScreenModal')}
        contentLabel={text(
          'ContentLabel',
          'フルスクリーンモーダル',
          'FullScreenModal'
        )}
        onRequestClose={toggle}
        disabled={boolean('Disabled', false, 'FullScreenModal')}
        shouldCloseOnEsc={boolean('ShouldCloseOnEsc', false, 'FullScreenModal')}
        headerSideContent={<Button>ボタン</Button>}
        {...commonKnobs()}
      >
        {[...Array.from(Array(20).keys())].map((value) => (
          <Paragraph key={value}>
            画面いっぱいに広がるモーダルです。TaskDialogに収まりきらない複雑なコンテンツを配置できます。
          </Paragraph>
        ))}
      </FullScreenModal>
    </>
  );
};

export const FullScreenModalWithListTable = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <>
      <Button onClick={toggle}>open</Button>
      <FullScreenModal
        isOpen={isOpen}
        title={'ListTableを持つFullScreenModal'}
        onRequestClose={toggle}
        {...commonKnobs()}
      >
        <Paragraph>ListTableの上にいろいろ置いたりするよね</Paragraph>
        <ListTable
          headers={[{ value: 'ヘッダー1' }, { value: 'ヘッダー2' }]}
          rows={Array.from(Array(200).keys()).map(() => ({
            cells: [{ value: 'セル1' }, { value: 'セル2' }],
          }))}
          fixedHeader={true}
          fixedHeaderOffset={'-1.5rem'}
        />
      </FullScreenModal>
    </>
  );
};
