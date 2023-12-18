import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { FormControl } from '..';
import { MultiComboBoxOption } from './hooks';
import { MultiComboBox } from './MultiComboBox';
import { number, select, text } from '@storybook/addon-knobs';

export default {
  component: MultiComboBox,
};

export const MultiComboBoxComponent = () => {
  const [values, setValues] = React.useState<MultiComboBoxOption[]>([]);

  return (
    <>
      <MultiComboBox
        id={text('id', 'multicombobox-id', 'MultiComboBox')}
        values={values}
        onChange={(v) => setValues(v)}
        options={[
          {
            id: 1,
            type: '取引先',
            label: 'freee株式会社',
            keywords: [
              'ふりーかぶしきがいしゃ',
              'フリーカブシキガイシャ',
              'freee',
            ],
            color: 'RE',
          },
          {
            id: 2,
            type: '取引先',
            label: '株式会社サイトビジット',
            keywords: ['さいとびじっと', 'サイトビジット', 'SiGHTViSiT'],
            color: 'RE',
          },
          {
            id: 3,
            type: 'メモタグ',
            label: '昼ごはん',
            keywords: ['ひるごはん', 'ヒルゴハン', 'lunch', 'hirugohan'],
            color: 'YE',
          },
          {
            id: 4,
            type: 'メモタグ',
            label: '晩ごはん',
            keywords: ['ばんごはん', 'バンゴハン', 'dinner', 'yorugohan'],
            color: 'YE',
          },
          {
            id: 5,
            type: 'メモタグ',
            label: '晩ごはん2',
            keywords: ['ばんごはん2', 'バンゴハンツー', 'dinner', 'yorugohan'],
            color: 'YE',
          },
          {
            id: 6,
            type: 'メモタグ',
            label: '晩ごはん3',
            keywords: [
              'ばんごはん3',
              'バンゴハンスリー',
              'dinner',
              'yorugohan',
            ],
            color: 'YE',
          },
          {
            id: 7,
            type: 'メモタグ',
            label: '晩ごはん4',
            keywords: [
              'ばんごはん4',
              'バンゴハンフォー',
              'dinner',
              'yorugohan',
            ],
            color: 'YE',
          },
          {
            id: 8,
            type: 'メモタグ',
            label: '晩ごはん5',
            keywords: [
              'ばんごはん5',
              'バンゴハンファイブ',
              'dinner',
              'yorugohan',
            ],
            color: 'YE',
          },
          {
            id: 9,
            type: 'メモタグ',
            label: '晩ごはん6',
            keywords: [
              'ばんごはん6',
              'バンゴハンシックス',
              'dinner',
              'yorugohan',
            ],
            color: 'YE',
          },
          {
            id: 10,
            type: 'メモタグ',
            label: '晩ごはん7',
            keywords: [
              'ばんごはん7',
              'バンゴハンセブン',
              'dinner',
              'yorugohan',
            ],
            color: 'YE',
          },
          {
            id: 11,
            type: 'メモタグ',
            label: '晩ごはん8',
            keywords: [
              'ばんごはん8',
              'バンゴハンエイト',
              'dinner',
              'yorugohan',
            ],
            color: 'YE',
          },
          {
            id: 12,
            type: 'メモタグ',
            label: '晩ごはん9',
            keywords: [
              'ばんごはん9',
              'バンゴハンナイン',
              'dinner',
              'yorugohan',
            ],
            color: 'YE',
          },
          {
            id: 13,
            type: 'メモタグ',
            label: '晩ごはん10',
            keywords: ['ばんごはん10', 'バンゴハンテン', 'dinner', 'yorugohan'],
            color: 'YE',
          },
          {
            id: 14,
            type: 'メモタグ',
            label: '晩ごはん11',
            keywords: [
              'ばんごはん11',
              'バンゴハンイレブン',
              'dinner',
              'yorugohan',
            ],
            color: 'YE',
          },
          {
            id: 15,
            type: 'メモタグ',
            label: '晩ごはん12',
            keywords: [
              'ばんごはん12',
              'バンゴハントゥエルブ',
              'dinner',
              'yorugohan',
            ],
            color: 'YE',
          },
          {
            label: '海鮮助六',
            type: 'メモタグ',
            id: 16,
            keywords: [
              'かいせんすけろく',
              'kaisensukeroku',
              'さやか',
              'sayaka',
            ],
            color: 'YE',
          },
          {
            label: '助六',
            type: 'メモタグ',
            id: 17,
            keywords: ['すけろく', 'sukeroku', 'さやか', 'sayaka'],
            color: 'YE',
          },
          {
            label: '助六',
            type: 'メモタグ',
            id: 18,
            keywords: ['すけろく', 'sukeroku', 'さやか', 'sayaka'],
            color: 'YE',
          },
        ]}
        width={select(
          'Width',
          {
            XSmall: 'xSmall',
            Small: 'small',
            Medium: 'medium',
            Large: 'large',
            Full: 'full',
          },
          'large',
          'MultiComboBox'
        )}
        maxSelectionCount={number(
          'maxSelectionCount',
          0,
          undefined,
          'MultiComboBox'
        )}
        {...commonKnobs()}
      />
    </>
  );
};

export const SingleSelect = () => {
  const options: MultiComboBoxOption[] = [
    {
      id: 1,
      type: '取引先',
      label: 'freee株式会社',
      keywords: [
        'ふりーかぶしきがいしゃ',
        'フリーカブシキガイシャ',
        'freee kabusikikaisha',
      ],
      color: 'RE',
    },
    {
      id: 2,
      type: '取引先',
      label: '五反田食品株式会社',
      keywords: [
        'ごたんだしょくひんかぶしきがいしゃ',
        'ゴタンダショクヒンカブシキガイシャ',
        'gotanda shokuhin kabusikikaisha',
      ],
      color: 'RE',
    },
    {
      id: 3,
      type: '取引先',
      label: '大崎インターナショナルデザイン株式会社',
      keywords: [
        'おおさきいんたーなしょなるでざいんかぶしきがいしゃ',
        'オオサキインターナショナルデザインカブシキガイシャ',
        'oosaki international design kabusikikaisha',
      ],
      color: 'RE',
    },
  ];
  const [values, setValues] = React.useState<MultiComboBoxOption[]>([]);

  return (
    <FormControl fieldId="singleSelect" label="単一選択">
      <MultiComboBox
        id="singleSelect"
        values={values}
        options={options}
        onChange={(v) => setValues(v)}
        maxSelectionCount={1}
      />
    </FormControl>
  );
};

export const MaxSelectionCount2 = () => {
  const options: MultiComboBoxOption[] = [
    {
      id: 1,
      type: '取引先',
      label: 'freee株式会社',
      keywords: [
        'ふりーかぶしきがいしゃ',
        'フリーカブシキガイシャ',
        'freee kabusikikaisha',
      ],
      color: 'RE',
    },
    {
      id: 2,
      type: '取引先',
      label: '五反田食品株式会社',
      keywords: [
        'ごたんだしょくひんかぶしきがいしゃ',
        'ゴタンダショクヒンカブシキガイシャ',
        'gotanda shokuhin kabusikikaisha',
      ],
      color: 'RE',
    },
    {
      id: 3,
      type: '取引先',
      label: '大崎インターナショナルデザイン株式会社',
      keywords: [
        'おおさきいんたーなしょなるでざいんかぶしきがいしゃ',
        'オオサキインターナショナルデザインカブシキガイシャ',
        'oosaki international design kabusikikaisha',
      ],
      color: 'RE',
    },
  ];
  const [values, setValues] = React.useState<MultiComboBoxOption[]>([]);

  return (
    <FormControl fieldId="maxSelectionCount2" label="2つまで選べる">
      <MultiComboBox
        id="maxSelectionCount2"
        values={values}
        options={options}
        onChange={(v) => setValues(v)}
        maxSelectionCount={2}
        width="large"
      />
    </FormControl>
  );
};

const dummyOption: MultiComboBoxOption = {
  id: 1,
  type: '取引先',
  label: 'freee株式会社',
  keywords: ['ふりーかぶしきがいしゃ', 'フリーカブシキガイシャ', 'freee'],
  color: 'RE',
};

export const Error = () => {
  return <MultiComboBox values={[dummyOption]} options={[dummyOption]} error />;
};

export const Disabled = () => {
  return (
    <MultiComboBox values={[dummyOption]} options={[dummyOption]} disabled />
  );
};

export const LongOption = () => {
  const options: MultiComboBoxOption[] = [
    {
      id: 1,
      type: '長いテキスト',
      label:
        '寿限無寿限無五劫の擦り切れ海砂利水魚の水行末雲来末風来末喰う寝る処ところに住む処ところ藪柑子の藪柑子パイポパイポパイポのシューリンガンシューリンガングーリンダイグーリンダイのポンポコピーのポンポコナの長久命の長助',
      color: 'RE',
    },
    {
      id: 2,
      type: '長いテキスト',
      label:
        'ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。',
      color: 'RE',
    },
  ];
  const [values, setValues] = React.useState<MultiComboBoxOption[]>([
    options[0],
  ]);

  return (
    <MultiComboBox
      values={values}
      options={options}
      onChange={(v) => setValues(v)}
      width="large"
    />
  );
};
