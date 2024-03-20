import { useState } from 'react';
import { ButtonOutline } from '../../styles/components/Buttons';
import {
  DialogBackground,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogWrapper,
} from '../../styles/components/Dialog';

interface IDialog extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  openButtonLabel: string;
  closeButtonLabel: string;
  buttonColor?: string;
}

const Dialog: React.FC<IDialog> = ({
  title,
  openButtonLabel,
  closeButtonLabel,
  buttonColor = '',
  children,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <ButtonOutline $buttonColor={buttonColor} onClick={toggleOpen}>{openButtonLabel}</ButtonOutline>

      {open && (
        <DialogBackground>
          <DialogWrapper>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            <DialogContent>{children}</DialogContent>
            <DialogFooter>
              <ButtonOutline onClick={toggleOpen}>
                {closeButtonLabel}
              </ButtonOutline>
            </DialogFooter>
          </DialogWrapper>
        </DialogBackground>
      )}
    </>
  );
};

export default Dialog;
