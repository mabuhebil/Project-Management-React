import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal =forwardRef(function Modal({children , caption} , ref){
   const dialog = useRef() 

   useImperativeHandle(ref ,() => {
    return {
        open(){
            dialog.current.showModal();
        }
    }
   })

   return createPortal (
    <dialog ref={dialog}>
        {children}
        <form method="dialog">
            <button> {caption}</button>
        </form>
    </dialog> ,
    document.getElementById('modal-root')
   )
})
export default Modal;

