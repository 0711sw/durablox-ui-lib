export function PrimaryButtonOutline({ href, to, children, className = '', onClick, ...rest }) {
    const isButtonLink = !href && !!onClick;

    const handleClick = (e) => {
        if (isButtonLink) {
            e.preventDefault();
        }
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <a
            href={href || '#'}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`inline-flex items-center gap-1 bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded ${className}`}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </a>
    );
}

export function ButtonOutline({ href, to, children, className = '', onClick, ...rest }) {
    const isButtonLink = !href && !!onClick;

    const handleClick = (e) => {
        if (isButtonLink) {
            e.preventDefault();
        }
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <a
            href={href || '#'}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`inline-flex items-center gap-1 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded ${className}`}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </a>
    );
}