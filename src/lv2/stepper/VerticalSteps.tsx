import * as React from 'react';
import useUniqueId from '../../hooks/useUniqueId';
import { StepNumber, VisuallyHidden } from '../../lv1';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  /**
   * 現在のステップの位置（0始まり）
   */
  currentStepIndex: number;
  steps: {
    /**
     * ステップのタイトル
     */
    title: React.ReactNode;
    /**
     * ステップの内容。現在のステップの内容のみ表示されます。
     */
    content: React.ReactNode;
    /**
     * ステップから次へ進む/目に戻るアクションのボタン
     */
    actions?: React.ReactNode;
    /**
     * 以前のステップでのユーザーの入力内容のサマリー
     */
    contentSummary?: React.ReactNode;
  }[];
  /**
   * ステップのタイトル部分の見出しレベル。`-1` にすると見出し要素ではなくなります。
   */
  stepHeadlineLevel?: 1 | 2 | 3 | 4 | 5 | 6 | -1;
} & CommonProps;

/**
 * ユーザーに手順を提示し、順番に沿って操作させるためのコンポーネントです。
 *
 * - 手順ごとに `title` `content` `contentSummary` `actions` を指定できます。
 *   - `title` は常に表示されます
 *   - `content` はステップの内容で、フォーム等を配置します。現在のステップのみ表示されます
 *   - `actions` はステップを完了する、または前のステップに戻るボタンを配置します。現在のステップにのみ表示されます。
 *   - `contentSummary` はステップでのユーザーの入力・選択内容の概要を表現します。通過したステップにのみ表示されます
 *     - `contentSummary` にはステップで入力・選択した結果のみを含め、インタラクティブなものを含めないでください
 * - 各ステップの `title` は見出しとなります。デフォルトの見出しレベルは2ですが、 `stepHeadlineLevel` により変更ができます
 *   - `-1` にすると、見出しではなくなります。
 */
export const VerticalSteps: React.FC<Props> = ({
  currentStepIndex,
  steps,
  stepHeadlineLevel = 2,
  ...props
}) => {
  const className = 'vb-verticalSteps';
  const StepHeadlineTag =
    stepHeadlineLevel === 1
      ? 'h1'
      : stepHeadlineLevel === 2
      ? 'h2'
      : stepHeadlineLevel === 3
      ? 'h3'
      : stepHeadlineLevel === 4
      ? 'h4'
      : stepHeadlineLevel === 5
      ? 'h5'
      : stepHeadlineLevel === 6
      ? 'h6'
      : 'div';
  const uniqueId = useUniqueId(className);
  const selfRef = React.useRef<HTMLDivElement>(null);
  const renderedFlagRef = React.useRef(false);
  const getStepTitleIdFromIndex = (index: number, uniqueId: string) =>
    `${uniqueId}__title-${index + 1}`;
  React.useEffect(() => {
    if (renderedFlagRef.current && selfRef.current) {
      const elm = selfRef.current.querySelector(
        `#${getStepTitleIdFromIndex(currentStepIndex, uniqueId)}`
      );
      if (elm) {
        (elm as HTMLElement).focus();
      }
    } else if (uniqueId) {
      renderedFlagRef.current = true;
    }
  }, [currentStepIndex, uniqueId]);

  return (
    <div {...commonProps(props, className)} ref={selfRef} id={uniqueId}>
      {steps.map(({ title, content, contentSummary, actions }, i) => (
        <div key={i} className={`${className}__step`}>
          {/* マークアップ都合でStepNumber部分を見出しに含められないため、aria-hiddenして、見出し側にVisuallyHiddenで番号を書いている */}
          <div className={`${className}__number`} aria-hidden="true">
            <StepNumber
              number={i + 1}
              current={currentStepIndex === i}
              done={i < currentStepIndex}
            />
          </div>
          <StepHeadlineTag
            className={`${className}__title${
              i > currentStepIndex ? ` ${className}__title--future` : ''
            }`}
            id={getStepTitleIdFromIndex(i, uniqueId)}
            tabIndex={-1}
            aria-current={currentStepIndex === i ? 'step' : undefined}
          >
            <VisuallyHidden>{i + 1}</VisuallyHidden>
            {title}
          </StepHeadlineTag>
          <div className={`${className}__content`}>
            {i === currentStepIndex
              ? content
              : i < currentStepIndex
              ? contentSummary
              : ''}

            {actions && i === currentStepIndex && (
              <div className={`${className}__actions`}>{actions}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
