import * as React from 'react';
import { MdFileDownload } from 'react-icons/md';
import ImportWizard from './ImportWizard.mdx';

import {
  Container,
  ContentsBase,
  Breadcrumbs,
  PageTitle,
  Paragraph,
  Button,
  FileUploader,
  FileTypes,
  Stepper,
  SectionTitle,
  JumpButton,
  FormActions,
  NumericTable,
  Loading,
  Digits,
  MarginBase,
} from '../src';

export default {
  title: 'examples/ImportWizard',
  parameters: { docs: { page: ImportWizard } },
};

const requestMock = (wait = 700) => {
  // eslint-disable-next-line compat/compat
  return new Promise<void>((resolve) => setTimeout(() => resolve(), wait));
};

export const ImportWalkthrough = () => {
  const [isRequesting, setIsRequesting] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const headRef = React.useRef<HTMLHeadingElement>(null);

  // 実行中ステップに入ったときだけ、3秒で次のステップへ
  React.useEffect(() => {
    if (currentStep === 2) {
      setTimeout(() => setCurrentStep(3), 3000);
    }
    // stepが変わったら見出しにフォーカス
    headRef.current?.focus();
  }, [currentStep]);

  return (
    <Container width="narrow">
      <ContentsBase>
        <Breadcrumbs
          mb={1}
          links={[
            { title: 'ホーム', url: '/' },
            { title: '申請一覧', url: '/path/' },
            { title: 'インポート' },
          ]}
        />
        <Stepper
          currentStepIndex={currentStep}
          steps={['ファイルの準備', '内容の確認', '実行', '完了']}
          disabledStepIndex={[]}
        />
        {currentStep === 0 ? (
          <UploadStep
            isRequesting={isRequesting}
            headRef={headRef}
            onFileSelect={async () => {
              setIsRequesting(true);
              await requestMock();
              setCurrentStep(currentStep + 1);
              setIsRequesting(false);
            }}
          />
        ) : currentStep === 1 ? (
          <ConfirmStep
            isRequesting={isRequesting}
            headRef={headRef}
            onBack={() => setCurrentStep(currentStep - 1)}
            onConfirm={async () => {
              setIsRequesting(true);
              await requestMock(1000);
              setCurrentStep(currentStep + 1);
              setIsRequesting(false);
            }}
          />
        ) : currentStep === 2 ? (
          <ExecutionStep headRef={headRef} />
        ) : (
          <CompletedStep headRef={headRef} onRetry={() => setCurrentStep(0)} />
        )}
      </ContentsBase>
    </Container>
  );
};

export const UploadStep = ({
  headRef = React.createRef<HTMLHeadingElement>(),
  onFileSelect = () => {
    return;
  },
  isRequesting = false,
}: {
  headRef: React.Ref<HTMLHeadingElement>;
  onFileSelect: () => any;
  isRequesting: boolean;
}) => (
  <>
    <PageTitle textAlign="center" mb={1} ref={headRef}>
      申請のインポート
    </PageTitle>
    <Paragraph mb={1} textAlign="center">
      複数の申請を一括して追加することができます。
      <br />
      テンプレートのCSVファイルをMicrosoft
      Excel等で編集して、アップロードしてください。
    </Paragraph>
    <Paragraph mb={2} textAlign="center">
      <Button IconComponent={MdFileDownload}>
        テンプレートCSVファイルのダウンロード
      </Button>
    </Paragraph>
    <SectionTitle mb={1} textAlign="center">
      ファイルをアップロードして次のステップへ
    </SectionTitle>

    {/* TODO: こういうの↓を提供してくれるコンポーネントほしいね */}
    <MarginBase fitContent mr="auto" ml="auto">
      <FileUploader
        fileLabel="CSVファイル"
        isUploading={isRequesting}
        acceptFileTypes={[FileTypes.CSV]}
        onFileSelect={onFileSelect}
      />
    </MarginBase>
  </>
);

const ConfirmTable = () => (
  <NumericTable
    ml={-1.5}
    mr={-1.5}
    mb={1}
    headers={[
      { value: 'タイトル' },
      { value: '申請者' },
      { value: '日付' },
      { value: '金額', alignRight: true },
    ]}
    rows={[
      {
        cells: [
          { value: '打ち合わせ費用' },
          { value: 'フリー太郎' },
          { value: '2020-10-01' },
          { value: Digits.formalize(10000), alignRight: true },
        ],
      },
      {
        cells: [
          { value: '打ち合わせ費用' },
          { value: 'フリー太郎' },
          { value: '2020-10-01' },
          { value: Digits.formalize(10000), alignRight: true },
        ],
      },
      {
        cells: [
          { value: '打ち合わせ費用' },
          { value: 'フリー太郎' },
          { value: '2020-10-01' },
          { value: Digits.formalize(10000), alignRight: true },
        ],
      },
      {
        cells: [
          { value: '打ち合わせ費用' },
          { value: 'フリー太郎' },
          { value: '2020-10-01' },
          { value: Digits.formalize(10000), alignRight: true },
        ],
      },
      {
        cells: [
          { value: '打ち合わせ費用' },
          { value: 'フリー太郎' },
          { value: '2020-10-01' },
          { value: Digits.formalize(10000), alignRight: true },
        ],
      },
      {
        cells: [
          { value: '打ち合わせ費用' },
          { value: 'フリー太郎' },
          { value: '2020-10-01' },
          { value: Digits.formalize(10000), alignRight: true },
        ],
      },
      {
        cells: [
          { value: '打ち合わせ費用' },
          { value: 'フリー太郎' },
          { value: '2020-10-01' },
          { value: Digits.formalize(10000), alignRight: true },
        ],
      },
      {
        cells: [
          { value: '打ち合わせ費用' },
          { value: 'フリー太郎' },
          { value: '2020-10-01' },
          { value: Digits.formalize(10000), alignRight: true },
        ],
      },
      {
        cells: [
          { value: '打ち合わせ費用' },
          { value: 'フリー太郎' },
          { value: '2020-10-01' },
          { value: Digits.formalize(10000), alignRight: true },
        ],
      },
      {
        cells: [
          { value: '打ち合わせ費用' },
          { value: 'フリー太郎' },
          { value: '2020-10-01' },
          { value: Digits.formalize(10000), alignRight: true },
        ],
      },
    ]}
  />
);

export const ConfirmStep = ({
  headRef = React.createRef<HTMLHeadingElement>(),
  isRequesting = false,
  onBack = () => {
    /* do nothing */
  },
  onConfirm = () => {
    /* do nothing */
  },
}: {
  headRef: React.Ref<HTMLHeadingElement>;
  isRequesting: boolean;
  onBack: () => void;
  onConfirm: () => void;
}) => (
  <>
    <Loading isLoading={isRequesting} coverAll />
    <PageTitle textAlign="center" mb={1} ref={headRef}>
      インポートする内容をご確認ください
    </PageTitle>
    <SectionTitle mb={1}>10件の申請をインポートしようとしています</SectionTitle>
    <ConfirmTable />
    <Paragraph textAlign="center" mb={1}>
      この内容でよろしければ、実行してください
    </Paragraph>
    <MarginBase fitContent ml="auto" mr="auto">
      <FormActions>
        <Button
          large
          disabled={isRequesting}
          onClick={onConfirm}
          appearance="primary"
        >
          実行
        </Button>
        <Button large disabled={isRequesting} onClick={onBack}>
          やり直す
        </Button>
      </FormActions>
    </MarginBase>
  </>
);

export const ExecutionStep = ({
  headRef = React.createRef<HTMLHeadingElement>(),
}: {
  headRef: React.Ref<HTMLHeadingElement>;
}) => (
  <>
    <PageTitle textAlign="center" mb={1} ref={headRef}>
      申請のインポートを実行中です
    </PageTitle>
    <Paragraph mb={1} textAlign="center">
      しばらくこのままお待ちください
    </Paragraph>
    {/* TODO: プログレスバーか何かほしいですね */}
  </>
);

export const CompletedStep = ({
  headRef = React.createRef<HTMLHeadingElement>(),
  onRetry = () => {
    /* do nothing */
  },
}: {
  headRef: React.Ref<HTMLHeadingElement>;
  onRetry: () => void;
}) => (
  <>
    <PageTitle textAlign="center" mb={1} ref={headRef}>
      申請のインポートが完了しました
    </PageTitle>
    <Paragraph mb={1} textAlign="center">
      以下の内容でインポートしました
    </Paragraph>
    <ConfirmTable />
    <MarginBase fitContent ml="auto" mr="auto" mb={1}>
      <JumpButton large>一覧画面へ</JumpButton>
    </MarginBase>
    <MarginBase fitContent ml="auto" mr="auto">
      <Button onClick={onRetry} appearance="tertiary">
        再度インポートする
      </Button>
    </MarginBase>
  </>
);
