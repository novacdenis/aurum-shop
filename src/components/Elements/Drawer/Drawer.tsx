import { useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useLockedBody } from "usehooks-ts";

import { Portal } from "@/components/Portal";
import { clsx } from "@/utils";

export interface DrawerProps {
  placement?: "left" | "right";
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  allowBackdropClose?: boolean;
  allowEscClose?: boolean;
  unmountOnExit?: boolean;
  children: JSX.Element | JSX.Element[];
}

export const Drawer: React.FC<DrawerProps> = ({
  placement = "left",
  className,
  allowEscClose = true,
  allowBackdropClose = true,
  unmountOnExit,
  isOpen,
  onClose,
  children,
}) => {
  const [, setLocked] = useLockedBody(false, "__next");

  const drawerRef = useRef<HTMLDivElement | null>(null);

  const backdropCloseHandler = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    ev.preventDefault();
    ev.stopPropagation();

    if (allowBackdropClose) onClose();
  };

  useEffect(() => {
    const escCloseHandler = (ev: KeyboardEvent) => {
      if (allowEscClose && ev.key === "Escape") onClose();
    };

    window.addEventListener("keydown", escCloseHandler);

    return () => {
      window.removeEventListener("keydown", escCloseHandler);
    };
  }, [onClose, allowEscClose]);

  useEffect(() => {
    setLocked(isOpen);
  }, [isOpen, setLocked]);

  return (
    <Portal>
      <CSSTransition
        in={isOpen}
        timeout={200}
        nodeRef={drawerRef}
        unmountOnExit={unmountOnExit}
        mountOnEnter={!unmountOnExit}
      >
        <div ref={drawerRef} className={clsx("drawer", placement, className)}>
          <div className="drawer__backdrop" onClick={backdropCloseHandler} />
          <div className="drawer__body">{children}</div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
