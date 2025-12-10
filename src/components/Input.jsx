export default function Input({ id, type = "text", name, autoComplete, value, onChange, placeholder = "", className = "" }) {
    return <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-1 border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${className}`}
    />
}

Input.Label = function({ htmlFor = "", text, className = "" }) {
    return <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`}>
        {text}
    </label>;
}