import * as React from 'react';
import Forms from './Forms.mdx';
import {
  Button,
  CheckBox,
  DateField,
  DateInput,
  DescriptionList,
  DigitsInput,
  FloatingMessageBlock,
  FormActions,
  FormControl,
  FormControlGroup,
  InlineLink,
  ListTable,
  Loading,
  Message,
  MessageBlock,
  MessageIcon,
  NameField,
  Note,
  SelectBox,
  TaskDialog,
  TextField,
  ToggleButton,
  VisuallyHidden,
  WithDescriptionContent,
  WithBalloon,
  RequiredIcon,
} from '../src';
import { MdAdd } from 'react-icons/md';

export default {
  title: 'examples/Forms',
  parameters: { docs: { page: Forms } },
};

export const VerticalForm = () => (
  <>
    <DescriptionList
      mb={1}
      listContents={[
        {
          // 単体でフィールドを置くときはlabel の htmlFor を忘れない！！！
          title: (
            <label htmlFor="vertical-form__employee-code">従業員番号</label>
          ),
          value: <TextField id="vertical-form__employee-code" />,
        },
        // 姓名でフィールドが分かれているので、ここはlabelを使用しない
        {
          title: (
            <>
              氏名
              <RequiredIcon ml={0.5} />
            </>
          ),
          value: <NameField autoComplete="name" required />,
        },
        {
          // 姓名でフィールドが分かれているので、ここはlabelを使用しない
          title: '氏名（カタカナ）',
          value: (
            <WithDescriptionContent
              renderContent={() => (
                <NameField
                  lastNamePlaceholder="セイ"
                  firstNamePlaceholder="メイ"
                  label="氏名（カタカナ）"
                  autoComplete="name"
                  required
                />
              )}
              renderDescriptionContent={() => (
                <Note mt={0.5}>全角カタカナで入力してください</Note>
              )}
            />
          ),
        },
        {
          title: <label htmlFor="vertical-form__display-name">表示名</label>,
          value: (
            <WithDescriptionContent
              renderDescriptionContent={() => (
                <Note mt={0.5}>
                  空欄にした場合、氏名が表示名として使用されます
                </Note>
              )}
              renderContent={(descId) => (
                <TextField
                  // renderDescriptionContentの内容がフィールドの説明として渡されるよう、aria-describedbyに渡している
                  aria-describedby={descId}
                  id="vertical-form__display-name"
                />
              )}
            />
          ),
        },
        {
          // 「性別」はSelectBoxのラベルなので、htmlFor で紐付ける
          title: <label htmlFor="vertical-form__sex">性別</label>,
          value: (
            <>
              <SelectBox
                id="vertical-form__sex"
                width="small"
                options={[
                  { value: '0', name: '未選択' },
                  { value: '1', name: '男性' },
                  { value: '2', name: '女性' },
                  { value: '9', name: 'その他' },
                ]}
              />
              <CheckBox ml={1}>性別を自分以外のメンバーに公開する</CheckBox>
            </>
          ),
        },
        {
          // 複数のフィールドがあるので、ここはlabelを使用しない
          title: '住所',
          value: (
            <>
              <FormControlGroup>
                {/* フィールドがひとつの場合はfieldIdを指定 */}
                <FormControl
                  label="郵便番号"
                  fieldId="vertical-form__postal"
                  required
                  mb={1}
                  mr={1}
                >
                  <TextField
                    id="vertical-form__postal"
                    width="small"
                    autoComplete="postal-code"
                  />
                </FormControl>
                {/* フィールドがひとつの場合はfieldIdを指定 */}
                <FormControl
                  label="都道府県"
                  fieldId="vertical-form__pref"
                  required
                  mb={1}
                  mr={1}
                >
                  {/* 都道府県のSelectBoxを作るのめんどくさい（許して） */}
                  <TextField
                    id="vertical-form__pref"
                    width="medium"
                    autoComplete="address-level1"
                  />
                </FormControl>
                {/* フィールドがひとつの場合はfieldIdを指定 */}
                <FormControl
                  label="市区町村"
                  fieldId="vertical-form__city"
                  required
                  mb={1}
                  mr={1}
                >
                  {/* 都道府県のSelectBoxを作るのめんどくさい（許して） */}
                  <TextField
                    id="vertical-form__city"
                    width="medium"
                    autoComplete="address-level2"
                  />
                </FormControl>
              </FormControlGroup>
              <FormControlGroup>
                {/* フィールドがひとつの場合はfieldIdを指定 */}
                <FormControl
                  label="町名・番地"
                  fieldId="vertical-form__address-line-1"
                  required
                  mb={1}
                  mr={1}
                >
                  <TextField
                    id="vertical-form__address-line-1"
                    width="large"
                    autoComplete="street-address"
                  />
                </FormControl>
              </FormControlGroup>
              <FormControlGroup>
                {/* フィールドがひとつの場合はfieldIdを指定 */}
                <FormControl
                  label="建物名・部屋番号"
                  fieldId="vertical-form__address-line-2"
                  mb={1}
                  mr={1}
                >
                  <TextField
                    id="vertical-form__address-line-2"
                    width="large"
                    autoComplete="street-address"
                  />
                </FormControl>
              </FormControlGroup>
            </>
          ),
        },
        {
          // 年月日でフィールドが分かれているので、<label>を使用しない
          title: '生年月日',
          value: (
            <DateField
              selectedDate="1990-01-01"
              startDate="1900-01-01"
              endDate="2021-12-31"
              autoComplete="bday"
            />
          ),
        },
        {
          // 単体でフィールドを置くときはlabel の htmlFor を忘れない！！！
          title: (
            <label htmlFor="vertical-form__pension_num">基礎年金番号</label>
          ),
          value: (
            <WithDescriptionContent
              renderDescriptionContent={() => (
                <Note mt={0.5}>
                  基礎年金番号は10桁の数字で表され、4桁と6桁の組み合わせとなっています。
                  <InlineLink
                    href="https://www.nenkin.go.jp/faq/n_net/toroku/moshikomi/20150519.html"
                    target="_blank"
                  >
                    基礎年金番号の調べ方
                  </InlineLink>
                </Note>
              )}
              renderContent={(descId) => (
                <TextField
                  id="vertical-form__pension_num"
                  // renderDescriptionContentの内容がフィールドの説明として渡されるよう、aria-describedbyに渡している
                  aria-describedby={descId}
                />
              )}
            />
          ),
        },
      ]}
    />
    <FormActions>
      <Button appearance="primary">保存</Button>
      <Button>キャンセル</Button>
    </FormActions>
  </>
);

export const HorizontalForm = () => (
  <>
    <FormControlGroup>
      <FormControl mb={1} mr={1} label="種別">
        <ToggleButton name="horizontal-form__type" type="radio">
          収入
        </ToggleButton>
        <ToggleButton name="horizontal-form__type" type="radio">
          支出
        </ToggleButton>
      </FormControl>
      <FormControl
        mb={1}
        mr={1}
        label="口座"
        fieldId="horizontal-form__account"
      >
        <SelectBox
          id="horizontal-form__account"
          width="small"
          options={[
            { name: '現金' },
            { name: 'freee銀行' },
            { name: '五反田銀行' },
          ]}
        />
      </FormControl>
      <FormControl
        mb={1}
        mr={1}
        label="取引先"
        required
        help="入出金の相手となる会社名や個人名を入力します"
        fieldId="horizontal-form__partner"
      >
        <TextField id="horizontal-form__partner" required />
      </FormControl>
      <FormControl
        mb={1}
        mr={1}
        label="金額"
        required
        fieldId="horizontal-form__amount"
      >
        <DigitsInput id="horizontal-form__amount" />
      </FormControl>
      <FormControl
        mb={1}
        mr={1}
        label="摘要"
        fieldId="hofizontal-form__description"
        help="入出金の目的などを記載します"
      >
        <TextField width="large" id="hofizontal-form__description" required />
      </FormControl>
    </FormControlGroup>
    <FormActions>
      <Button appearance="primary">登録</Button>
    </FormActions>
  </>
);

export const ListForm = () => {
  const [values, setValues] = React.useState<
    {
      date: string;
      type: 'income' | 'expense';
      amount: number;
      note: string;
    }[]
  >([{ date: '2021-04-01', type: 'income', amount: 0, note: '' }]);
  return (
    <>
      <ListTable
        mb={0.5}
        headers={[
          { value: '日付' },
          { value: '収支' },
          // 通常のListTableでは金額は右寄せで配置するが、DigitsInput内が右寄せであり、DigitsInputの左端と揃えたいため、見出しセルは左寄せで配置する
          { value: '金額' },
          {
            value: (
              <>
                備考
                <MessageIcon label="ヘルプ" small>
                  メモとして自由に使える欄です
                </MessageIcon>
              </>
            ),
          },
          { value: <VisuallyHidden>行の操作</VisuallyHidden> },
        ]}
        rows={values.map((v, i) => ({
          cells: [
            {
              value: (
                <DateInput
                  value={v.date}
                  // 何行目の何の項目なのかわかるラベルにする
                  label={`${i + 1}行目の日付`}
                  width="small"
                  onChange={(d) =>
                    setValues([
                      ...values.slice(0, i),
                      { ...v, date: d },
                      ...values.slice(i + 1),
                    ])
                  }
                />
              ),
            },
            {
              value: (
                <SelectBox
                  value={v.type}
                  // 何行目の何の項目なのかわかるラベルにする
                  // 視覚的に見えるラベルとN:1なので、<label>要素は使用せず、aria-labelで表現する
                  label={`${i + 1}行目の収支`}
                  width="xSmall"
                  onChange={(e) =>
                    setValues([
                      ...values.slice(0, i),
                      {
                        ...v,
                        type:
                          e.target.value === 'income' ? 'income' : 'expense',
                      },
                      ...values.slice(i + 1),
                    ])
                  }
                  options={[
                    { value: 'income', name: '収入' },
                    { value: 'expense', name: '支出' },
                  ]}
                />
              ),
            },

            {
              value: (
                <DigitsInput
                  value={v.amount}
                  // 何行目の何の項目なのかわかるラベルにする
                  // 視覚的に見えるラベルとN:1なので、<label>要素は使用せず、aria-labelで表現する
                  label={`${i + 1}行目の金額`}
                  onChange={(a) =>
                    setValues([
                      ...values.slice(0, i),
                      { ...v, amount: a || 0 },
                      ...values.slice(i + 1),
                    ])
                  }
                />
              ),
            },
            {
              value: (
                <TextField
                  value={v.note}
                  // 何行目の何の項目なのかわかるラベルにする
                  // 視覚的に見えるラベルとN:1なので、<label>要素は使用せず、aria-labelで表現する
                  label={`${i + 1}行目の備考`}
                  width="large"
                  onChange={(e) =>
                    setValues([
                      ...values.slice(0, i),
                      { ...v, note: e.target.value },
                      ...values.slice(i + 1),
                    ])
                  }
                />
              ),
            },
            {
              alignRight: true,
              value: (
                <Button
                  onClick={() =>
                    setValues([...values.slice(0, i), ...values.slice(i + 1)])
                  }
                  appearance="tertiary"
                  small
                  disabled={values.length === 1}
                >
                  行を削除
                </Button>
              ),
            },
          ],
        }))}
      />
      <Button
        IconComponent={MdAdd}
        iconPosition="left"
        onClick={() =>
          setValues([
            ...values,
            { date: '2021-04-01', amount: 0, type: 'income', note: '' },
          ])
        }
        // ListTableと左端を揃えるため、左側に1.5remのマージンを持たせている。
        // 通常の使用では、ListTableの側に-1.5remのネガティブマージンを付けることも多いはず
        ml={1.5}
      >
        行を追加
      </Button>
    </>
  );
};

export const SubmitSuccessInteraction = () => {
  const [message, setMessage] = React.useState('');
  const [sending, setSending] = React.useState(false);

  return (
    <>
      <Note mb={1}>
        「保存」ボタンで送信中〜送信完了の動きを試すことができます
      </Note>
      <FormActions>
        <Button
          appearance="primary"
          disabled={sending}
          onClick={() => {
            setMessage('');
            setSending(true);
            setTimeout(() => {
              setMessage('保存しました');
              setSending(false);
            }, 600);
          }}
        >
          保存
        </Button>
        <Button disabled={sending}>キャンセル</Button>
      </FormActions>
      <Loading coverAll isLoading={sending} />
      {message && <FloatingMessageBlock success message={message} />}
    </>
  );
};

export const ErrorOnTaskDialog = () => {
  const [message, setMessage] = React.useState('');
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>編集ダイアログを開く</Button>
      <TaskDialog
        isOpen={modalOpen}
        title="編集"
        primaryButtonLabel="保存"
        closeButtonLabel="閉じる"
        onRequestClose={() => setModalOpen(false)}
        onPrimaryAction={() => {
          setMessage('');
          setSending(true);
          setError(false);
          setTimeout(() => {
            setMessage(
              '入力内容にエラーがあります。修正のうえ、再度お試しください'
            );
            setError(true);
            setSending(false);
          }, 600);
        }}
        disabled={sending}
      >
        {message && <MessageBlock error mb={1} message={message} />}
        <DescriptionList
          mr={-1.5}
          ml={-1.5}
          listContents={[
            {
              title: (
                <label htmlFor="submit-error-interaction__amount">
                  振込金額
                  <RequiredIcon ml={0.5} />
                </label>
              ),
              value: (
                <>
                  <DigitsInput
                    id="submit-error-interaction__amount"
                    required
                    error={error}
                    value={0}
                  />
                  {error && (
                    <Message ml={1} error>
                      0より大きい数値を入力してください
                    </Message>
                  )}
                </>
              ),
            },
            {
              title: (
                <label htmlFor="submit-error-interaction__account-from">
                  振込元口座
                  <RequiredIcon ml={0.5} />
                </label>
              ),
              value: (
                <>
                  <SelectBox
                    id="submit-error-interaction__account-from"
                    options={[
                      { name: '選択してください', value: 'default' },
                      { name: 'freee銀行' },
                      { name: '五反田銀行' },
                      { name: '品川信用金庫' },
                    ]}
                    error={error}
                    value="default"
                    required
                  />
                  {error && (
                    <Message ml={1} error>
                      口座を選択してください
                    </Message>
                  )}
                </>
              ),
            },
            {
              title: (
                <label htmlFor="submit-error-interaction__name-from">
                  振込名義
                </label>
              ),
              value: (
                <>
                  <WithDescriptionContent
                    renderContent={(descId) => (
                      <>
                        <TextField
                          id="submit-error-interaction__name-from"
                          // エラーメッセージがaria-desdribedbyになっているべきか悩ましいが、
                          // ここでは他のフィールドと仕様をあわせやすいよう、エラーメッセージをaria-describedに入れない判断をした
                          aria-describedby={descId}
                          error={error}
                          value="ふりーたろう"
                        />
                        {error && (
                          <Message ml={1} error>
                            半角カタカナで記入してください
                          </Message>
                        )}
                      </>
                    )}
                    renderDescriptionContent={() => (
                      <Note mt={0.5}>
                        振込先に通知される名義を半角カタカナで記入してください。空欄にした場合は口座名義がそのまま使用されます。
                      </Note>
                    )}
                  />
                </>
              ),
            },
            {
              title: '振込先口座',
              value: (
                <>
                  <FormControlGroup>
                    <FormControl
                      label="銀行コード"
                      fieldId="submit-error-interaction__bank_to"
                      help="銀行ごとに指定されている4桁の数字です"
                      required
                      mr={1.5}
                      mb={1}
                    >
                      <TextField
                        id="submit-error-interaction__bank_to"
                        width="small"
                        required
                        value={'123'}
                        error={error}
                      />
                      {error && (
                        <MessageIcon error label="エラー" ml={0.5}>
                          4桁の半角数字で記入してください
                        </MessageIcon>
                      )}
                    </FormControl>
                    <FormControl
                      label="支店コード"
                      fieldId="submit-error-interaction__branch_to"
                      help="支店ごとに指定されている3桁の数字です"
                      required
                      mr={1.5}
                      mb={1}
                    >
                      <TextField
                        id="submit-error-interaction__branch_to"
                        width="xSmall"
                        required
                        value=""
                        error={error}
                      />
                      {error && (
                        <MessageIcon error label="エラー" ml={0.5}>
                          3桁の半角数字で記入してください
                        </MessageIcon>
                      )}
                    </FormControl>
                  </FormControlGroup>
                  <FormControlGroup>
                    <FormControl
                      // ここだけエラー内容が思いつかんかった
                      label="口座種別"
                      fieldId="submit-error-interaction__account_type_to"
                      required
                      mr={1.5}
                    >
                      <SelectBox
                        id="submit-error-interaction__account_type_to"
                        options={[
                          { name: '普通' },
                          { name: '当座' },
                          { name: '定期' },
                        ]}
                        width="xSmall"
                        required
                      />
                    </FormControl>
                    <FormControl
                      label="口座番号"
                      fieldId="submit-error-interaction__account_number_to"
                      required
                      mr={1.5}
                      mb={1}
                    >
                      <TextField
                        id="submit-error-interaction__account_number_to"
                        width="medium"
                        required
                        value=""
                        error={error}
                      />
                      {error && (
                        <MessageIcon error label="エラー" ml={0.5}>
                          7桁の半角数字で記入してください
                        </MessageIcon>
                      )}
                    </FormControl>
                    <FormControl
                      label="口座名義"
                      fieldId="submit-error-interaction__account_name_to"
                      required
                      mr={1.5}
                      mb={1}
                    >
                      <TextField
                        id="submit-error-interaction__account_name_to"
                        width="medium"
                        required
                        value="ふりーはなこ"
                        error={error}
                      />
                      {error && (
                        <MessageIcon error label="エラー" ml={0.5}>
                          半角カタカナで記入してください
                        </MessageIcon>
                      )}
                    </FormControl>
                  </FormControlGroup>
                </>
              ),
            },
          ]}
        />
        <Loading coverAll isLoading={sending} />
        {message && <FloatingMessageBlock error message={message} />}
      </TaskDialog>
    </>
  );
};

export const SubmitErrorInteraction = () => {
  const [message, setMessage] = React.useState('');
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <>
      <Note mb={1}>
        「保存」ボタンで送信中〜エラー時の動きを試すことができます
      </Note>

      {message && <MessageBlock error mb={1} message={message} />}
      <DescriptionList
        mb={1}
        listContents={[
          {
            title: (
              <label htmlFor="submit-error-interaction__amount">
                振込金額
                <RequiredIcon ml={0.5} />
              </label>
            ),
            value: (
              <>
                <DigitsInput
                  id="submit-error-interaction__amount"
                  required
                  error={error}
                  value={0}
                />
                {error && (
                  <Message ml={1} error>
                    0より大きい数値を入力してください
                  </Message>
                )}
              </>
            ),
          },
          {
            title: (
              <label htmlFor="submit-error-interaction__account-from">
                振込元口座
                <RequiredIcon ml={0.5} />
              </label>
            ),
            value: (
              <>
                <SelectBox
                  id="submit-error-interaction__account-from"
                  options={[
                    { name: '選択してください', value: 'default' },
                    { name: 'freee銀行' },
                    { name: '五反田銀行' },
                    { name: '品川信用金庫' },
                  ]}
                  error={error}
                  value="default"
                  required
                />
                {error && (
                  <Message ml={1} error>
                    口座を選択してください
                  </Message>
                )}
              </>
            ),
          },
          {
            title: (
              <label htmlFor="submit-error-interaction__name-from">
                振込名義
              </label>
            ),
            value: (
              <>
                <WithDescriptionContent
                  renderContent={(descId) => (
                    <>
                      <TextField
                        id="submit-error-interaction__name-from"
                        // エラーメッセージがaria-desdribedbyになっているべきか悩ましいが、
                        // ここでは他のフィールドと仕様をあわせやすいよう、エラーメッセージをaria-describedに入れない判断をした
                        aria-describedby={descId}
                        error={error}
                        value="ふりーたろう"
                      />
                      {error && (
                        <Message ml={1} error>
                          半角カタカナで記入してください
                        </Message>
                      )}
                    </>
                  )}
                  renderDescriptionContent={() => (
                    <Note mt={0.5}>
                      振込先に通知される名義を半角カタカナで記入してください。空欄にした場合は口座名義がそのまま使用されます。
                    </Note>
                  )}
                />
              </>
            ),
          },
          {
            title: '振込先口座',
            value: (
              <>
                <FormControlGroup>
                  <FormControl
                    label="銀行コード"
                    fieldId="submit-error-interaction__bank_to"
                    help="銀行ごとに指定されている4桁の数字です"
                    required
                    mr={1.5}
                    mb={1}
                  >
                    <TextField
                      id="submit-error-interaction__bank_to"
                      width="small"
                      required
                      value={'123'}
                      error={error}
                    />
                    {error && (
                      <MessageIcon error label="エラー" ml={0.5}>
                        4桁の半角数字で記入してください
                      </MessageIcon>
                    )}
                  </FormControl>
                  <FormControl
                    label="支店コード"
                    fieldId="submit-error-interaction__branch_to"
                    help="支店ごとに指定されている3桁の数字です"
                    required
                    mr={1.5}
                    mb={1}
                  >
                    <TextField
                      id="submit-error-interaction__branch_to"
                      width="xSmall"
                      required
                      value=""
                      error={error}
                    />
                    {error && (
                      <MessageIcon error label="エラー" ml={0.5}>
                        3桁の半角数字で記入してください
                      </MessageIcon>
                    )}
                  </FormControl>
                </FormControlGroup>
                <FormControlGroup>
                  <FormControl
                    // ここだけエラー内容が思いつかんかった
                    label="口座種別"
                    fieldId="submit-error-interaction__account_type_to"
                    required
                    mr={1.5}
                  >
                    <SelectBox
                      id="submit-error-interaction__account_type_to"
                      options={[
                        { name: '普通' },
                        { name: '当座' },
                        { name: '定期' },
                      ]}
                      width="xSmall"
                      required
                    />
                  </FormControl>
                  <FormControl
                    label="口座番号"
                    fieldId="submit-error-interaction__account_number_to"
                    required
                    mr={1.5}
                    mb={1}
                  >
                    <TextField
                      id="submit-error-interaction__account_number_to"
                      width="medium"
                      required
                      value=""
                      error={error}
                    />
                    {error && (
                      <MessageIcon error label="エラー" ml={0.5}>
                        7桁の半角数字で記入してください
                      </MessageIcon>
                    )}
                  </FormControl>
                  <FormControl
                    label="口座名義"
                    fieldId="submit-error-interaction__account_name_to"
                    required
                    mr={1.5}
                    mb={1}
                  >
                    <TextField
                      id="submit-error-interaction__account_name_to"
                      width="medium"
                      required
                      value="ふりーはなこ"
                      error={error}
                    />
                    {error && (
                      <MessageIcon error label="エラー" ml={0.5}>
                        半角カタカナで記入してください
                      </MessageIcon>
                    )}
                  </FormControl>
                </FormControlGroup>
              </>
            ),
          },
        ]}
      />

      <FormActions>
        <Button
          appearance="primary"
          disabled={sending}
          onClick={() => {
            setMessage('');
            setSending(true);
            setError(false);
            setTimeout(() => {
              setMessage(
                '入力内容にエラーがあります。修正のうえ、再度お試しください'
              );
              setError(true);
              setSending(false);
            }, 600);
          }}
        >
          保存
        </Button>
        <Button disabled={sending}>キャンセル</Button>
      </FormActions>
      <Loading coverAll isLoading={sending} />
      {message && <FloatingMessageBlock error message={message} />}
    </>
  );
};

export const FrontendValidation = () => {
  const [value, setValue] = React.useState('');
  const validationMessage = !value.match(/^[ァ-ヾ]*$/)
    ? '全角カタカナで入力してください'
    : '';

  const [error, setError] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState('');
  const [serverValidationMessage, setServerValidationMessage] =
    React.useState('');
  const [sending, setSending] = React.useState(false);

  return (
    <>
      <FormControl
        fieldId="frontend-validation__corporate-name-kana"
        label="事業所名（カタカナ）"
        mb={1}
      >
        <WithBalloon
          border="notice"
          balloonDisabled={!validationMessage}
          renderBalloonContent={() => validationMessage}
          renderContent={() => (
            <TextField
              id="frontend-validation__corporate-name-kana"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              error={error}
            />
          )}
        />
        <VisuallyHidden autoRead>
          {/* スクリーンリーダー向けに、フロントエンドバリデーションのメッセージをVisuallyHiddenで配置しています
              `autoRead` を渡すことで、 `aria-live="polite"` になっているが、これが表示されているタイミングは入力中であることが多いため、自動的に読み上げられる可能性は低い。
              （サーバーサイドのものでいいので）バリデーション結果が正しく伝わるよう、代替手段を提供する必要がある。
              この例では保存ボタン押下後にFloatingMessageBlockで通知されるため、気付くことができる。
           */}
          {validationMessage}
        </VisuallyHidden>
        {serverValidationMessage && (
          <Message ml={1} error>
            {serverValidationMessage}
          </Message>
        )}
      </FormControl>
      <Button
        appearance="primary"
        disabled={sending}
        onClick={() => {
          setStatusMessage('');
          setServerValidationMessage('');
          setError(false);
          setSending(true);
          setTimeout(() => {
            setSending(false);
            if (!value.match(/^[ァ-ヾ]*$/)) {
              setError(true);
              setServerValidationMessage('全角カタカナで入力してください');
              setStatusMessage(
                '入力内容にエラーがあります。修正のうえ、再度お試しください'
              );
            } else {
              setStatusMessage('保存しました');
            }
          }, 600);
        }}
      >
        保存
      </Button>
      <Loading coverAll isLoading={sending} />
      {statusMessage && (
        <FloatingMessageBlock
          error={error}
          success={!error}
          message={statusMessage}
        />
      )}
    </>
  );
};

export const DisableButtonIfInvalid = () => {
  const [values, setValues] = React.useState({
    companyName: '',
    companyNameKana: '',
    notes: '',
  });
  const [errorMessages, setErrorMessages] = React.useState({
    companyName: '',
    companyNameKana: '',
    notes: '',
  });

  const validatedAsRequired =
    values.companyName.length > 0 && values.companyNameKana.length > 0;
  const validatedAsKatakana = !!values.companyNameKana.match(/^[ァ-ヾ]*$/);
  const [statusMessage, setStatusMessage] = React.useState('');
  const [sending, setSending] = React.useState(false);

  return (
    <>
      <DescriptionList
        mb={1}
        listContents={[
          {
            title: (
              <label htmlFor="disable-button-if-invalid__corporate-name">
                事業所名
                <RequiredIcon ml={0.5} />
              </label>
            ),
            value: (
              <>
                <TextField
                  id="disable-button-if-invalid__corporate-name"
                  value={values.companyName}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      companyName: e.target.value,
                    })
                  }
                  onBlur={() =>
                    setErrorMessages({
                      ...errorMessages,
                      companyName:
                        values.companyName.length > 0
                          ? ''
                          : '事業所名は必須です',
                    })
                  }
                  required
                  error={!!errorMessages.companyName}
                />
                {errorMessages.companyName && (
                  <Message error ml={1}>
                    {errorMessages.companyName}
                  </Message>
                )}
              </>
            ),
          },
          {
            title: (
              <label htmlFor="disable-button-if-invalid__corporate-name-kana">
                事業所名（カタカナ）
                <RequiredIcon ml={0.5} />
              </label>
            ),
            value: (
              <>
                <WithBalloon
                  border="notice"
                  balloonDisabled={validatedAsKatakana}
                  renderBalloonContent={() =>
                    !validatedAsKatakana ? '全角カタカナで入力してください' : ''
                  }
                  renderContent={() => (
                    <TextField
                      id="disable-button-if-invalid__corporate-name-kana"
                      value={values.companyNameKana}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          companyNameKana: e.target.value,
                        })
                      }
                      onBlur={() =>
                        setErrorMessages({
                          ...errorMessages,
                          companyNameKana: !validatedAsKatakana
                            ? '全角カタカナで入力してください'
                            : values.companyNameKana.length == 0
                            ? '事業所名（カタカナ）は必須です'
                            : '',
                        })
                      }
                      required
                      error={!!errorMessages.companyNameKana}
                    />
                  )}
                />
                <VisuallyHidden autoRead>
                  {/*
                    スクリーンリーダー向けに、フロントエンドバリデーションのメッセージをVisuallyHiddenで配置しています
                    `autoRead` を渡すことで、 `aria-live="polite"` になっているが、これが表示されているタイミングは入力中であることが多いため、自動的に読み上げられる可能性は低い。
                    （サーバーサイドのものでいいので）バリデーション結果が正しく伝わるよう、代替手段を提供する必要がある。
                    この例では保存ボタン押下後にFloatingMessageBlockで通知されるため、気付くことができる。
                  */}
                  {!validatedAsKatakana ? '全角カタカナで入力してください' : ''}
                </VisuallyHidden>
                {errorMessages.companyNameKana && (
                  <Message error ml={1}>
                    {errorMessages.companyNameKana}
                  </Message>
                )}
              </>
            ),
          },
          {
            title: (
              <label htmlFor="disable-button-if-invalid__notes">備考</label>
            ),
            value: (
              <TextField
                id="disable-button-if-invalid__notes"
                value={values.notes}
                onChange={(e) =>
                  setValues({ ...values, notes: e.target.value })
                }
                width="large"
              />
            ),
          },
        ]}
      />
      <WithDescriptionContent
        position="horizontal"
        renderContent={(descriptionId) => (
          <Button
            appearance="primary"
            disabled={sending || !(validatedAsKatakana && validatedAsRequired)}
            aria-describedby={descriptionId}
            onClick={() => {
              setStatusMessage('');
              setSending(true);
              setTimeout(() => {
                setSending(false);
                setStatusMessage('保存しました');
              }, 600);
            }}
          >
            保存
          </Button>
        )}
        renderDescriptionContent={() =>
          !validatedAsRequired ? (
            <Note ml={0.5}>必須項目をすべて入力してください</Note>
          ) : !validatedAsKatakana ? (
            <Note ml={0.5}>入力内容に誤りがあります。ご確認ください</Note>
          ) : undefined
        }
      />
      <Loading coverAll isLoading={sending} />
      {statusMessage && (
        <FloatingMessageBlock success message={statusMessage} />
      )}
    </>
  );
};
