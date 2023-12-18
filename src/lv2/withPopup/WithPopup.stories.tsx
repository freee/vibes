import * as React from 'react';

import WithPopup from './WithPopup';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import PopupBase from '../../lv1/bases/PopupBase';
import Button from '../../lv1/buttons/Button';
import Paragraph from '../../lv1/typography/Paragraph';
import TextField from '../../lv1/forms/TextField';
import TaskDialog from '../dialogs/TaskDialog';
import Container from '../../lv1/bases/Container';

export default {
  component: WithPopup,
};

export const WithWithPopupComponent = () => {
  const disabled = boolean('disabled', false, 'WithPopup');
  return (
    <WithPopup
      render={(popupId, isOpen, controlRef, togglePopup) => (
        <span
          // 例として、<span> で実装した例を載せています。
          // あくまでメニューの開閉ボタンはボタンであり、本来<button>で実装されるべきことに注意してください。
          role="button"
          // キーボード操作が可能になるよう、フォーカス可能にする
          tabIndex={0}
          // <span>ではクリックイベントが発火しないため、Enterキー押下時にtogglePopupする
          onKeyDown={(e) => e.key === 'Enter' && togglePopup(!isOpen)}
          // <span> なのでaria-disabledを使用しています。
          // <button> で実装する場合は、WithFilterableDropdownに渡すのと同じ条件をボタンのdisabledにも渡してください
          aria-disabled={disabled}
          aria-controls={popupId}
          aria-haspopup={true}
          aria-expanded={isOpen}
          ref={controlRef as React.RefObject<HTMLButtonElement>}
        >
          開閉ボタン
        </span>
      )}
      renderPopup={(requestClose, firstSelectableItemRef) => (
        <PopupBase paddingSize="small">
          <Button
            ref={firstSelectableItemRef as React.RefObject<HTMLButtonElement>}
            onClick={() => requestClose()}
            mr={1}
          >
            ボタン1
          </Button>
          <Button onClick={() => requestClose()}>ボタン2</Button>
        </PopupBase>
      )}
      disabled={disabled}
      onOpen={action('open')}
      onClose={action('close')}
      {...commonKnobs()}
    ></WithPopup>
  );
};

export const MultipleComponents = () => (
  <>
    <WithPopup
      render={(popupId, isOpen, controlRef) => (
        <Button
          aria-controls={popupId}
          aria-haspopup={true}
          aria-expanded={isOpen}
          ref={controlRef as React.RefObject<HTMLButtonElement>}
        >
          開閉ボタン
        </Button>
      )}
      renderPopup={(requestClose, firstSelectableItemRef) => (
        <PopupBase paddingSize="small">
          <Button
            ref={firstSelectableItemRef as React.RefObject<HTMLButtonElement>}
            onClick={() => requestClose()}
            mr={1}
          >
            ボタン1
          </Button>
          <Button onClick={() => requestClose()}>ボタン2</Button>
        </PopupBase>
      )}
      disabled={boolean('disabled', false, 'WithPopup')}
      {...commonKnobs()}
    ></WithPopup>
    <WithPopup
      render={(popupId, isOpen, controlRef) => (
        <Button
          aria-controls={popupId}
          aria-haspopup={true}
          aria-expanded={isOpen}
          ref={controlRef as React.RefObject<HTMLButtonElement>}
        >
          開閉ボタン
        </Button>
      )}
      renderPopup={(requestClose, firstSelectableItemRef) => (
        <PopupBase paddingSize="small">
          <Button
            ref={firstSelectableItemRef as React.RefObject<HTMLButtonElement>}
            onClick={() => requestClose()}
            mr={1}
          >
            ボタン1
          </Button>
          <Button onClick={() => requestClose()}>ボタン2</Button>
        </PopupBase>
      )}
      disabled={boolean('disabled', false, 'WithPopup')}
      {...commonKnobs()}
    ></WithPopup>
  </>
);

export const WithoutFirstSelectableItemRef = () => (
  <WithPopup
    render={(popupId, isOpen, controlRef) => (
      <Button
        aria-controls={popupId}
        aria-haspopup={true}
        aria-expanded={isOpen}
        ref={controlRef as React.RefObject<HTMLButtonElement>}
      >
        開閉ボタン
      </Button>
    )}
    renderPopup={(requestClose) => (
      <PopupBase paddingSize="small">
        <Paragraph mb={1}>
          firstSelectableItemRef
          使わない場合、最初にTabキーでフォーカスするのはPopupになります。
        </Paragraph>
        <Paragraph mb={1}>
          ボタンやフォームコントロールより前に説明を乗せたりする場合はfirstSelectableItemRefを使わないようにすると良いです
        </Paragraph>
        <Button onClick={() => requestClose()} mr={1}>
          ボタン1
        </Button>
        <Button onClick={() => requestClose()}>ボタン2</Button>
      </PopupBase>
    )}
    disabled={boolean('disabled', false, 'WithPopup')}
    {...commonKnobs()}
  ></WithPopup>
);
export const InBigBlock = () => (
  <div style={{ padding: '20rem 80rem' }}>
    <WithPopup
      render={(popupId, isOpen, controlRef) => (
        <Button
          aria-controls={popupId}
          aria-haspopup={true}
          aria-expanded={isOpen}
          ref={controlRef as React.RefObject<HTMLButtonElement>}
        >
          開閉ボタン
        </Button>
      )}
      renderPopup={(requestClose, firstSelectableItemRef) => (
        <PopupBase paddingSize="small">
          <Button
            ref={firstSelectableItemRef as React.RefObject<HTMLButtonElement>}
            onClick={() => requestClose()}
            mr={1}
          >
            ボタン1
          </Button>
          <Button onClick={() => requestClose()}>ボタン2</Button>
        </PopupBase>
      )}
      disabled={boolean('disabled', false, 'WithPopup')}
      {...commonKnobs()}
    ></WithPopup>
  </div>
);

const TaskDialogSample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open dialog</Button>

      <TaskDialog
        onRequestClose={() => {
          setIsOpen(false);
        }}
        title="TaskDialog"
        isOpen={isOpen}
        closeButtonLabel="閉じる"
      >
        <div style={{ height: '5rem' }}></div>
        <WithPopup
          render={(popupId, isOpen, controlRef) => (
            <Button
              aria-controls={popupId}
              aria-haspopup={true}
              aria-expanded={isOpen}
              ref={controlRef as React.RefObject<HTMLButtonElement>}
            >
              開閉ボタン
            </Button>
          )}
          renderPopup={(requestClose, firstSelectableItemRef) => (
            <PopupBase paddingSize="small">
              <Button
                ref={
                  firstSelectableItemRef as React.RefObject<HTMLButtonElement>
                }
                onClick={() => requestClose()}
                mr={1}
              >
                ボタン1
              </Button>
              <Button onClick={() => requestClose()}>ボタン2</Button>
            </PopupBase>
          )}
          disabled={boolean('disabled', false, 'WithPopup')}
          {...commonKnobs()}
        ></WithPopup>
        <div style={{ height: '40rem' }}></div>
      </TaskDialog>
    </>
  );
};

export const InsideTaskDialog = () => <TaskDialogSample />;
export const InsideContainer = () => (
  <Container>
    <div style={{ height: '5rem' }}></div>
    <WithPopup
      render={(popupId, isOpen, controlRef) => (
        <Button
          aria-controls={popupId}
          aria-haspopup={true}
          aria-expanded={isOpen}
          ref={controlRef as React.RefObject<HTMLButtonElement>}
        >
          開閉ボタン
        </Button>
      )}
      renderPopup={(requestClose, firstSelectableItemRef) => (
        <PopupBase paddingSize="small">
          <Button
            ref={firstSelectableItemRef as React.RefObject<HTMLButtonElement>}
            onClick={() => requestClose()}
            mr={1}
          >
            ボタン1
          </Button>
          <Button onClick={() => requestClose()}>ボタン2</Button>
        </PopupBase>
      )}
      disabled={boolean('disabled', false, 'WithPopup')}
      {...commonKnobs()}
    ></WithPopup>
    <div style={{ height: '40rem' }}></div>
  </Container>
);

export const OpenCloseCallback = () => {
  const [log, setLog] = React.useState<string[]>([]);
  return (
    <>
      <WithPopup
        renderPopup={(requestClose) => (
          <PopupBase>
            <Button onClick={() => requestClose()}>閉じる</Button>
          </PopupBase>
        )}
        render={(popupId, isOpen, controlRef) => (
          <Button
            aria-controls={popupId}
            aria-expanded={isOpen}
            ref={controlRef as React.RefObject<HTMLButtonElement>}
          >
            Open Popup
          </Button>
        )}
        onOpen={() => setLog(log.concat(['open']))}
        onClose={() => setLog(log.concat(['close']))}
      />
      <output>
        {log.map((e, i) => (
          <div key={i}>{e}</div>
        ))}
      </output>
    </>
  );
};

const InputSupportExample = () => {
  const [handling, setHandling] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<number>(0);

  React.useEffect(() => {
    if (handling) {
      const closeMenu = () => {
        setHandling(false);
      };
      window.addEventListener('click', closeMenu);
      return () => window.removeEventListener('click', closeMenu);
    }
  }, [handling]);
  return (
    <WithPopup
      render={(popupId, isOpen, controlRef, toggleOpen) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <span
          onClick={(e) => e.stopPropagation()}
          onKeyDown={() => {
            /* do nothing */
          }}
        >
          <TextField
            label="数字"
            value={`${value}`}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-controls={popupId}
            aria-haspopup={true}
            aria-expanded={isOpen}
            role="combobox"
            ref={controlRef as React.RefObject<HTMLInputElement>}
            onFocus={() => {
              if (!handling) {
                toggleOpen(true);
                setHandling(true);
              }
            }}
            onBlur={() => {
              if (!isOpen) {
                setHandling(false);
              }
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 27 /* ESC */) {
                toggleOpen(false);
              } else if (e.keyCode !== 9 /* TAB */) {
                toggleOpen(true);
              }
            }}
          />
        </span>
      )}
      renderPopup={(_requestClose, firstSelectableItemRef) => (
        <PopupBase paddingSize="small">
          <Button
            ref={firstSelectableItemRef as React.RefObject<HTMLButtonElement>}
            onClick={() => {
              setValue(value + 1);
            }}
            mr={1}
          >
            +1
          </Button>
          <Button
            onClick={() => {
              setValue(value + 10);
            }}
            mr={1}
          >
            +10
          </Button>
          <Button
            onClick={() => {
              setValue(value + 100);
            }}
            mr={1}
          >
            +100
          </Button>
        </PopupBase>
      )}
      disabled={boolean('disabled', false, 'WithPopup')}
      {...commonKnobs()}
    ></WithPopup>
  );
};

export const InputSupport = () => (
  <>
    <Paragraph>
      入力サポートUIみたいなものを作れないか実験してみているサンプル
    </Paragraph>
    <InputSupportExample />
  </>
);
