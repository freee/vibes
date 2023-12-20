import * as React from 'react';
import { DocsContainer } from '@storybook/addon-docs';
import '../vibes_2021.min.css';
import { VibesProvider, useLang } from '../src/utilities/VibesProvider';
import ReactDOM from 'react-dom';

const LanguagePortal = React.forwardRef(({ lang }, ref) =>
  ReactDOM.createPortal(<div lang={lang} ref={ref}></div>, document.body)
);

export const decorators = [
  (Story, context) => {
    const portalParentRef = React.useRef();
    return (
      <VibesProvider
        fixedLayout={!context.globals.responsive}
        lang={context.globals.lang}
        portalParentRef={portalParentRef}
      >
        <div lang={useLang()}>
          <Story />
        </div>
        <LanguagePortal lang={useLang()} ref={portalParentRef} />
      </VibesProvider>
    );
  },
];

export const parameters = {
  viewMode: 'docs',
  docs: {
    container: ({ children, context }) => (
      <div lang={useLang()}>
        <DocsContainer context={context}>{children}</DocsContainer>
      </div>
    ),
  },
  options: {
    storySort: {
      order: ['doc', ['Readme'], 'examples', 'lv2', 'lv1', 'deprecated'],
    },
  },
  github: {
    repository: 'freee/vibes',
    branch: 'main',
  },
};

export const globalTypes = {
  responsive: {
    description: 'Responsive',
    defaultValue: 'Off',
    toolbar: {
      title: 'Responsive',
      icon: 'circlehollow',
      items: [
        { value: true, title: 'On' },
        { value: false, title: 'Off' },
      ],
    },
  },
  lang: {
    description: 'Language',
    defaultValue: 'ja',
    toolbar: {
      title: 'Language',
      icon: 'globe',
      items: [
        { value: 'ja', title: '日本語 (ja)' },
        { value: 'en', title: 'English (en)' },
      ],
    },
  },
};
