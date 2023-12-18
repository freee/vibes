import React, { useMemo, useRef } from 'react';
import { Link } from 'react-scroll';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type WithTOCContent = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type Props = {
  /**
   * Content bodies and definitions across each sections.
   * 項目ごとの内容および定義一覧。
   *
   * - `id`: Section ID which users can refer to as an anchor. アンカーとして利用される、各項目ごとの要素ID。
   * - `label`: Section name appears in the ToC. 目次に表示される項目名。
   * - `content`: Body of each sections. 各項目の内容。
   */
  contents: Array<WithTOCContent>;

  /**
   * Container to perform scrolling in.
   * スクロールさせる親コンテナ要素。
   */
  containerID?: string;

  /**
   * Scroll position offset from top in screen pixels (`px`).
   * スクロールのオフセット値を指定。
   */
  offsetTop?: number;

  /**
   * Callback fired on ToC link clicks.
   * 目次のリンク押下時に呼び出されるコールバック。
   *
   * Usage example: `id => history.push({ hash: id })`
   */
  onNavigateTo?: (id: string) => void;
} & CommonProps;

/**
 * `<WithTOC/>` represents a list of content sections with an automatically generated table of contents.
 * 目次付きのコンテンツリストです。
 */
const WithTOC: React.FC<Props> = (props: Props) => {
  const baseClass = 'vb-withTOC';
  const { containerID, contents, offsetTop, onNavigateTo } = props;

  const contentsRef = useRef<HTMLDivElement>(null);

  const toc = useMemo(
    () =>
      contents.map((c) => (
        <li key={`index-${c.id}`}>
          <Link
            to={c.id}
            className={`${baseClass}__toc__link`}
            activeClass={`${baseClass}__toc__link--current`}
            href={`#${c.id}`}
            onClick={() => {
              (
                contentsRef.current?.querySelector(
                  `.${baseClass}__contents__section#${c.id}`
                ) as HTMLElement | null
              )?.focus({ preventScroll: true });
              onNavigateTo && onNavigateTo(c.id);
            }}
            containerId={containerID}
            offset={offsetTop && 0 - offsetTop}
            smooth="easeOutCubic"
            duration={500}
            spy
            hashSpy
          >
            {c.label}
          </Link>
        </li>
      )),
    [containerID, contents, offsetTop, onNavigateTo]
  );

  const bodies = useMemo(
    () =>
      contents.map((c) => (
        <section
          key={`body-${c.id}`}
          id={c.id}
          className={`${baseClass}__contents__section`}
          aria-label={c.label}
          tabIndex={-1}
        >
          {c.content}
        </section>
      )),
    [contents]
  );

  const containerStyle = useMemo(
    () => (offsetTop ? { top: `${offsetTop}px` } : {}),
    [offsetTop]
  );

  return (
    <section {...commonProps(props, baseClass)}>
      <nav className={`${baseClass}__toc`} aria-label="目次">
        <ol className={`${baseClass}__toc__container`} style={containerStyle}>
          {toc}
        </ol>
      </nav>
      <div ref={contentsRef} className={`${baseClass}__contents`}>
        {bodies}
      </div>
    </section>
  );
};
export default WithTOC;
