import LogoColored from './LogoColored.jsx';

export default function Claim() {
    return (
        <div className="flex gap-1 pr-1">
            <LogoColored className="size-4" />
            <span>Powered by</span>
            <a className="font-semibold hover:underline" href="https://durablox.cloud" target="_blank">Durablox.cloud</a>
        </div>
    );
}