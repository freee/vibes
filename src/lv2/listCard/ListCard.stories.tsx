import * as React from 'react';

import { MdOutlineDownload } from 'react-icons/md';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Button from '../../lv1/buttons/Button';
import ListCard from './ListCard';

const image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVQ4T6WSoQ4DIRAF2T8/iUQikUgkDovD4pBI5IK6hiYkHG3vaFYQCAmPmc0DRDxrrWys1hpDRLa7QynlEjCH9fMI+vUB5JxpBCklGkGM8fzHuSsNnf4OQghfFXaHCt57GoFzjkZgrX0kmJ3nGfR7MMa8A3ad14KB1ppGoJSiEUgpPwjunNeqgxDiUWEt2qVInHMawXEcJIIX64rsuyC/Fa0AAAAASUVORK5CYII=';

export default {
  component: ListCard,
};

export const ListCardComponent = () => (
  <ListCard
    title={text('Title', 'リストカード', 'ListCard')}
    url={text('Url', '#', 'ListCard')}
    onClick={action('click')}
    target={text('Target', '', 'ListCard')}
    rel={text('Rel', '', 'ListCard')}
    disabled={boolean('Disabled', false, 'ListCard')}
    current={boolean('Current', false, 'ListCard')}
    onSelfWindowNavigation={action('self window navigation')}
    actions={
      <>
        <Button small marginRight>
          ボタン1
        </Button>
        <Button small>ボタン2</Button>
      </>
    }
  >
    {text(
      'Children',
      'コンテンツコンテンツコンテンツコンテンツコンテンツ',
      'ListCard'
    )}
  </ListCard>
);

export const WithOnlyTitle = () => (
  <>
    <ListCard mb={1} title="リストカード" />
    <ListCard mb={1} title="リストカード urlあり" url="#" />
    <ListCard
      mb={1}
      title="リストカード urlあり(_blank)"
      url="#"
      target="_blank"
    />
  </>
);

export const WithoutAction = () => (
  <ListCard title="リストカード">
    コンテンツコンテンツコンテンツコンテンツコンテンツ
  </ListCard>
);

export const WithoutChildren = () => (
  <ListCard
    title="リストカード"
    actions={
      <>
        <Button small marginRight>
          ボタン1
        </Button>
        <Button small>ボタン2</Button>
      </>
    }
  />
);

export const WithThumbnail = () => (
  <ListCard
    title="リストカード"
    thumbnail={<img src={image} alt="" width="160" height="160" />}
    actions={
      <>
        <Button small marginRight>
          ボタン1
        </Button>
        <Button small>ボタン2</Button>
      </>
    }
  >
    コンテンツコンテンツコンテンツコンテンツコンテンツ
  </ListCard>
);

export const WithLargeThumbnail = () => (
  <ListCard
    title="リストカード"
    thumbnail={<img src={image} alt="" width="192" height="108" />}
    thumbnailSize={'large'}
    actions={
      <>
        <Button small marginRight>
          ボタン1
        </Button>
        <Button small>ボタン2</Button>
      </>
    }
  >
    コンテンツコンテンツコンテンツコンテンツコンテンツ
  </ListCard>
);

export const WithDisabled = () => (
  <ListCard
    title="リストカード"
    thumbnail={<img src={image} alt="" width="192" height="108" />}
    actions={
      <>
        <Button small marginRight disabled>
          ボタン1
        </Button>
        <Button small disabled>
          ボタン2
        </Button>
      </>
    }
    disabled
  />
);

export const WithIconComponent = () => (
  <>
    <ListCard title="リストカード" IconComponent={MdOutlineDownload}>
      IconComponentに任意のiconを指定
    </ListCard>
  </>
);
