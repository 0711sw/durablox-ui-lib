import Claim from "./Claim.jsx";
import Tooltip from "./Tooltip.jsx";
import { useTranslation } from "react-i18next";

export default function Footer({ serverVersion, clientVersion, licensesUri }) {
  const { t } = useTranslation();

  return (
    <div className="flex text-gray-500 text-xs justify-between">
      <Claim />
      <div className="flex gap-2">
        <Tooltip tooltip={serverVersion}>{clientVersion}</Tooltip>
        <a className="font-semibold hover:underline cursor-pointer" href={licensesUri} target="_blank">{t('licenses')}</a>
      </div>
    </div>
  );
}