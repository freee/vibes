import * as React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import MaterialIcon from '../../lv1/icons/MaterialIcon';
import Paragraph from '../../lv1/typography/Paragraph';
import SectionTitle from '../../lv1/typography/SectionTitle';
import CardBase from '../../lv1/bases/CardBase';

type Props = {
  navigationContents: Array<{
    title: React.ReactNode;
    text?: React.ReactNode;
    url?: string;
    IconComponent?: React.ElementType;
  }>;
} & CommonProps;

const CardNavigation: React.FC<Props> = (props: Props) => {
  const { navigationContents } = props;
  const className = 'vb-cardNavigation';
  return (
    <div {...commonProps(props, className)}>
      {navigationContents.map((naviContent, index) => (
        <div
          className={`${className}__item ${className}__item--${navigationContents.length}`}
          key={index}
        >
          <CardBase url={naviContent.url} clickable>
            <div
              className={`${className}__content ${className}__content--${navigationContents.length}`}
            >
              <div className={`${className}__main`}>
                <div
                  className={`${className}__title${
                    naviContent.text ? ` ${className}__title--text` : ''
                  }`}
                >
                  {naviContent.IconComponent && (
                    <naviContent.IconComponent
                      className={`${className}__icon`}
                      focusable={false}
                    />
                  )}
                  <SectionTitle>{naviContent.title}</SectionTitle>
                </div>
                {naviContent.text && <Paragraph>{naviContent.text}</Paragraph>}
              </div>
              <div className={`${className}__arrow`}>
                <MaterialIcon IconComponent={MdKeyboardArrowRight} />
              </div>
            </div>
          </CardBase>
        </div>
      ))}
    </div>
  );
};

export default CardNavigation;
