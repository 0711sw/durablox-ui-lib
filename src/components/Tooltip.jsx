import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Tooltip({ children, tooltip }) {
    const [open, setOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef(null);

    function updatePosition() {
        if (triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setCoords({
                top: rect.top - 8,
                left: rect.left + rect.width / 2,
            });
        }
    }

    if (!tooltip) {
        return <div className="relative inline-block">{children}</div>;
    }

    return (
        <div
            ref={triggerRef}
            className="relative inline-block cursor-pointer"
            onMouseEnter={() => { updatePosition(); setOpen(true); }}
            onMouseLeave={() => setOpen(false)}
            onClick={() => { updatePosition(); setOpen((prev) => !prev); }}
        >
            {children}
            {open && createPortal(
                <div
                    className="fixed z-50 rounded bg-gray-800 px-3 py-2 text-sm text-white shadow-lg pointer-events-none"
                    style={{
                        top: coords.top,
                        left: coords.left,
                        transform: 'translate(-50%, -100%)',
                        maxWidth: 'min(90vw, 400px)',
                    }}
                >
                    {tooltip}
                </div>,
                document.body
            )}
        </div>
    );
}
