import * as React from 'react';
declare type ToggleDialogProps = {
    render: (isOpen: boolean, toggle: () => void) => void;
};
declare const ToggleDialog: React.FC<ToggleDialogProps>;
export default ToggleDialog;
