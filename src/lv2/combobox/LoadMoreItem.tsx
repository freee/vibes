import * as React from 'react';
import vbClassName from '../../utilities/vbClassNames';

type Props = {
  createLabel?: (fieldValue: string) => string;
  fieldValue: string;
  isSelected: boolean;
  loadMore: () => void;
  selectedOptionRef: React.RefObject<HTMLDivElement>;
  uniqueId: string;
};

export const LoadMoreItem = ({
  createLabel,
  fieldValue,
  isSelected,
  loadMore,
  selectedOptionRef,
  uniqueId,
}: Props) => (
  /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
  <div
    id={`${uniqueId}__listOption__loadMore`}
    className={`vb-comboBox__listOption ${
      isSelected ? 'vb-comboBox__listOption--selected' : ''
    }`}
    role="option"
    aria-selected={isSelected}
    tabIndex={-1}
    onClick={loadMore}
    ref={isSelected ? selectedOptionRef : undefined}
  >
    <div
      className={vbClassName(
        `vb-comboBox__fixedItem ${
          isSelected ? 'vb-comboBox__fixedItem--selected' : ''
        }`,
        {
          modifier: { more: true },
        }
      )}
    >
      {createLabel ? createLabel(fieldValue) : 'もっと見る'}
    </div>
  </div>
);
