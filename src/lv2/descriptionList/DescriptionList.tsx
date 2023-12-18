import * as React from 'react';
import DescriptionListHeadCell from '../../lv1/lists/DescriptionListHeadCell';
import DescriptionListCell from '../../lv1/lists/DescriptionListCell';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';
import { useResponsive } from '../../utilities/VibesProvider';

type Props = {
  listContents: Array<{
    title: React.ReactNode;
    value?: React.ReactNode;
  }>;
  /**
   * 見出しセルの最小幅を設定します
   */
  headCellMinWidth?: number;
  /**
   * リストの高さを設定します
   */
  spacing?: 'normal' | 'compact';
} & MarginClassProps &
  CommonProps;

/**
 * ## accessibility
 * DescriptionListにてフィールドを扱う場合、「フィールドとラベル」の紐付けを実装時に行う必要があります。
 *
 * 典型的な例として、以下のような対応が挙げられます。
 *
 * - valueに含まれるフィールドにidを付与する。
 * - titleを<label>で囲み、htmlForにフィールドのidを指定する
 *
 * storyのフィールドのある行が実装例として参考になります。
 *
 */
const DescriptionList: React.FC<Props> = (props: Props) => {
  const {
    listContents,
    headCellMinWidth,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
    spacing,
  } = props;

  return (
    <div
      {...commonProps(
        props,
        'vb-descriptionList',
        { responsive: useResponsive() },
        {
          marginBottom,
          marginLeft,
          marginRight,
          marginSize,
          marginTop,
        }
      )}
    >
      <table className="vb-descriptionList__table">
        <thead className="vb-descriptionList__header">
          <tr>
            <th>項目名</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          {listContents.map((listCont, index) => (
            <tr
              className={vbClassNames('vb-descriptionList__row', {
                modifier: { spacingCompact: spacing === 'compact' },
              })}
              key={index}
            >
              <DescriptionListHeadCell
                minWidth={headCellMinWidth}
                spacing={spacing}
              >
                {listCont.title}
              </DescriptionListHeadCell>
              <DescriptionListCell>{listCont.value}</DescriptionListCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DescriptionList;
