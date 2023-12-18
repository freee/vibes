import * as React from 'react';

import { text, boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Button from '../buttons/Button';
import VisuallyHidden from './VisuallyHidden';

export default {
  component: VisuallyHidden,
};
export const WithKnobs = () => (
  <VisuallyHidden
    autoRead={boolean('autoRead', false, 'VisuallyHidden')}
    assertive={boolean('assertive', false, 'VisuallyHidden')}
    {...commonKnobs()}
  >
    {text(
      'Text',
      'これは見えないテキストです。視覚上の要素にはならないが、スクリーンリーダーでは読める必要のあるテキストがどうしても必要な場合に使用してください。',
      'VisuallyHidden'
    )}
  </VisuallyHidden>
);

//ここからは、 autoRead 機能をテストするためのあれこれ
type Props = Record<string, never>;
type State = {
  count: number;
};

//autoReadで読み上げるカウンター
class TestCounter extends React.Component<Props, State> {
  state = { count: 0 };
  constructor(props: Props) {
    super(props);
    this.handleCountUp = this.handleCountUp.bind(this);
  }

  handleCountUp() {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <VisuallyHidden
          autoRead={true}
          assertive={boolean('assertive', false, 'VisuallyHidden')}
          {...commonKnobs()}
        >
          カウンターは {this.state.count}です。
        </VisuallyHidden>
        <Button onClick={this.handleCountUp}>カウンター増やす</Button>
      </div>
    );
  }
}

export const AutoReadSample = () => <TestCounter />;

export const NotificationToScreenreaders = () => {
  const [message, setMessage] = React.useState<string>('');
  React.useEffect(() => {
    if (message) {
      // 連続で同じメッセージを読ませるために、メッセージがセットされたら適当な間隔を置いたあとで削除する
      const timeoutId = setTimeout(() => setMessage(''), 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [message]);

  return (
    <>
      <Button onClick={() => setMessage('こんにちは、私の声は聞こえますか？')}>
        スクリーンリーダーに通知を読ませる
      </Button>
      {message && <VisuallyHidden autoRead>{message}</VisuallyHidden>}
    </>
  );
};
