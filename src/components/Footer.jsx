import Claim from "./Claim.jsx";
import Tooltip from "./Tooltip.jsx";
import { useTranslation } from "react-i18next";

export default function Footer({ serverVersion, clientVersion, licensesUri, disclaimer }) {
  const { t } = useTranslation();

  return (
    <div>
      {disclaimer && <p className="lg:hidden text-xs text-gray-400 text-center mb-4 px-4">{disclaimer}</p>}
      <div className="flex text-gray-500 text-xs justify-between items-center">
        <Claim />
        {disclaimer && <span className="hidden lg:block text-gray-400 text-center px-4">{disclaimer}</span>}
        <div className="flex gap-2 shrink-0">
          <Tooltip tooltip={serverVersion}>{clientVersion}</Tooltip>
          <a className="font-semibold hover:underline cursor-pointer" href={licensesUri} target="_blank">{t('licenses')}</a>
        </div>
      </div>
    </div>
  );
}