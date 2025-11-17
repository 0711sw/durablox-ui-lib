import { useState } from 'react';

export default function Tooltip({ children, tooltip }) {
    const [open, setOpen] = useState(false);

    if (tooltip) {
        return (
            <div
                className="relative inline-block cursor-pointer"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onClick={() => setOpen((prev) => !prev)}
            >
                {children}

                {open && (
                    <div className="absolute z-10 bottom-full mb-2 left-1/2 -translate-x-1/2
                        whitespace-nowrap rounded bg-gray-800 px-3 py-2 text-sm text-white
                        shadow-lg transition-opacity duration-300">
                        {tooltip}
                    </div>
                )}
            </div>
        );
    } else {
        return (<div className="relative inline-block">{children}</div>);
    }

}