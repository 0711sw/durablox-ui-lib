export default function Link({ href, to, children, className = '', onClick, ...rest }) {
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
            className={`font-semibold inline-flex items-center gap-1 text-blue-600 hover:underline ${className}`}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </a>
    );
}