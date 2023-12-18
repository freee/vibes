/* eslint-disable react/display-name */
import * as React from 'react';

import { MdAdd } from 'react-icons/md';
import { actions, action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Button from '../../lv1/buttons/Button';
import MarginBase from '../../lv1/bases/MarginBase';
import MaterialIcon from '../../lv1/icons/MaterialIcon';
import ScrollableBase from '../../lv1/bases/ScrollableBase';
import TaskDialog from '../dialogs/TaskDialog';
import SingleComboBox, { SingleComboBoxOption } from './SingleComboBox';
import TagBox from '../tagBox/TagBox';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import WithBalloon from '../withBalloon/WithBalloon';

const handlers = actions({
  onChange: 'onChange',
  onInput: 'onInput',
  onFocus: 'onFocus',
  onBlur: 'onBlur',
  onKeyDown: 'onKeyDown',
});

const sampleOptions = [
  { label: '杏', id: 0, keywords: ['あんず', 'anzu'] },
  { label: '円', id: 1, keywords: ['まどか', 'madoka'] },
  { label: '桜', id: 2, keywords: ['さくら', 'sakura'] },
  { label: '巴', id: 3, keywords: ['ともえ', 'tomoe'] },
  { label: '焔', id: 4, keywords: ['ほむら', 'homura'] },
  { label: '渚', id: 5, keywords: ['なぎさ', 'nagisa'] },
  {
    label: '海鮮助六',
    id: 6,
    keywords: ['かいせんすけろく', 'kaisensukeroku', 'さやか', 'sayaka'],
  },
  {
    label: '助六',
    id: 7,
    keywords: ['すけろく', 'sukeroku', 'さやか', 'sayaka'],
  },
  {
    label: '助六',
    id: 8,
    keywords: ['すけろく', 'sukeroku', 'さやか', 'sayaka'],
  },
  {
    label:
      'とてもながいとてもながいとてもながいせんたくしのとてもながいひょうじ',
    id: 9,
    keywords: [
      'totemonagaitotemonagaitotemonagaisentakushinototemonagaihyouji',
    ],
  },
  {
    label: '[+}-@test.com',
    id: 10,
    keywords: ['[+}-@test.com'],
  },
  { label: 'VibesAlpha', id: 11, keywords: ['VibesAlpha'] },
  { label: 'VibesBeta', id: 12, keywords: ['VibesBeta'] },
  { label: 'Vibes', id: 13, keywords: ['Vibes'] },
  { label: 'disabled', id: 14, disabled: true },
];

export default {
  component: SingleComboBox,
};

export const SingleComboboxComponent = () => (
  <SingleComboBox
    options={sampleOptions}
    required={boolean('Required', false, 'SingleComboBox')}
    disabled={boolean('Disabled', false, 'SingleComboBox')}
    error={boolean('Error', false, 'SingleComboBox')}
    small={boolean('Small', false, 'SingleComboBox')}
    large={boolean('Large', false, 'SingleComboBox')}
    placeholder={text('placeholder', '', 'SingleComboBox')}
    borderless={boolean('borderless', false, 'SingleComboBox')}
    width={select(
      'Width',
      {
        XSmall: 'xSmall',
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
        Full: 'full',
      },
      'medium',
      'SingleComboBox'
    )}
    listWidth={select(
      'listWidth',
      {
        XSmall: 'xSmall',
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      },
      'medium',
      'SingleComboBox'
    )}
    emptyMessage={text(
      'EmptyMessage',
      '該当する候補が見つかりません',
      'SingleComboBox'
    )}
    isLoading={boolean('isLoading', false, 'SingleComboBox')}
    {...handlers}
    {...commonKnobs()}
  />
);
const trailingItem = {
  onSelect: action('trailing item selected'),
  isVisible: (fieldValue: string) => !fieldValue,
  render: () => (
    <span>
      <span style={{ verticalAlign: 'middle' }}>
        <MaterialIcon IconComponent={MdAdd} />
      </span>
      もっと見る
    </span>
  ),
};

export const WithTrailingItem = () => (
  <SingleComboBox
    options={sampleOptions}
    required={boolean('Required', false, 'SingleComboBox')}
    disabled={boolean('Disabled', false, 'SingleComboBox')}
    error={boolean('Error', false, 'SingleComboBox')}
    small={boolean('Small', false, 'SingleComboBox')}
    placeholder={text('placeholder', '', 'SingleComboBox')}
    width={select(
      'Width',
      {
        XSmall: 'xSmall',
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
        Full: 'full',
      },
      'medium',
      'SingleComboBox'
    )}
    listWidth={select(
      'listWidth',
      {
        XSmall: 'xSmall',
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      },
      'medium',
      'SingleComboBox'
    )}
    emptyMessage={text(
      'EmptyMessage',
      '該当する候補が見つかりません',
      'SingleComboBox'
    )}
    isLoading={boolean('isLoading', false, 'SingleComboBox')}
    trailingItem={trailingItem}
    {...handlers}
  />
);

export const InteractiveSample = () => {
  const [val, setVal] = React.useState<SingleComboBoxOption | undefined>(
    sampleOptions[0]
  );
  return (
    <SingleComboBox
      value={val}
      options={sampleOptions}
      onChange={(opt) => {
        setVal(opt);
      }}
      trailingItem={trailingItem}
    />
  );
};

export const WithDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [values, setValues] = React.useState<
    (SingleComboBoxOption | undefined)[]
  >(Array(10).fill(undefined));

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>ダイアログを表示</Button>
      <TaskDialog
        closeButtonLabel="閉じる"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        title="ダイアログ"
      >
        {Array(10)
          .fill(null)
          .map((_v, i) => {
            return (
              <MarginBase key={i} marginBottom>
                <SingleComboBox
                  value={values[i]}
                  options={sampleOptions}
                  onChange={(option) =>
                    setValues((values) =>
                      values.map((value, j) => (j === i ? option : value))
                    )
                  }
                />
              </MarginBase>
            );
          })}
      </TaskDialog>
    </>
  );
};

export const InsideScroll = () => (
  <div style={{ width: '50rem', height: '50rem', display: 'flex' }}>
    <ScrollableBase scrollableX scrollableY>
      <div style={{ position: 'relative', width: '200rem', height: '200rem' }}>
        <div style={{ position: 'absolute', left: '100rem', top: '100rem' }}>
          <SingleComboBox
            options={sampleOptions}
            onChange={action('onChange')}
          />
        </div>
      </div>
    </ScrollableBase>
  </div>
);

export const FixedItems = () => {
  const [val, setVal] = React.useState<SingleComboBoxOption | undefined>(
    undefined
  );
  const [options, setOptions] = React.useState<SingleComboBoxOption[]>(
    sampleOptions.slice(0, Math.floor(sampleOptions.length / 2))
  );

  return (
    <>
      <SingleComboBox
        value={val}
        options={options}
        onChange={(opt) => {
          setVal(opt);
        }}
        emptyMessage="アイテムが登録されていません。新規登録してください。"
        fixedItems={[
          {
            onSelect: () => setOptions(sampleOptions),
            isVisible: () => options.length < sampleOptions.length,
            label: () => 'アイテムをもっと見る',
          },
          {
            onSelect: (fieldValue: string) => {
              const newOption = { label: fieldValue, id: '' };
              setVal(newOption);
            },
            isVisible: (
              fieldValue: string,
              filteredOptions: SingleComboBoxOption[]
            ) =>
              !!fieldValue &&
              (filteredOptions.length === 0 ||
                !filteredOptions.find((e) => e.label === fieldValue)),
            label: (fieldValue: string) => `${fieldValue}を新規登録する`,
          },
        ]}
      />
      <div>
        <div>label: {val?.label}</div>
        <div>id: {val?.id}</div>
        <div>{val && !val?.id && '新規登録の選択肢です'}</div>
      </div>
    </>
  );
};

export const AllowNewOption = () => {
  const [val, setVal] = React.useState<SingleComboBoxOption | undefined>(
    undefined
  );
  return (
    <>
      <SingleComboBox
        value={val}
        options={sampleOptions}
        onChange={(opt) => {
          setVal(opt);
        }}
        trailingItem={{
          selectIfOnly: true,
          onSelect: (fieldValue: string) => {
            const newOption = { label: fieldValue, id: '' };
            setVal(newOption);
          },
          render: (fieldValue: string) => `${fieldValue} (新規登録)`,
          isVisible: (
            fieldValue: string,
            filteredOptions: SingleComboBoxOption[]
          ) =>
            !!fieldValue &&
            (filteredOptions.length === 0 ||
              !filteredOptions.find((e) => e.label === fieldValue)),
        }}
      />
      <div>
        <div>label: {val?.label}</div>
        <div>id: {val?.id}</div>
        <div>{val && !val?.id && '新規登録の選択肢です'}</div>
      </div>
    </>
  );
};

export const AllowMoreOption = () => {
  const [val, setVal] = React.useState<SingleComboBoxOption | undefined>(
    undefined
  );
  const [options, setOptions] = React.useState<SingleComboBoxOption[]>(
    sampleOptions.slice(0, Math.floor(sampleOptions.length / 2))
  );

  return (
    <SingleComboBox
      value={val}
      options={options}
      onChange={(opt) => {
        setVal(opt);
      }}
      trailingItem={{
        onSelect: () => setOptions(sampleOptions),
        render: () => 'もっと見る',
        isVisible: () => options.length < sampleOptions.length,
        isMoreOption: true,
      }}
    />
  );
};

export const MultiSelect = () => {
  const [selected, setSelected] = React.useState<SingleComboBoxOption[]>([]);
  const messageRef = React.useRef<HTMLDivElement>(null);
  const [message, setMessage] = React.useState<string>('');

  return (
    <>
      <div>
        {selected.map((val, i) => (
          <TagBox
            key={i}
            removable
            onRemove={() => {
              setSelected(selected.filter((e) => e.id !== val.id));
            }}
            mb={0.5}
            mr={0.5}
          >
            {val.label}
          </TagBox>
        ))}
      </div>
      <VisuallyHidden>
        <div ref={messageRef} tabIndex={-1}>
          {message}
        </div>
      </VisuallyHidden>
      <SingleComboBox
        options={sampleOptions.filter(
          // 選択済みの選択肢を除外する
          (e) => selected.findIndex((s) => s.id === e.id) < 0
        )}
        onChange={(opt) => {
          if (opt) {
            setSelected(selected.concat([opt]));
            setMessage(`${opt.label} を選択しました`);
            // スクリーンリーダー向けのメッセージをsetMessageするとともに、その部分へフォーカスを移動することで、
            // コンボボックスにフォーカスが残り続け、選択肢ボックスが出ない状態になるのを防いでいる
            messageRef.current?.focus();
          }
        }}
      />
    </>
  );
};

export const ManualFocus = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const onClick = () => {
    ref.current?.focus();
  };

  return (
    <>
      <Button mr={1} onClick={onClick}>
        フォーカスを当てる
      </Button>
      <SingleComboBox
        ref={ref}
        options={sampleOptions}
        onChange={action('onChange')}
      />
    </>
  );
};

export const Events = () => {
  const [eventList, setEventList] = React.useState<Array<string>>([]);
  const eventAction = (signature: string) =>
    setEventList([
      ...eventList,
      `${new Date().toString()} ${signature}イベント発火`,
    ]);

  return (
    <>
      <SingleComboBox
        options={sampleOptions}
        onChange={() => eventAction('onChange')}
        onBlur={() => eventAction('onBlur')}
        onInput={() => eventAction('onInput')}
        onFocus={() => eventAction('onFocus')}
        onKeyDown={() => eventAction('onKeyDown')}
      />
      <ul>
        {eventList.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </>
  );
};

export const WithSubLabel = () => (
  <SingleComboBox
    options={sampleOptions.map((opt) => ({
      ...opt,
      subLabel: opt.keywords?.[0],
    }))}
    onChange={action('onChange')}
  />
);

export const DescribedByBalloon = () => (
  <WithBalloon
    renderBalloonContent={() => <>注釈文を付けることができます。</>}
    renderContent={(balloonId?: string) => (
      <SingleComboBox
        options={sampleOptions}
        onChange={action('onChange')}
        describedBy={balloonId}
      />
    )}
  />
);
