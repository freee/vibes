import React, { useMemo } from 'react';

import { MdHome } from 'react-icons/md';
import {
  Colors2021GY02,
  ColumnBase,
  GlobalNavi,
  MarginBase,
  PageTitle,
  Paragraph,
  SectionTitle,
  WithTOC,
} from '../../';
import { commonKnobs } from '../../../stories';

export default {
  component: WithTOC,
};

const Skelton = () => (
  <svg width={600} height={30} viewBox="0 0 600 30" fill={Colors2021GY02}>
    <rect x="0" y="0" rx="15" ry="15" width="200" height="30" />
    <rect x="220" y="0" rx="15" ry="15" width="380" height="30" />
  </svg>
);

export const WithTOCComponent = () => {
  const contents = useMemo(
    () =>
      ['Section 1', 'Section 2', 'Lorem ipsum dolor sit amet'].map(
        (label, i) => ({
          id: `WithTOCComponent--section${i}`,
          label,
          content: (
            <ColumnBase mb={1}>
              <SectionTitle mb={1}>{label}</SectionTitle>
              <Skelton />
            </ColumnBase>
          ),
        })
      ),
    []
  );
  return <WithTOC contents={contents} {...commonKnobs()} />;
};

export const OffsetExample = () => {
  const contents = useMemo(
    () =>
      [
        'Section 1',
        'Section 2',
        'セクション３',
        'Lorem ipsum dolor sit amet',
        '寿限無寿限無五劫のすりきれ海砂利水魚の水行末雲来末風来末',
      ].map((label, i) => ({
        id: `OffsetExample--section${i}`,
        label,
        content: (
          <ColumnBase mb={3}>
            <SectionTitle mb={1}>{label}</SectionTitle>
            <Paragraph mb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae ligula id augue ultrices mollis vitae eget neque.
              Pellentesque nibh ex, dictum ac tempor eget, mollis a nulla. Sed
              semper velit lectus, eu convallis tellus dapibus nec. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Fusce eget enim nunc. Morbi ac egestas mi. Integer
              aliquet quam vel commodo molestie.
            </Paragraph>
            {[...Array(5)].map((_, n) => (
              <MarginBase key={n} mt={1}>
                <Skelton />
              </MarginBase>
            ))}
          </ColumnBase>
        ),
      })),
    []
  );

  return (
    <div
      id="OffsetExample--ScrollContainer"
      style={{ position: 'relative', overflow: 'auto', height: '30rem' }}
    >
      <div style={{ position: 'sticky', top: 0, zIndex: 1 }}>
        <GlobalNavi
          links={[
            {
              title: 'Some Sticky Header',
              url: '#',
              IconComponent: MdHome,
              current: true,
            },
          ]}
        />
      </div>
      <PageTitle mt={2} mb={1}>
        Lorem Ipsum Dolor
      </PageTitle>
      {[...Array(3)].map((_, n) => (
        <MarginBase key={n} mb={1}>
          <Skelton />
        </MarginBase>
      ))}
      <WithTOC
        contents={contents}
        containerID="OffsetExample--ScrollContainer"
        offsetTop={48}
        mt={2}
        mb={2}
      />
      {[...Array(10)].map((_, n) => (
        <MarginBase key={n} mt={1}>
          <Skelton />
        </MarginBase>
      ))}
    </div>
  );
};
