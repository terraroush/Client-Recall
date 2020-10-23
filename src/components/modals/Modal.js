import React, { useState, useImperativeHandle, forwardRef } from "react"
import { createPortal } from "react-dom"
import "./Modal.css"

const modalElement = document.getElementById("modal-root")

export function Modal({ children, fade = false, defaultOpened = false }, ref) {
    const [ isOpen, setIsOpen ] = useState(defaultOpened)

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
    }), [])


    return createPortal(
        isOpen ? <div className="modal">{children}</div> : null ,
        modalElement
    )
}

export default forwardRef(Modal)