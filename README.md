[世界を変えるためのデザインシステム](https://speakerdeck.com/ymrl/shi-jie-wobian-erutamefalsedezainsisutemu)です

# Getting started

## Install

npm i @freee_jp/vibes

## Usage

スタイルを適用するため node_modules/vibes/vibes.css を読み込んでください。

from Sass:

```
@import 'node_modules/vibes/vibes_2021';
```

from JavaScript with CSS Modules:

```js
import '@freee_jp/vibes/css';
```

スタイルを読み込んだら、vibes の React Component を次のように使うだけです。

```js
import * as React from 'react';
import { Breadcrumbs } from '@freee_jp/vibes';
import { CompanyLogoT } from 'somewhere';

export default function App() {
  return (
    <div className="app">
      <CompanyLogoT size="fit-width" fill="default"/>
      <Breadcrumbs
        links={[
          { title: '取引', url: '/hub_pages/deals' },
          { title: '自動で経理', url: '/wallet_txns/stream' },
        ]}
      />
    </div>
  );
}
```

# Contribution

[こちらのガイドライン](https://github.com/freee/vibes/blob/master/docs/Contribution.stories.mdx)を参照してください。
