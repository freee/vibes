import * as React from 'react';
import Button from '../../lv1/buttons/Button';

type ToggleDialogProps = {
  render: (isOpen: boolean, toggle: () => void) => void;
};

const ToggleDialog: React.FC<ToggleDialogProps> = (
  props: ToggleDialogProps
) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <>
      <Button onClick={toggle}>open</Button>
      {props.render(isOpen, toggle)}
    </>
  );
};
export default ToggleDialog;
