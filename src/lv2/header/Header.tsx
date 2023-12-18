import * as React from 'react';
import HeaderSectionContent from './HeaderSectionContent';
import { SectionData } from './types';

import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  /**
   * min-width から Container の左右 margin 分の値を取り除きます。
   */
  disableGutters?: boolean;
  /**
   * ロゴを指定します。
   */
  logo: React.ReactNode;
} & ( // sectionDataList または sectionNode を必須にするべく、{} | {} の指定にしている
  | {
      sectionDataList: Array<SectionData>;
      sectionNode?: React.ReactNode;
    }
  | {
      sectionDataList?: Array<SectionData>;
      sectionNode: React.ReactNode;
    }
) & {
    logoUrl?: string;
    children?: React.ReactNode;
  } & CommonProps;

const Header: React.FC<Props> = (props: Props) => {
  const {
    disableGutters = false,
    logo,
    sectionDataList,
    sectionNode,
    logoUrl,
    children,
  } = props;

  const logoNode = logo;

  const infoNode = sectionDataList
    ? sectionDataList.map((data, i) => (
        <span key={i} className="vb-header__section">
          <HeaderSectionContent data={data} />
        </span>
      ))
    : sectionNode;

  return (
    <header
      role="banner"
      {...commonProps(props, 'vb-header', { disableGutters })}
    >
      <div className="vb-header__logo">
        {logoUrl ? <a href={logoUrl}>{logoNode}</a> : logoNode}
      </div>

      {children && <div className="vb-header__children">{children}</div>}

      <div className="vb-header__info">{infoNode}</div>
    </header>
  );
};
export default Header;
