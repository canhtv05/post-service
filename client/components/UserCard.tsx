"use client";

import { Avatar as AvatarContainer, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UserCardType } from "@/types";
import Tooltip from "./Tooltip";
import { SettingsIcon, TickIcon } from "@/assets/icons";

const UserCard = ({ props }: { props: UserCardType }) => {
  const { src, alt, bio, creator, fallback, firstName, lastName, tick, username, followers } = props;
  return (
    <div className="flex py-3 hover:bg-primary/10 rounded-lg px-2 transition-colors duration-200 cursor-pointer overflow-hidden">
      <div className="flex items-center">
        <AvatarContainer className="lg:size-[55px] md:size-[50px] size-[40px]">
          <AvatarImage src={src} alt={alt || "avatar"} />
          <AvatarFallback>{fallback || "AV"}</AvatarFallback>
        </AvatarContainer>
      </div>
      <div className="flex flex-col px-4 min-w-0 w-full">
        <div className="flex items-center w-full">
          <span className="font-black lg:text-[16px] md:text-[14px] text-[12px] flex items-center min-w-0">
            <span className="truncate max-w-[110px] sm:max-w-[150px] md:max-w-[300px]">{`${firstName} ${lastName}`}</span>
            {tick && (
              <Tooltip content="Famous" arrow color="bg-foreground" classNameTrigger="cursor-pointer">
                <TickIcon className="ml-1 md:w-[15px] md:h-[15px] w-[13px] h-[13px]" />
              </Tooltip>
            )}
            {creator && (
              <Tooltip content="Creator" arrow color="bg-foreground" classNameTrigger="cursor-pointer">
                <SettingsIcon className="md:w-[18px] md:h-[18px] w-[16px] h-[16px] ml-1 fill-gray-500" />
              </Tooltip>
            )}
          </span>
        </div>
        <div className="flex items-center text-start leading-4 md:leading-5 lg:text-[16px] md:text-[14px] text-[12px] text-foreground/70 min-w-0">
          <span className="truncate max-w-[110px] sm:max-w-[150px] md:max-w-[300px]">{username}</span>
          <span className="mx-1 flex-shrink-0">·</span>
          <span className="font-bold text-foreground flex-shrink-0 whitespace-nowrap">
            {followers}
            <span className="ml-1 text-foreground/70">Followers</span>
          </span>
        </div>
        <div className="min-w-0 max-w-[110px] sm:max-w-[150px] md:max-w-[300px]">
          <span className="text-start leading-4 md:leading-5 lg:text-[15px] md:text-[13px] text-[11px] text-foreground truncate block">
            {bio}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
