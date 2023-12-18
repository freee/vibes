import * as React from 'react';
import { commonKnobs } from '../../../stories';
import SelectableButton from './SelectableButton';
import { HStack } from '../..';

export default {
  component: SelectableButton,
};

export const Base = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <HStack>
      <SelectableButton
        label="デフォルト"
        selected={selected === 0}
        onClick={() => setSelected(0)}
        {...commonKnobs()}
      />
      <SelectableButton
        label="システムビュー"
        selected={selected === 1}
        onClick={() => setSelected(1)}
        {...commonKnobs()}
      />
      <SelectableButton
        label="バッジ付き"
        selected={selected === 2}
        onClick={() => setSelected(2)}
        badge={3}
        {...commonKnobs()}
      />
      <SelectableButton
        label="カスタムビュー"
        selected={selected === 3}
        onClick={() => setSelected(3)}
        dropdownContents={[
          {
            text: 'ビューを更新',
            type: 'selectable',
            onClick: () => {
              // no-op
            },
          },
          {
            text: 'ビューの名前を変更',
            type: 'selectable',
            onClick: () => {
              // no-op
            },
          },
          {
            text: 'ビューをコピー',
            type: 'selectable',
            onClick: () => {
              // no-op
            },
          },
          {
            text: 'ビューを削除',
            type: 'selectable',
            onClick: () => {
              // no-op
            },
          },
        ]}
        {...commonKnobs()}
      />
    </HStack>
  );
};
