import { Trans, useTranslation } from "react-i18next";

export default function Translated({ i18nKey, ...fields }) {
    const { t } = useTranslation();

    console.log(i18nKey, fields);

    return (
        <Trans
            i18nKey={i18nKey}
            values={{ ...fields }}
            components={{
                p: <p className="mb-2 last:mb-0" />,
                b: <span className="font-semibold" />,
            }}
        />
    );
}