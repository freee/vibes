import * as React from 'react';
import PageTitle from '../../lv1/typography/PageTitle';
import Paragraph from '../../lv1/typography/Paragraph';
import WithSideContent from '../../lv1/layout/WithSideContent';
import StatusIcon, { StatusType } from '../../lv1/icons/StatusIcon';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { SkeletonPageTitle } from '../skeleton/SkeletonPageTitle';
import { SkeletonParagraph } from '../skeleton/SkeletonParagraph';

type Props = {
  pageTitle: string;
  children?: React.ReactNode;
  loading?: boolean;
  relatedMenus?: React.ReactNode;
  statusIconType?: StatusType;
  statusIconText?: string;
} & CommonProps;

const HeadlineAreaInternal: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  Props
> = (props: Props, ref) => {
  const {
    pageTitle,
    children,
    statusIconType,
    statusIconText,
    loading,
    relatedMenus,
  } = props;

  return (
    <div {...commonProps(props, 'vb-headlineArea', {})}>
      <WithSideContent sideContent={relatedMenus} mb={children ? 1 : undefined}>
        {loading ? (
          <SkeletonPageTitle />
        ) : (
          <PageTitle ref={ref}>
            {pageTitle}
            {statusIconText && (
              <StatusIcon type={statusIconType} marginLeft marginSize="small">
                {statusIconText}
              </StatusIcon>
            )}
          </PageTitle>
        )}
      </WithSideContent>
      {children && loading ? (
        <SkeletonParagraph />
      ) : (
        <Paragraph>{children}</Paragraph>
      )}
    </div>
  );
};

/**
 * 画面上部に配置する、見出し、関連メニュー、画面の説明が一体となったコンポーネントです
 */
const HeadlineArea = React.forwardRef(HeadlineAreaInternal);
export default HeadlineArea;
