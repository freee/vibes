import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  /**
   * 週の始まりを指定する(1: 月曜日, それ以外: 日曜日)
   */
  weekStartsOn: number;
} & CommonProps;

export default function CalendarHead(props: Props): React.ReactElement {
  const { weekStartsOn } = props;
  const headBaseClass = 'vb-calendarHead';
  const cellBaseClass = 'vb-calendarHead__cell';

  if (weekStartsOn === 1) {
    return (
      <tr {...commonProps(props, headBaseClass)}>
        <th className={cellBaseClass}>月</th>
        <th className={cellBaseClass}>火</th>
        <th className={cellBaseClass}>水</th>
        <th className={cellBaseClass}>木</th>
        <th className={cellBaseClass}>金</th>
        <th className={`${cellBaseClass} ${cellBaseClass}--secondary-holiday`}>
          土
        </th>
        <th className={`${cellBaseClass} ${cellBaseClass}--primary-holiday`}>
          日
        </th>
      </tr>
    );
  } else {
    return (
      <tr {...commonProps(props, headBaseClass)}>
        <th className={`${cellBaseClass} ${cellBaseClass}--primary-holiday`}>
          日
        </th>
        <th className={cellBaseClass}>月</th>
        <th className={cellBaseClass}>火</th>
        <th className={cellBaseClass}>水</th>
        <th className={cellBaseClass}>木</th>
        <th className={cellBaseClass}>金</th>
        <th className={`${cellBaseClass} ${cellBaseClass}--secondary-holiday`}>
          土
        </th>
      </tr>
    );
  }
}
