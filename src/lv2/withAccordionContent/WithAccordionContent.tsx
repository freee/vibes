import * as React from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import Button from '../../lv1/buttons/Button';
import commonProps, {
  CommonProps,
  pickCommonProps,
} from '../../utilities/commonProps';
import useUniqueId from '../../hooks/useUniqueId';

type AccordionButtonProps = {
  /**
   * 開閉される要素のidを設定します。このidはaria-controlsに用います。
   */
  contentId: string;
  /**
   * 開閉状態を設定します。
   */
  open: boolean;
} & Pick<
  Parameters<typeof Button>[0],
  'onClick' | 'children' | 'appearance' | 'small' | 'large'
> &
  CommonProps;

const AccordionButton: React.FC<AccordionButtonProps> = (
  props: AccordionButtonProps
) => {
  const { contentId, open, onClick, children, appearance, small, large } =
    props;

  return (
    <Button
      IconComponent={open ? MdExpandLess : MdExpandMore}
      iconPosition="right"
      appearance={appearance}
      small={small}
      large={large}
      aria-controls={contentId}
      aria-expanded={open}
      onClick={onClick}
      {...pickCommonProps(props)}
    >
      {children}
    </Button>
  );
};

type Props = {
  /**
   * AccordionButtonを含む要素を返します。
   * contentIdはAccordionButtonの引数として渡してください。
   */
  renderAccordionButtonArea: (
    AccordionButton: React.FC<AccordionButtonProps>,
    contentId: string
  ) => React.ReactNode;
  /**
   * 開閉状態を設定します。
   */
  isOpen: boolean;
  /**
   * 開閉される要素を設定します。
   */
  children: React.ReactNode;
} & CommonProps;

/**
 * 開閉される要素に用いるコンポーネントです。
 * 同ファイル内に定義されているAccordionButtonと併せて使われる想定です。
 */
const WithAccordionContent: React.FC<Props> = (props: Props) => {
  const { renderAccordionButtonArea, isOpen, children } = props;
  const contentId = useUniqueId('accordionContent');

  return (
    <div {...commonProps(props, 'vb-withAccordionContent')}>
      {renderAccordionButtonArea(AccordionButton, contentId)}
      {isOpen && (
        <div id={contentId} aria-hidden={!isOpen}>
          {children}
        </div>
      )}
    </div>
  );
};

export default WithAccordionContent;
