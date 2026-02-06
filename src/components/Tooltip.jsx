import { useState, useRef, useLayoutEffect, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export default function Tooltip({ children, tooltip }) {
    const [open, setOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);

    function updatePosition() {
        if (triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setCoords({
                top: rect.top - 8,
                left: rect.left + rect.width / 2,
            });
        }
    }

    const clampToViewport = useCallback(() => {
        if (!tooltipRef.current) return;
        const el = tooltipRef.current;
        const rect = el.getBoundingClientRect();
        const pad = 8;

        if (rect.right > window.innerWidth) {
            el.style.left = (window.innerWidth - rect.width - pad) + 'px';
            el.style.transform = 'translateY(-100%)';
        }
        if (rect.left < 0) {
            el.style.left = pad + 'px';
            el.style.transform = 'translateY(-100%)';
        }
    }, []);

    useLayoutEffect(() => {
        if (open) clampToViewport();
    }, [open, coords, clampToViewport]);

    useEffect(() => {
        if (!open) return;
        function onPointerDown(e) {
            if (triggerRef.current && !triggerRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('pointerdown', onPointerDown);
        return () => document.removeEventListener('pointerdown', onPointerDown);
    }, [open]);

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
                    ref={tooltipRef}
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
