import LogoIcon from './LogoIcon.jsx';
import { useTranslation } from "react-i18next";

export default function SibButton({ url }) {
    if (!url) {
        return null;
    }

    const { t } = useTranslation();

    return (
        <div className="py-3 gap-2 flex">
            <a
                href={url}
                target="_blank"
                className="text-sm inline-flex items-center gap-1 bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-600 hover:border-transparent rounded"
            >
                <LogoIcon className="size-4" /> {t('openSibDpp')}
            </a>
        </div>
    );
}