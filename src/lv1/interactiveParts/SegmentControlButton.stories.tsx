import * as React from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import SegmentControlButton from './SegmentControlButton';
import MarginBase from '../bases/MarginBase';

export default {
  component: SegmentControlButton,
};

export const SegmentControlButtonComponent = () => (
  <div>
    <SegmentControlButton
      current={boolean('Current', false, 'SegmentControlButton')}
      small={boolean('Small', false, 'SegmentControlButton')}
      large={boolean('Large', false, 'SegmentControlButton')}
      onClick={action('click')}
      {...commonKnobs()}
    >
      {text('Children', '通常は単体で置きません', 'SegmentControlButton')}
    </SegmentControlButton>
  </div>
);

export const Default = () => {
  const [index, setIndex] = React.useState(1);

  return (
    <>
      <MarginBase mb={1}>
        <SegmentControlButton current={index === 0} onClick={() => setIndex(0)}>
          申請中
        </SegmentControlButton>
        <SegmentControlButton current={index === 1} onClick={() => setIndex(1)}>
          差し戻し
        </SegmentControlButton>
        <SegmentControlButton current={index === 2} onClick={() => setIndex(2)}>
          承認済み
        </SegmentControlButton>
      </MarginBase>
    </>
  );
};

export const Small = () => {
  const [index, setIndex] = React.useState(1);

  return (
    <div>
      <SegmentControlButton
        current={index === 0}
        small
        onClick={() => setIndex(0)}
      >
        申請中
      </SegmentControlButton>
      <SegmentControlButton
        current={index === 1}
        small
        onClick={() => setIndex(1)}
      >
        差し戻し
      </SegmentControlButton>
      <SegmentControlButton
        current={index === 2}
        small
        onClick={() => setIndex(2)}
      >
        承認済み
      </SegmentControlButton>
    </div>
  );
};

export const Large = () => {
  const [index, setIndex] = React.useState(1);

  return (
    <div>
      <SegmentControlButton
        current={index === 0}
        large
        onClick={() => setIndex(0)}
      >
        申請中
      </SegmentControlButton>
      <SegmentControlButton
        current={index === 1}
        large
        onClick={() => setIndex(1)}
      >
        差し戻し
      </SegmentControlButton>
      <SegmentControlButton
        current={index === 2}
        large
        onClick={() => setIndex(2)}
      >
        承認済み
      </SegmentControlButton>
    </div>
  );
};

export const WithIcon = () => {
  const [index, setIndex] = React.useState(0);
  const [indexSmall, setIndexSmall] = React.useState(0);
  const [indexLarge, setIndexLarge] = React.useState(0);

  return (
    <>
      <MarginBase mb={1}>
        <SegmentControlButton
          current={index === 0}
          onClick={() => setIndex(0)}
          IconComponent={MdAdd}
        >
          ボタンテキスト
        </SegmentControlButton>
        <SegmentControlButton
          current={index === 1}
          onClick={() => setIndex(1)}
          IconComponent={MdRemove}
        >
          ボタンテキスト
        </SegmentControlButton>
      </MarginBase>
      <MarginBase mb={1}>
        <SegmentControlButton
          current={indexSmall === 0}
          small
          onClick={() => setIndexSmall(0)}
          IconComponent={MdAdd}
        >
          ボタンテキスト
        </SegmentControlButton>
        <SegmentControlButton
          current={indexSmall === 1}
          small
          onClick={() => setIndexSmall(1)}
          IconComponent={MdRemove}
        >
          ボタンテキスト
        </SegmentControlButton>
      </MarginBase>
      <MarginBase mb={1}>
        <SegmentControlButton
          current={indexLarge === 0}
          large
          onClick={() => setIndexLarge(0)}
          IconComponent={MdAdd}
        >
          ボタンテキスト
        </SegmentControlButton>
        <SegmentControlButton
          current={indexLarge === 1}
          large
          onClick={() => setIndexLarge(1)}
          IconComponent={MdRemove}
        >
          ボタンテキスト
        </SegmentControlButton>
      </MarginBase>
    </>
  );
};

export const WithHref = () => {
  return (
    <div>
      <SegmentControlButton
        current={false}
        large
        href="https://www.freee.co.jp/"
        target="_blank"
      >
        ページ1
      </SegmentControlButton>
      <SegmentControlButton
        current={true}
        large
        href="https://www.freee.co.jp/"
        target="_blank"
      >
        ページ2
      </SegmentControlButton>
      <SegmentControlButton
        current={false}
        large
        href="https://www.freee.co.jp/"
        target="_blank"
      >
        ページ3
      </SegmentControlButton>
      <SegmentControlButton
        current={false}
        large
        href="https://www.freee.co.jp/"
        target="_blank"
      >
        ページ4
      </SegmentControlButton>
    </div>
  );
};
