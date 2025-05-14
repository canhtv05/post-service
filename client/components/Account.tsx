"use client";

import Link from "next/link";
import { memo } from "react";
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
        <h2
          className={`text-[13px] max-w-[80px] truncate font-black text-left w-full ${
            tooltip ? "hover:underline" : ""
          }`}
        >
          Rain rain
        </h2>
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
      <p className="w-full text-[13px] font-semibold text-foreground/50 text-left truncate max-w-[80px]">@rainrain</p>
    </div>
  );
};

const AvatarAccount = ({ props, data }: { props: AvatarPropsType; data: AvatarDataType }) => {
  const { src, alt, fallback, creator, tick, render, withLink = true, isSearch } = props;
  const { username } = data;
  const tooltip: boolean = !!render;

  const content = (
    <>
      <AvatarContainer className="size-[40px]">
        <AvatarImage src={src} alt={alt || "avatar"} />
        <AvatarFallback>{fallback || "AV"}</AvatarFallback>
      </AvatarContainer>
      <AccountInfo creator={creator} tick={tick} tooltip={tooltip} />
    </>
  );

  return (
    <article className="flex items-center w-full justify-start" itemScope itemType="https://schema.org/Person">
      <RenderIf value={withLink}>
        <Link href={`/@${username}`} className={`w-full flex ${isSearch ? "py-2 px-6" : ""}`} itemProp="url">
          {content}
        </Link>
      </RenderIf>
      <RenderIf value={!withLink}>{content}</RenderIf>
    </article>
  );
};

const Account = ({ props, data }: { props: AvatarPropsType; data: AvatarDataType }) => {
  const tooltip: boolean = !!props.render;

  return (
    <>
      <RenderIf value={!tooltip}>
        <section className="flex">
          <AvatarAccount props={{ ...props }} data={{ ...data }} />
        </section>
      </RenderIf>
      <RenderIf value={tooltip}>
        <section className="flex cursor-pointer">
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
        </section>
      </RenderIf>
    </>
  );
};

export default memo(Account);
