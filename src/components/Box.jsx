export default function Box({ children }) {
    return (
        <div className="rounded-lg bg-white p-4 border border-1 border-gray-200">
            {children}
        </div>
    );
}

Box.Heading = function ({ className, children }) {
    return (
        <h2 className={`text-xl font-bold tracking-tight text-gray-800 pb-2 ${className}`}>
            {children}
        </h2>
    );
}