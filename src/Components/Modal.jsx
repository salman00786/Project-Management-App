import { createPortal } from "react-dom"
import { forwardRef, useImperativeHandle} from "react";
export default function Modal({children}){
    return createPortal(
        <dialog>
                {children}
        </dialog>, document.getElementById('modal-root')
    );
}