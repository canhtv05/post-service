"use client";

import Link from "next/link";

import { SettingsIcon, TickIcon } from "@/assets/icons";
import { Avatar as AvatarContainer, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarDataType, AvatarPropsType } from "@/types";
import Tooltip from "./Tooltip";
import RenderIf from "./RenderIf";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const AccountInfo = ({ tooltip, creator, tick }: { tooltip?: boolean; creator?: boolean; tick?: boolean }) => {
  return (
    <div className="flex flex-col justify-around ml-2 items-start">
      <div className="flex items-center w-full">
        <span
          className={`text-[13px] max-w-[80px] truncate font-black text-left w-full ${
            tooltip ? "hover:underline" : ""
          }`}
        >
          Rain rain
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
        @rainrain
      </span>
    </div>
  );
};

const AvatarAccount = ({ props, data }: { props: AvatarPropsType; data: AvatarDataType }) => {
  const { src, alt, fallback, creator, tick, render, withLink = true } = props;
  const { username } = data;
  const tooltip: boolean = !!render;

  return (
    <>
      <RenderIf value={withLink}>
        <Link href={`@${username}`}>
          <AvatarContainer className="size-[40px]">
            <AvatarImage src={src} alt={alt || "avatar"} />
            <AvatarFallback>{fallback || "AV"}</AvatarFallback>
          </AvatarContainer>
        </Link>
      </RenderIf>
      <RenderIf value={!withLink}>
        <AvatarContainer className="size-[40px]">
          <AvatarImage src={src} alt={alt || "avatar"} />
          <AvatarFallback>{fallback || "AV"}</AvatarFallback>
        </AvatarContainer>
      </RenderIf>
      <RenderIf value={withLink}>
        <Link href={`@${username}`}>
          <AccountInfo creator={creator} tick={tick} tooltip={tooltip} />
        </Link>
      </RenderIf>
      <RenderIf value={!withLink}>
        <AccountInfo creator={creator} tick={tick} tooltip={tooltip} />
      </RenderIf>
    </>
  );
};

const Account = ({ props, data }: { props: AvatarPropsType; data: AvatarDataType }) => {
  const tooltip: boolean = !!props.render;

  return (
    <>
      <RenderIf value={!tooltip}>
        <div className="flex">
          <AvatarAccount props={{ ...props }} data={{ ...data }} />
        </div>
      </RenderIf>
      <RenderIf value={tooltip}>
        <div className="flex cursor-pointer">
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex justify-center items-center">
                <AvatarAccount props={{ ...props }} data={{ ...data }} />
              </div>
            </HoverCardTrigger>
            <HoverCardContent align="start" className="shadow-lg w-72">
              {props.render}
            </HoverCardContent>
          </HoverCard>
        </div>
      </RenderIf>
    </>
  );
};

export default Account;
