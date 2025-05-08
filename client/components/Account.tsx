import { SettingsIcon, TickIcon } from "@/assets/icons";
import { Avatar as AvatarContainer, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarProps } from "@/types";
import Tooltip from "./Tooltip";
import RenderIf from "./RenderIf";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const AvatarAccount = ({ props }: { props: AvatarProps }) => {
  const { src, alt, fallback, creator, tick, hasTooltip, render } = props;
  const tooltip: boolean = !!(hasTooltip && render);

  return (
    <>
      <AvatarContainer className="size-[40px]">
        <AvatarImage src={src} alt={alt || "avatar"} />
        <AvatarFallback>{fallback || "AV"}</AvatarFallback>
      </AvatarContainer>
      <div className="flex flex-col justify-around ml-2 items-start">
        <div className="flex items-center w-full">
          <span
            className={`text-[13px] max-w-[80px] truncate font-black text-left w-full ${
              tooltip ? "hover:underline" : ""
            }`}
          >
            Rain Rain
          </span>
          {tick && (
            <Tooltip content="Famous" arrow color="bg-foreground" classNameTrigger="cursor-pointer">
              <TickIcon className="ml-1 w-[15px] h-[15px]" />
            </Tooltip>
          )}
          {creator && (
            <Tooltip content="Creator" arrow color="bg-foreground" classNameTrigger="cursor-pointer">
              <SettingsIcon className="w-[18px] h-[18px] ml-1 fill-gray-500" />
            </Tooltip>
          )}
        </div>
        <span className="w-full text-[13px] font-semibold text-foreground/50 text-left truncate max-w-[80px]">
          @RainRain
        </span>
      </div>
    </>
  );
};

const Account = ({ props }: { props: AvatarProps }) => {
  const { src, alt, fallback, creator, tick, hasTooltip, render } = props;
  const tooltip: boolean = !!(hasTooltip && render);

  return (
    <>
      <RenderIf value={!tooltip}>
        <div className="flex">
          <AvatarAccount props={{ src, alt, creator, fallback, hasTooltip, render, tick }} />
        </div>
      </RenderIf>
      <RenderIf value={tooltip}>
        <div className="flex cursor-pointer">
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex justify-center items-center">
                <AvatarAccount props={{ src, alt, creator, fallback, hasTooltip, render, tick }} />
              </div>
            </HoverCardTrigger>
            <HoverCardContent align="start" className="shadow-lg w-72">
              {render}
            </HoverCardContent>
          </HoverCard>
        </div>
      </RenderIf>
    </>
  );
};

export default Account;
