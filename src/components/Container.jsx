import React from "react";
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Container({ children, loading, message }) {
    const childrenArray = React.Children.toArray(children);

    const footer = childrenArray.find(child => {
        return React.isValidElement(child) && child.type === 'footer';
    });

    const body = childrenArray.filter(child => {
        return !React.isValidElement(child) || child.type !== 'footer';
    });

    return (
        <div className="flex items-stretch inset-0 bg-gray-50 min-h-screen p-4 xl:pt-10">
            <div className="flex flex-col flex-1 max-w-7xl mx-auto gap-4 justify-between">
                <Body children={body} loading={loading} message={message} />
                <div>{footer}</div>
            </div>
        </div>
    );
}

function Body({loading, message, children}) {
    if (loading) {
        return (
            <div className="flex flex-col flex-1 justify-center items-center gap-4">
                <ArrowPathIcon className="h-12 w-12 animate-spin text-gray-400" />
                {message && <p className="text-center text-lg text-gray-600">{message}</p>}
            </div>
        );
    } else if (message) {
        return (
            <div className="flex flex-col flex-1 justify-center items-center gap-4">
                <p className="text-center text-lg text-gray-600">{message}</p>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col gap-4">{children}</div>
        );
    }
}