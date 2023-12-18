import * as React from 'react';

import GuidedContent from './GuidedContent';
import SectionTitle from '../../lv1/typography/SectionTitle';
import Paragraph from '../../lv1/typography/Paragraph';
import ColumnBase from '../../lv1/bases/ColumnBase';
import TextField from '../../lv1/forms/TextField';
import DescriptionListCell from '../../lv1/lists/DescriptionListCell';
import BorderTableListCell from '../../lv1/lists/BorderTableListCell';
import Button from '../../lv1/buttons/Button';
import AccordionPanel from '../../lv2/accordionPanel/AccordionPanel';
import ButtonGroup from '../../lv2/buttonGroup/ButtonGroup';
import { VibesProvider } from '../../utilities';

export default {
  component: GuidedContent,
};

export const GuidedContentComponent = () => (
  <GuidedContent
    title={<SectionTitle>title content</SectionTitle>}
    guide={<SectionTitle>guide content</SectionTitle>}
    content={<SectionTitle>content</SectionTitle>}
  />
);

export const InteractiveSample = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <GuidedContent
      title={
        <>
          <SectionTitle>事業の目的を設定しましょう</SectionTitle>
          <Paragraph>
            事業目的とは、会社を設立するにあたり具体的に会社で何を事業とするのかを目的として設定するものです。事業目的の記載方法のポイントも参考にしましょう。
          </Paragraph>
        </>
      }
      guide={
        <ColumnBase>
          事業目的の設定の仕方
          <AccordionPanel
            title="Q. 許認可を取得するよっていがあるのですが・・・"
            onClick={() => setOpen(!isOpen)}
          ></AccordionPanel>
          <AccordionPanel
            title="Q. 許認可を取得するよっていがあるのですが・・・"
            onClick={() => setOpen(!isOpen)}
          ></AccordionPanel>
          <AccordionPanel
            title="Q. 許認可を取得するよっていがあるのですが・・・"
            onClick={() => setOpen(!isOpen)}
          ></AccordionPanel>
          <AccordionPanel
            title="Q. 許認可を取得するよっていがあるのですが・・・"
            onClick={() => setOpen(!isOpen)}
          ></AccordionPanel>
          <AccordionPanel
            title="Q. 許認可を取得するよっていがあるのですが・・・"
            onClick={() => setOpen(!isOpen)}
          ></AccordionPanel>
        </ColumnBase>
      }
      content={
        <>
          <table>
            <tbody>
              <tr>
                <DescriptionListCell>
                  <span>1.</span>
                  <TextField label="テキストフィールド" ml={0.5}></TextField>
                  <Button appearance="secondary" small ml={0.5}>
                    削除
                  </Button>
                </DescriptionListCell>
              </tr>
              <tr>
                <DescriptionListCell>
                  <span>2.</span>
                  <TextField label="テキストフィールド" ml={0.5}></TextField>
                  <Button appearance="secondary" small ml={0.5}>
                    削除
                  </Button>
                </DescriptionListCell>
              </tr>
              <tr>
                <BorderTableListCell>
                  <span>3.</span>
                  <TextField label="テキストフィールド" ml={0.5}></TextField>
                  <Button appearance="secondary" small ml={0.5}>
                    削除
                  </Button>
                </BorderTableListCell>
              </tr>
            </tbody>
          </table>
          <ButtonGroup align="left" mt={1}>
            <Button primary>保存</Button>
            <Button>キャンセル</Button>
          </ButtonGroup>
        </>
      }
    />
  );
};

export const ResponsiveGuidedContent = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <VibesProvider fixedLayout={false}>
      <GuidedContent
        responsive
        title={
          <>
            <SectionTitle>事業の目的を設定しましょう</SectionTitle>
            <Paragraph>
              事業目的とは、会社を設立するにあたり具体的に会社で何を事業とするのかを目的として設定するものです。事業目的の記載方法のポイントも参考にしましょう。
            </Paragraph>
          </>
        }
        guide={
          <ColumnBase>
            事業目的の設定の仕方
            <AccordionPanel
              title="Q. 許認可を取得するよっていがあるのですが・・・"
              onClick={() => setOpen(!isOpen)}
            ></AccordionPanel>
            <AccordionPanel
              title="Q. 許認可を取得するよっていがあるのですが・・・"
              onClick={() => setOpen(!isOpen)}
            ></AccordionPanel>
            <AccordionPanel
              title="Q. 許認可を取得するよっていがあるのですが・・・"
              onClick={() => setOpen(!isOpen)}
            ></AccordionPanel>
            <AccordionPanel
              title="Q. 許認可を取得するよっていがあるのですが・・・"
              onClick={() => setOpen(!isOpen)}
            ></AccordionPanel>
            <AccordionPanel
              title="Q. 許認可を取得するよっていがあるのですが・・・"
              onClick={() => setOpen(!isOpen)}
            ></AccordionPanel>
          </ColumnBase>
        }
        content={
          <>
            <table>
              <tbody>
                <tr>
                  <DescriptionListCell>
                    <span>1.</span>
                    <TextField label="テキストフィールド" ml={0.5}></TextField>
                    <Button appearance="secondary" small ml={0.5}>
                      削除
                    </Button>
                  </DescriptionListCell>
                </tr>
                <tr>
                  <DescriptionListCell>
                    <span>2.</span>
                    <TextField label="テキストフィールド" ml={0.5}></TextField>
                    <Button appearance="secondary" small ml={0.5}>
                      削除
                    </Button>
                  </DescriptionListCell>
                </tr>
                <tr>
                  <BorderTableListCell>
                    <span>3.</span>
                    <TextField label="テキストフィールド" ml={0.5}></TextField>
                    <Button appearance="secondary" small ml={0.5}>
                      削除
                    </Button>
                  </BorderTableListCell>
                </tr>
              </tbody>
            </table>
            <ButtonGroup align="left" mt={1}>
              <Button primary>保存</Button>
              <Button>キャンセル</Button>
            </ButtonGroup>
          </>
        }
      />
    </VibesProvider>
  );
};
