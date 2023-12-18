import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import { VerticalSteps } from './VerticalSteps';
import {
  Button,
  Paragraph,
  HStack,
  OptionButton,
  RadioButton,
  VStack,
  TextField,
  CheckBox,
} from '../../lv1';
import { DescriptionList, FormattedTextField, FormControl } from '..';

export default {
  component: VerticalSteps,
};

export const StepperComponent = () => {
  const [stepIndex, setStepIndex] = React.useState(0);
  const [formValues, setFormValues] = React.useState({
    paymentMethod: 'prepayment',
    postalCode: '',
    address: '',
    name: '',
    cool: false,
  });
  return (
    <VerticalSteps
      currentStepIndex={stepIndex}
      stepHeadlineLevel={select(
        'stepHeadlineLevel',
        {
          '1': 1,
          '2': 2,
          '3': 3,
          '4': 4,
          '5': 5,
          '6': 6,
          '-1': -1,
          undefined: undefined,
        },

        undefined,
        'VerticalSteps'
      )}
      steps={[
        {
          title: '料金の支払い方法を選んでください',
          content: (
            <>
              <HStack>
                <OptionButton
                  size="large"
                  checked={formValues.paymentMethod === 'prepayment'}
                >
                  <RadioButton
                    name="paymentMethod"
                    value="prepaid"
                    checked={formValues.paymentMethod === 'prepayment'}
                    onChange={(e) =>
                      e.target.checked &&
                      setFormValues({
                        ...formValues,
                        paymentMethod: 'prepayment',
                      })
                    }
                  >
                    元払い
                  </RadioButton>
                </OptionButton>
                <OptionButton
                  size="large"
                  checked={formValues.paymentMethod === 'postpayment'}
                >
                  <RadioButton
                    name="paymentMethod"
                    value="postpayment"
                    checked={formValues.paymentMethod === 'postpayment'}
                    onChange={(e) =>
                      e.target.checked &&
                      setFormValues({
                        ...formValues,
                        paymentMethod: 'postpayment',
                      })
                    }
                  >
                    着払い
                  </RadioButton>
                </OptionButton>
              </HStack>
            </>
          ),
          contentSummary: (
            <Paragraph>
              {formValues.paymentMethod === 'postpayment' ? '着' : '元'}払い
            </Paragraph>
          ),
          actions: (
            <Button
              appearance="primary"
              onClick={() => setStepIndex(stepIndex + 1)}
            >
              次へ
            </Button>
          ),
        },
        {
          title: '送り先情報を入力してください',
          content: (
            <VStack>
              <FormControl label="郵便番号" fieldId="stepper-2-postal-code">
                <FormattedTextField
                  preset="postalCode"
                  id="stepper-2-postal-code"
                  value={formValues.postalCode}
                  onChange={(e) =>
                    setFormValues({ ...formValues, postalCode: e.target.value })
                  }
                  autoComplete="postal-code"
                />
              </FormControl>
              <FormControl label="住所" fieldId="stepper-2-address">
                <TextField
                  id="stepper-2-address"
                  width="large"
                  value={formValues.address}
                  onChange={(e) =>
                    setFormValues({ ...formValues, address: e.target.value })
                  }
                  autoComplete="street-address"
                />
              </FormControl>
              <FormControl label="受取人" fieldId="stepper-2-postal-code">
                <TextField
                  id="stepper-2-postal-code"
                  width="large"
                  value={formValues.name}
                  onChange={(e) =>
                    setFormValues({ ...formValues, name: e.target.value })
                  }
                />
              </FormControl>
            </VStack>
          ),
          contentSummary: (
            <>
              {formValues.postalCode ? (
                <Paragraph>〒{formValues.postalCode}</Paragraph>
              ) : (
                ''
              )}
              {formValues.address || formValues.name ? (
                <Paragraph>
                  {formValues.address} {formValues.name}
                </Paragraph>
              ) : (
                ''
              )}
            </>
          ),
          actions: (
            <HStack>
              <Button
                appearance="primary"
                onClick={() => setStepIndex(stepIndex + 1)}
              >
                次へ
              </Button>
              <Button onClick={() => setStepIndex(stepIndex - 1)}>戻る</Button>
            </HStack>
          ),
        },
        {
          title: 'オプションを選択しましょう',
          content: (
            <OptionButton checked={formValues.cool} size="medium">
              <CheckBox
                name="cool"
                checked={formValues.cool}
                onChange={(e) =>
                  setFormValues({ ...formValues, cool: e.target.checked })
                }
              >
                クール便を使用する
              </CheckBox>
            </OptionButton>
          ),
          contentSummary: (
            <>
              {formValues.cool ? <Paragraph>クール便を使用する</Paragraph> : ''}
            </>
          ),
          actions: (
            <HStack>
              <Button
                appearance="primary"
                onClick={() => setStepIndex(stepIndex + 1)}
              >
                次へ
              </Button>
              <Button onClick={() => setStepIndex(stepIndex - 1)}>戻る</Button>
            </HStack>
          ),
        },
        {
          title: '内容を確認して、送信しましょう',
          content: (
            <>
              <DescriptionList
                listContents={[
                  {
                    title: '支払い方法',
                    value:
                      formValues.paymentMethod === 'postpayment'
                        ? '着払い'
                        : '元払い',
                  },
                  {
                    title: '送付先',
                    value: (
                      <>
                        {formValues.postalCode ? (
                          <Paragraph>〒{formValues.postalCode}</Paragraph>
                        ) : (
                          ''
                        )}
                        {formValues.address || formValues.name ? (
                          <Paragraph>
                            {formValues.address} {formValues.name}
                          </Paragraph>
                        ) : (
                          ''
                        )}
                      </>
                    ),
                  },
                  {
                    title: 'オプション',
                    value: formValues.cool ? 'クール便を使用する' : '',
                  },
                ]}
              />
            </>
          ),
          actions: (
            <HStack>
              <Button appearance="primary">送信</Button>
              <Button onClick={() => setStepIndex(stepIndex - 1)}>戻る</Button>
            </HStack>
          ),
        },
      ]}
      {...commonKnobs()}
    />
  );
};
