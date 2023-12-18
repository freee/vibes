import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MdExpandMore, MdChevronRight } from 'react-icons/md';

type Props = {
  folded: boolean;
  onToggleFolded: (folded: boolean) => void;
} & CommonProps;

const TreeFoldingButtonCell: React.FC<Props> = (props: Props) => {
  const { folded, onToggleFolded } = props;
  const className = 'vb-treeFoldingButtonCell';
  return (
    <td {...commonProps(props, className)}>
      <button
        className={`${className}__button`}
        aria-label={folded ? '展開する' : '折り畳む'}
        aria-expanded={!folded}
        onClick={(e) => {
          onToggleFolded(!folded);

          e.stopPropagation();
        }}
      >
        {folded ? (
          <MdChevronRight className={`${className}__icon`} />
        ) : (
          <MdExpandMore className={`${className}__icon`} />
        )}
      </button>
    </td>
  );
};

export default TreeFoldingButtonCell;
