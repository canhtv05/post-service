import { LogOut } from "lucide-react";

import { Button } from "./ui/button";
import { useViewport } from "@/hooks";
import RenderIf from "./RenderIf";
import { Viewport } from "@/enums";
import Tooltip from "./Tooltip";
import Account from "./Account";

const DELAY_DURATION: number = 300;

const ButtonAvatar = ({ props }: { props: { width: number; src: string; fallback?: string; alt?: string } }) => {
  const { fallback, src, width, alt } = props;

  return (
    <Button asChild variant={"profile"}>
      <div className="lg:pt-[27px] lg:pb-[27px] xl:py-8 py-6 flex xl:justify-start justify-center items-center">
        <RenderIf value={width >= Viewport["XL"]}>
          <Account props={{ src, alt, fallback, tick: true, creator: true }} />
          <div className="flex justify-end w-full mr-2">
            <Tooltip content="Logout" delayDuration={DELAY_DURATION} color="bg-foreground" arrow>
              <div className="flex justify-center items-center w-[32px] lg:h-[64px] cursor-pointer">
                <LogOut className="size-5 text-red-500 cursor-pointer" />
              </div>
            </Tooltip>
          </div>
        </RenderIf>
        <RenderIf value={width < Viewport["XL"]}>
          <LogOut className="size-5 text-red-500" />
        </RenderIf>
      </div>
    </Button>
  );
};

const NavBarAvatar = ({ props }: { props: { src: string; alt?: string; fallback?: string } }) => {
  const { src, alt, fallback } = props;
  const { width } = useViewport();

  return (
    <>
      <RenderIf value={width >= Viewport["XL"]}>
        <ButtonAvatar props={{ alt, fallback, src, width }} />
      </RenderIf>
      <RenderIf value={width < Viewport["XL"]}>
        <Tooltip content="Logout" classNameTrigger={`lg:w-[54px] w-[48px]`} delayDuration={DELAY_DURATION}>
          <ButtonAvatar props={{ alt, fallback, src, width }} />
        </Tooltip>
      </RenderIf>
    </>
  );
};

export default NavBarAvatar;
