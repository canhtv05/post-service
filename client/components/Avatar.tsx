import { LogOut } from "lucide-react";

import { Avatar as AvatarContainer, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { useViewport } from "@/hooks";
import RenderIf from "./RenderIf";
import { Viewport } from "@/enums";
import Tooltip from "./Tooltip";

const DELAY_DURATION: number = 300;

const ButtonAvatar = ({ props }: { props: { width: number; src: string; fallback?: string; alt?: string } }) => {
  const { fallback, src, width, alt } = props;

  return (
    <Button asChild variant={"profile"}>
      <div className="pt-[27px] pb-[27px] md:py-8 flex 2xl:justify-start justify-center items-center">
        <RenderIf value={width >= Viewport["2XL"]}>
          <AvatarContainer className="size-[45px]">
            <AvatarImage src={src} alt={alt || "avatar"} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </AvatarContainer>
          <div className="flex flex-col items-center justify-around ml-2">
            <h3 className="text-16-bold">Rain Rain</h3>
            <span className="text-16-semibold">@RainRain</span>
          </div>
          <div className="flex justify-end w-full mr-2">
            <Tooltip content="Logout" delayDuration={DELAY_DURATION} color="bg-foreground" arrow>
              <div className="flex justify-center items-center w-[32px] h-[64px] cursor-pointer">
                <LogOut className="size-6 text-red-500 cursor-pointer" />
              </div>
            </Tooltip>
          </div>
        </RenderIf>
        <RenderIf value={width < Viewport["2XL"]}>
          <LogOut className="size-7 text-red-500" />
        </RenderIf>
      </div>
    </Button>
  );
};

const Avatar = ({ props }: { props: { src: string; alt?: string; fallback?: string } }) => {
  const { src, alt, fallback } = props;
  const { width } = useViewport();

  return (
    <>
      <RenderIf value={width >= Viewport["2XL"]}>
        <ButtonAvatar props={{ alt, fallback, src, width }} />
      </RenderIf>
      <RenderIf value={width < Viewport["2XL"]}>
        <Tooltip content="Logout" classNameTrigger={`w-[54px] md:w-[64px]`} delayDuration={DELAY_DURATION}>
          <ButtonAvatar props={{ alt, fallback, src, width }} />
        </Tooltip>
      </RenderIf>
    </>
  );
};

export default Avatar;
