import * as React from 'react';

import TreeFoldingButtonCell from './TreeFoldingButtonCell';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: TreeFoldingButtonCell,
};

export const TreeFoldingButtonCellComponent = () => (
  <table>
    <tbody>
      <tr>
        <TreeFoldingButtonCell
          folded={boolean('folded', false, 'TreeFoldingButtonCell')}
          onToggleFolded={action('toggleFolded')}
        />
      </tr>
    </tbody>
  </table>
);
