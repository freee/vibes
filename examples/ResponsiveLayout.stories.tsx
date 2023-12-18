import * as React from 'react';
import ResponsiveLayout from './ResponsiveLayout.mdx';

import {
  Button,
  ColumnBase,
  Container,
  ContentsBase,
  DescriptionList,
  FormActions,
  FormControl,
  FormControlGroup,
  HeadlineArea,
  SectionTitle,
  SubSectionTitle,
  TextField,
  Paragraph,
  NameField,
  NegativeContentsBase,
  MessageBlock,
  FloatingMessageBlock,
  VibesProvider,
} from '../src';

export default {
  title: 'examples/ResponsiveLayout',
  parameters: { docs: { page: ResponsiveLayout }, layout: 'fullscreen' },
};

export const LayoutSample = () => {
  const [screenMessage, setScreenMessage] = React.useState('');
  return (
    <>
      <VibesProvider fixedLayout={false}>
        <Container>
          <ContentsBase>
            <HeadlineArea pageTitle="レスポンシブレイアウト">
              Vibesでいい感じにデスクトップでもWebでも使える画面を使えるようにしたい
            </HeadlineArea>
            <Paragraph mb={1}>
              <code>VibesContext</code>に
              <code>value={'{{ responsive: true }}'}</code>
              を渡すことで、中身がよしなにレスポンシブレイアウトになるような仕組みを作れないかと考えています
            </Paragraph>
            <MessageBlock
              message="MessageBlockはpaddingが少し小さくなり、ボタンは段落ちした表示になります"
              linkTitle="詳細"
              linkUrl="#"
              mb={1}
            />
            {screenMessage && (
              <FloatingMessageBlock
                message={screenMessage}
                onClose={() => setScreenMessage('')}
                mb={1}
              />
            )}

            <NegativeContentsBase>
              <ColumnBase mb={1}>
                <Paragraph>
                  一部のコンポーネントは、 <code>responsive</code> propを持ち、{' '}
                  <code>
                    &lt;VibesContext value={'{{ responsive: '}true{' }}'}&gt;
                  </code>{' '}
                  内に置いたときと同じ表示になるようにします
                </Paragraph>
              </ColumnBase>
            </NegativeContentsBase>

            <Button
              onClick={() =>
                setScreenMessage(
                  'FloatingMessageBlockもMessageBlock同様の表示になります。中身同じだからね'
                )
              }
            >
              ボタン
            </Button>
          </ContentsBase>

          <ContentsBase>
            <SectionTitle mb={1}>フォームの表示</SectionTitle>
            <Paragraph mb={1}>
              テキストフィールドはlargeにしないと、iOSでズームされてしまうかも
            </Paragraph>
            <ColumnBase mb={1.5}>
              <FormControlGroup>
                <FormControl label="氏名" required mb={1} mr={1}>
                  <NameField autoComplete="name" required />
                </FormControl>
              </FormControlGroup>

              <SubSectionTitle>ご住所</SubSectionTitle>
              <FormControlGroup>
                {/* フィールドがひとつの場合はfieldIdを指定 */}
                <FormControl
                  label="郵便番号"
                  fieldId="layout-sample__postal"
                  required
                  mb={1}
                  mr={1}
                >
                  <TextField
                    id="layout-sample__postal"
                    width="small"
                    autoComplete="postal-code"
                  />
                </FormControl>
                {/* フィールドがひとつの場合はfieldIdを指定 */}
                <FormControl
                  label="都道府県"
                  fieldId="layout-sample__pref"
                  required
                  mb={1}
                  mr={1}
                >
                  {/* 都道府県のSelectBoxを作るのめんどくさい（許して） */}
                  <TextField
                    id="layout-sample__pref"
                    width="medium"
                    autoComplete="address-level1"
                  />
                </FormControl>
                {/* フィールドがひとつの場合はfieldIdを指定 */}
                <FormControl
                  label="市区町村"
                  fieldId="layout-sample__city"
                  required
                  mb={1}
                  mr={1}
                >
                  {/* 都道府県のSelectBoxを作るのめんどくさい（許して） */}
                  <TextField
                    id="layout-sample__city"
                    width="medium"
                    autoComplete="address-level2"
                  />
                </FormControl>
              </FormControlGroup>
              <FormControlGroup>
                {/* フィールドがひとつの場合はfieldIdを指定 */}
                <FormControl
                  label="町名・番地"
                  fieldId="layout-sample__address-line-1"
                  required
                  mb={1}
                  mr={1}
                >
                  <TextField
                    id="layout-sample__address-line-1"
                    width="large"
                    autoComplete="street-address"
                  />
                </FormControl>
              </FormControlGroup>
              <FormControlGroup>
                {/* フィールドがひとつの場合はfieldIdを指定 */}
                <FormControl
                  label="建物名・部屋番号"
                  fieldId="layout-sample__address-line-2"
                  mb={1}
                  mr={1}
                >
                  <TextField
                    id="layout-sample__address-line-2"
                    width="large"
                    autoComplete="street-address"
                  />
                </FormControl>
              </FormControlGroup>
            </ColumnBase>

            <DescriptionList
              mb={1}
              listContents={[
                {
                  title: <label htmlFor="layout-sample__item-1">項目1</label>,
                  value: <TextField id="layout-sample__item-1" />,
                },
                {
                  title: <label htmlFor="layout-sample__item-2">項目2</label>,
                  value: <TextField id="layout-sample__item-1" />,
                },
                {
                  title: <label htmlFor="layout-sample__item-3">項目3</label>,
                  value: <TextField id="layout-sample__item-1" />,
                },
              ]}
            />

            <FormActions responsive>
              <Button appearance="primary">送信</Button>
              <Button appearance="tertiary">スキップ</Button>
            </FormActions>
          </ContentsBase>
        </Container>
      </VibesProvider>
    </>
  );
};
