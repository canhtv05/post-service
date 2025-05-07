import { Settings } from "lucide-react";

import { TickIcon } from "@/assets/icons";
import { Avatar as AvatarContainer, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarProps } from "@/types";
import Tooltip from "./Tooltip";

const Avatar = ({ props }: { props: AvatarProps }) => {
  const { src, alt, fallback, creator, tick } = props;

  return (
    <div className="flex">
      <AvatarContainer className="size-[40px]">
        <AvatarImage src={src} alt={alt || "avatar"} />
        <AvatarFallback>{fallback || "AV"}</AvatarFallback>
      </AvatarContainer>
      <div className="flex flex-col items-center justify-around ml-2">
        <div className="flex items-center">
          <h3 className="lg:text-14-bold text-12-bold">Rain Rain</h3>
          {tick && (
            <Tooltip content="Pro" arrow color="bg-foreground" classNameTrigger="cursor-pointer">
              <TickIcon className="ml-1" />
            </Tooltip>
          )}
          {creator && (
            <Tooltip content="Creator" arrow color="bg-foreground" classNameTrigger="cursor-pointer">
              <Settings className="w-[16px] h-[16px] ml-1 stroke-gray-500" />
            </Tooltip>
          )}
        </div>
        <span className="w-full lg:text-14-semibold text-12-semibold">@RainRain</span>
      </div>
    </div>
  );
};

export default Avatar;
