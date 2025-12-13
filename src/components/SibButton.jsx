import LogoIcon from './LogoIcon.jsx';
import { useTranslation } from "react-i18next";

export default function SibButton({ url, className = '' }) {
    if (!url) {
        return null;
    }

    const { t } = useTranslation();

    return (
        <div className={`flex gap-2 ${className}`}>
            <a
                href={url}
                target="_blank"
                className="text-sm inline-flex items-center gap-1 bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-1 px-2 border border-blue-600 hover:border-transparent rounded"
            >
                <LogoIcon className="size-4" /> {t('openSibDpp')}
            </a>
        </div>
    );
}