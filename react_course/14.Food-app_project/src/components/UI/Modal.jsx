import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";


// do not open dialog with open prop - you woll miss out functions like backdrop
// use built in function you can access using useRef and useEffect
export default function Modal({ children, open, className = "", onClose }) {


  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className={`modal ${className}`}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
