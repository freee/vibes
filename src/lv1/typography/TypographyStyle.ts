import {
  FocusHighlightBorderRadius,
  MinimumSize,
  Colors2021P02,
} from '../../constants';
import styled from 'styled-components';
import { CommonStyleWithDeprecatedMarginProps } from '../../internal/CommonStyle';

export type TypographyStyleProps = {
  /**
   * inline 用のスタイルを適用します
   */
  inline?: boolean;
  /**
   * 水平方向の配置を指定します
   */
  textAlign?: 'left' | 'center' | 'right';
  /**
   * テキストが親要素から溢れた時に省略記号(...)を表示して、親要素内に収めます
   */
  ellipsis?: boolean;
};

export const TypographyStyle = styled(
  CommonStyleWithDeprecatedMarginProps
).attrs(({ inline, textAlign, ellipsis }: TypographyStyleProps) => ({
  inline,
  textAlign,
  ellipsis,
}))`
  padding: 0;
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  text-align: ${({ textAlign }) => textAlign || 'inherit'};

  overflow-wrap: break-word;
  border-radius: ${FocusHighlightBorderRadius};
  ${({ ellipsis, inline }) =>
    ellipsis
      ? `
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
    ${inline ? 'display: inline-block;' : ''}
  `
      : ''}

  &:focus {
    outline: none;
  }
  &:focus-visible {
    // ページの内容が変化したことをスクリーンリーダーに伝えたり、キーボード操作をしやすくするために、見出し部分へのフォーカスを行うことがあるが、
    // 通常のフォーカスインジケーターが表示されていると存在感が強く、ユーザーに違和感を与えてしまう。
    // このケースではフォーカスインジケーターを消してしまっても大きな問題とはならないはずだが、それをすると開発者がフォーカスの当たる挙動を確認することができなくなる問題が起き得る。
    // そこで、focus-visibleな状況に限り、通常よりも薄い色のフォーカスインジケーターを表示する。
    // focus-visibleな場合のみの表示なので、マウスポインタによる操作以外ではフォーカスインジケーターが表示される。
    // ここではコントラスト比が低くなりそうな色を意図的に選んでいる。
    box-shadow: 0 0 0 calc(${MinimumSize} * 2) ${Colors2021P02};
  }
`;

export type HeadlineStyleProps = TypographyStyleProps & {
  headlineLevel: 1 | 2 | 3 | 4 | 5 | 6 | -1;
};

export const HeadlineStyle = styled(TypographyStyle).attrs(
  ({ headlineLevel }: Pick<HeadlineStyleProps, 'headlineLevel'>) => ({
    headlineLevel,
    as: headlineLevel > 0 ? `h${headlineLevel}` : 'span',
  })
)`
  &:focus {
    outline: none;
  }
  &:focus-visible {
    // ページの内容が変化したことをスクリーンリーダーに伝えたり、キーボード操作をしやすくするために、見出し部分へのフォーカスを行うことがあるが、
    // 通常のフォーカスインジケーターが表示されていると存在感が強く、ユーザーに違和感を与えてしまう。
    // このケースではフォーカスインジケーターを消してしまっても大きな問題とはならないはずだが、それをすると開発者がフォーカスの当たる挙動を確認することができなくなる問題が起き得る。
    // そこで、focus-visibleな状況に限り、通常よりも薄い色のフォーカスインジケーターを表示する。
    // focus-visibleな場合のみの表示なので、マウスポインタによる操作以外ではフォーカスインジケーターが表示される。
    // ここではコントラスト比が低くなりそうな色を意図的に選んでいる。
    box-shadow: 0 0 0 calc(${MinimumSize} * 2) ${Colors2021P02};
  }
`;
