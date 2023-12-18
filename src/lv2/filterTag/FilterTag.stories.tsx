import * as React from 'react';
import { commonKnobs } from '../../../stories';
import FilterTag from './FilterTag';
import { Button, Text, HStack, VStack, PopupBase, TextField } from '../..';

export default {
  component: FilterTag,
};

export const Base = () => {
  return (
    <VStack>
      <Text>labelのみが設定されている場合</Text>
      <FilterTag
        label="取引先"
        renderPopup={() => <></>}
        {...commonKnobs()}
      ></FilterTag>
      <Text>labelとvalueが設定されている場合</Text>
      <FilterTag
        label="取引先"
        value="取引先名"
        renderPopup={() => <></>}
        {...commonKnobs()}
      ></FilterTag>
    </VStack>
  );
};

export const Popup = () => {
  const [value, setValue] = React.useState('');
  const [currentValue, setCurrentValue] = React.useState('');
  return (
    <>
      <FilterTag
        label="取引先"
        value={value}
        renderPopup={(onRequestClose) => (
          <div style={{ width: '20rem' }}>
            <PopupBase paddingSize="small" fitContent>
              <TextField
                value={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
              />
              <HStack gap={0.5} mt={0.5}>
                <Button
                  appearance="primary"
                  onClick={() => setValue(currentValue)}
                >
                  適用
                </Button>
                <Button onClick={onRequestClose}>閉じる</Button>
              </HStack>
            </PopupBase>
          </div>
        )}
        {...commonKnobs()}
      ></FilterTag>
    </>
  );
};
