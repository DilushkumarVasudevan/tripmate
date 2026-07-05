import type { ReactNode } from "react";
import "./Modal.css";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function Modal({
    isOpen,
    onClose,
    children,
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">

            <div className="modal-container">

                <button
                    className="modal-close"
                    onClick={onClose}
                >
                    ×
                </button>

                {children}

            </div>

        </div>
    );
}