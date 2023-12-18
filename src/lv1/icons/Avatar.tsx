import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  imageUrl?: string;
  size?: 'small' | 'medium' | 'large' | 'xLarge';
  /**
   * 画像のprefetchでのチェックを有効にします、falseの場合は描画の際に一度だけ画像のfetchが行われます(キャッシュの効かない画像に対して有効です)
   */
  prefetch?: boolean;
} & CommonProps;

/**
 * 人のアバターを表現するためのコンポーネントです。
 *
 * - imageUrlが指定されない場合または画像の読み込みに失敗した場合はMdPersonアイコンが表示されます、prefetchがfalseの場合は画像の読み込みチェックを行わないため、画像が取得できなかった場合にMdPersonアイコンは出ません
 * - サイズは `small` (1.5rem = 24px), `medium` (2rem = 32px), `large` (3rem = 48px), XLarge (6rem = 96px) が用意されています
 */
const Avatar: React.FC<Props> = (props: Props) => {
  const { imageUrl, size, prefetch = true } = props;

  const classModifiers = {
    small: size === 'small',
    large: size === 'large',
    xLarge: size === 'xLarge',
  };

  const [imageLoaded, setImageLoaded] = React.useState(false);

  // 画像の読み込みに失敗してなんも出なくなるとマズいので、img要素を作って読み込み、imageLoadedフラグが立つのを待ってから表示する
  React.useEffect(() => {
    if (!prefetch) {
      return;
    }
    setImageLoaded(false);
    if (imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.addEventListener('load', () => setImageLoaded(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl]);

  return (
    <span
      {...commonProps(props, 'vb-avatar', classModifiers)}
      role="img"
      aria-label="アバター画像"
    >
      <svg viewBox="0 0 96 96" className="vb-avatar__image">
        <g clipPath="path('M96,48c0-7-.38-14.11-2.48-20.83A35.9,35.9,0,0,0,73.1,4.05C66.15,1,58.49.11,51,0A119.93,119.93,0,0,0,37.56.43C22.25,1.87,9.31,9.35,3.56,24.1.59,31.58,0,39.74,0,47.72s.51,16.43,3.51,24c5.78,15,18.91,22.47,34.43,23.84A124.8,124.8,0,0,0,51.48,96c7.3-.12,14.73-1.07,21.49-4A35.89,35.89,0,0,0,93.48,69C95.61,62.21,96,55.05,96,48Z')">
          <rect
            x={0}
            y={0}
            width={96}
            height={96}
            className="vb-avatar__background"
          />

          {imageUrl && (imageLoaded || !prefetch) ? (
            <image
              href={imageUrl}
              width="100%"
              height="100%"
              x={0}
              y={0}
              preserveAspectRatio="xMidYMid slice"
            />
          ) : (
            <g className="vb-avatar__placeholderIcon">
              <path d="M80.85,67.34c-3.38-3.41-10.06-9.45-23.26-11A69.79,69.79,0,0,0,48,55.66h0a69.79,69.79,0,0,0-9.59.64c-13.2,1.59-19.88,7.63-23.26,11-6,6.07-6.9,11.27-6.9,18.43s7,16.17,7,16.17h65.5s7-9,7-16.17S86.87,73.41,80.85,67.34Z" />
              <circle cx="48" cy="33" r="15" />
            </g>
          )}
        </g>
      </svg>
    </span>
  );
};

export default Avatar;
