import * as React from 'react';

import GuidanceMessage from './GuidanceMessage';
import ContentsBase from '../../lv1/bases/ContentsBase';
import WithSideContent from '../../lv1/layout/WithSideContent';
import BulletedList from '../bulletedList/BulletedList';
import Button from '../../lv1/buttons/Button';
import { MdLightbulb, MdCardGiftcard } from 'react-icons/md';
import { commonKnobs } from '../../../stories';
import { boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import InlineLink from '../../lv1/buttons/InlineLink';

export default {
  component: GuidanceMessage,
};

export const GuidanceMessageComponent = () => (
  <ContentsBase>
    <GuidanceMessage
      IconComponent={MdLightbulb}
      verticalAlign={
        select(
          'verticalAlign',
          { top: 'top', middle: 'middle' },
          'middle',
          'GuidanceMessage'
        ) || undefined
      }
      width={
        select(
          'width',
          { 'fit-content': 'fit-content', full: 'full' },
          '',
          'GuidanceMessage'
        ) || undefined
      }
      inline={boolean('Inline', true, 'GuidanceMessage')}
      small={boolean('Small', true, 'GuidanceMessage')}
      renderCloseButton={(CloseButton) => (
        <>{CloseButton && <CloseButton onClick={action('Closed')} />}</>
      )}
      {...commonKnobs()}
    >
      テキストのみ。またはテキストと
      <InlineLink onClick={action('InlineLink: clicked')}>
        InlineLink
      </InlineLink>
      を合わせる形を推奨しています
    </GuidanceMessage>
  </ContentsBase>
);

export const WithoutCloseButton = () => (
  <ContentsBase>
    <GuidanceMessage
      IconComponent={MdLightbulb}
      verticalAlign={
        select(
          'verticalAlign',
          { top: 'top', middle: 'middle' },
          '',
          'GuidanceMessage'
        ) || undefined
      }
      width={
        select(
          'width',
          { 'fit-content': 'fit-content', full: 'full' },
          '',
          'GuidanceMessage'
        ) || undefined
      }
      inline={boolean('Inline', true, 'GuidanceMessage')}
      small={boolean('Small', false, 'GuidanceMessage')}
      url={text('URL', '', 'GuidanceMessage')}
      target={text('Target', '', 'GuidanceMessage')}
      rel={text('Rel', '', 'GuidanceMessage')}
      onClick={action('click')}
      onSelfWindowNavigation={action('selfWindowNavigation')}
      {...commonKnobs()}
    >
      ここは自由領域です。文字だけでも良いですし、ボタンを置いたりもできます。
    </GuidanceMessage>
  </ContentsBase>
);

export const WithButtonExample = () => (
  <ContentsBase>
    <GuidanceMessage
      IconComponent={MdLightbulb}
      verticalAlign={
        select(
          'verticalAlign',
          { top: 'top', middle: 'middle' },
          '',
          'GuidanceMessage'
        ) || undefined
      }
      width={
        select(
          'width',
          { 'fit-content': 'fit-content', full: 'full' },
          '',
          'GuidanceMessage'
        ) || undefined
      }
      {...commonKnobs()}
      renderCloseButton={(CloseButton) => (
        <WithSideContent
          mt={0.5}
          sideContent={
            CloseButton && <CloseButton onClick={action('Closed')} />
          }
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            アクション
          </Button>
        </WithSideContent>
      )}
    >
      <div>
        ここは自由領域です。文字だけでも良いですし、ボタンを置いたりもできます。
      </div>
    </GuidanceMessage>
  </ContentsBase>
);

export const ClickableExample = () => (
  <ContentsBase>
    <GuidanceMessage
      IconComponent={MdCardGiftcard}
      inline
      small={false}
      verticalAlign="middle"
      onClick={action('Clicked')}
      renderCloseButton={(CloseButton) => (
        <>{CloseButton && <CloseButton onClick={action('Closed')} />}</>
      )}
      {...commonKnobs()}
    >
      <span>リリースメッセージ</span>
    </GuidanceMessage>
    inlineのときは横に要素をおけます
  </ContentsBase>
);

export const InteractiveSample = () => {
  const [isClosed, setClosed] = React.useState(false);
  return (
    !isClosed && (
      <ContentsBase>
        <GuidanceMessage
          IconComponent={MdLightbulb}
          verticalAlign={
            select(
              'verticalAlign',
              { top: 'top', middle: 'middle' },
              '',
              'GuidanceMessage'
            ) || undefined
          }
          width={
            select(
              'width',
              { 'fit-content': 'fit-content', full: 'full' },
              '',
              'GuidanceMessage'
            ) || undefined
          }
          inline={boolean('Inline', false, 'GuidanceMessage')}
          small={boolean('Small', false, 'GuidanceMessage')}
          url={text('URL', '', 'GuidanceMessage')}
          target={text('Target', '', 'GuidanceMessage')}
          rel={text('Rel', '', 'GuidanceMessage')}
          onClick={action('click')}
          onSelfWindowNavigation={action('selfWindowNavigation')}
          renderCloseButton={(CloseButton) => (
            <>
              {CloseButton && <CloseButton onClick={() => setClosed(true)} />}
            </>
          )}
          {...commonKnobs()}
        >
          閉じるボタンを押すと、表示が消えるサンプルです。
        </GuidanceMessage>
      </ContentsBase>
    )
  );
};

export const SmallSample = () => {
  const [isClosed, setClosed] = React.useState(false);
  return (
    !isClosed && (
      <ContentsBase>
        <GuidanceMessage
          IconComponent={MdCardGiftcard}
          verticalAlign={
            select(
              'verticalAlign',
              { top: 'top', middle: 'middle' },
              '',
              'GuidanceMessage'
            ) || undefined
          }
          width={
            select(
              'width',
              { 'fit-content': 'fit-content', full: 'full' },
              '',
              'GuidanceMessage'
            ) || undefined
          }
          inline={true}
          small={true}
          url={text('URL', '', 'GuidanceMessage')}
          target={text('Target', '', 'GuidanceMessage')}
          rel={text('Rel', '', 'GuidanceMessage')}
          onClick={action('click')}
          onSelfWindowNavigation={action('selfWindowNavigation')}
          renderCloseButton={(CloseButton) => (
            <>
              {CloseButton && <CloseButton onClick={() => setClosed(true)} />}
            </>
          )}
          {...commonKnobs()}
        >
          inlineが指定されている場合にsmallを有効にできます。
        </GuidanceMessage>
      </ContentsBase>
    )
  );
};

export const MultiLine = () => {
  const [isClosed, setClosed] = React.useState(false);

  return (
    !isClosed && (
      <ContentsBase>
        <GuidanceMessage
          IconComponent={MdCardGiftcard}
          verticalAlign={'middle'}
          width={
            select(
              'width',
              { 'fit-content': 'fit-content', full: 'full' },
              '',
              'GuidanceMessage'
            ) || undefined
          }
          inline={true}
          url={text('URL', '', 'GuidanceMessage')}
          target={text('Target', '', 'GuidanceMessage')}
          rel={text('Rel', '', 'GuidanceMessage')}
          onClick={action('click')}
          onSelfWindowNavigation={action('selfWindowNavigation')}
          renderCloseButton={(CloseButton) => (
            <>
              {CloseButton && <CloseButton onClick={() => setClosed(true)} />}
            </>
          )}
          {...commonKnobs()}
        >
          ○○機能のアップデートがされました
          <BulletedList
            listContents={[
              {
                value:
                  'お知らせしたい内容が複数行に渡る場合はこのように分けて書くことができます。',
              },
              { value: 'こんなことができるようになりました。' },
            ]}
          />
        </GuidanceMessage>
      </ContentsBase>
    )
  );
};
