import * as React from 'react';
import BorderTableListCell from '../../lv1/lists/BorderTableListCell';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';

type Props = React.ComponentProps<typeof BorderTableListCell> & {
  onToggleFolded: () => void;
  level: number;
  foldable: boolean;
  folded: boolean;
};

const HierarchicalTableRowHeaderCell: React.FC<Props> = ({
  onToggleFolded,
  level,
  foldable,
  folded,
  children,
  ...rest
}: Props) => {
  const baseClassName = 'vb-hierarchicalTableRowHeaderCell';
  const className = [
    baseClassName,
    `${baseClassName}--level${level}`,
    foldable ? '' : `${baseClassName}--foldable--level${level}`,
  ].join(' ');

  return (
    <BorderTableListCell {...rest}>
      <span className={className}>
        {foldable && (
          <button
            className={`${baseClassName}__button`}
            aria-label={folded ? '展開する' : '折り畳む'}
            aria-expanded={!folded}
            onClick={(e) => {
              onToggleFolded();
              e.stopPropagation();
            }}
          >
            {folded ? (
              <MdChevronRight className={`${baseClassName}__icon`} />
            ) : (
              <MdExpandMore className={`${baseClassName}__icon`} />
            )}
          </button>
        )}
        {children}
      </span>
    </BorderTableListCell>
  );
};

export default HierarchicalTableRowHeaderCell;
