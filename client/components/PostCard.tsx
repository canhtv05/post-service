import { memo } from "react";

import { Avatar as AvatarContainer, AvatarFallback, AvatarImage } from "./ui/avatar";
import { PostCardType } from "@/types";
import Tooltip from "./Tooltip";
import { SettingsIcon, TickIcon } from "@/assets/icons";
import MarkdownRenderer from "./MarkdownRender";
import MultipleImage from "./MultipleImage";

const PostCard = ({ props }: { props: PostCardType }) => {
  const { src, alt, fallback, tick, firstName, lastName, creator, username, content, hashtag, images } = props;

  return (
    <article className="flex py-3 hover:bg-primary/10 rounded-lg px-2 transition-colors duration-200 cursor-pointer overflow-hidden sm:max-w-full max-w-[300px]">
      <div className="flex w-full">
        <div className="flex items-start">
          <AvatarContainer className="lg:size-[55px] md:size-[50px] size-[40px]">
            <AvatarImage src={src} alt={alt || "avatar"} />
            <AvatarFallback>{fallback || "AV"}</AvatarFallback>
          </AvatarContainer>
        </div>
        <div className="flex flex-col px-2 min-w-0 w-full">
          <header className="flex items-center w-full">
            <h2 className="font-black lg:text-[16px] md:text-[14px] text-[12px] flex items-center min-w-0">
              <span className="truncate max-w-[60px] sm:max-w-[140px] md:max-w-[130px]">{`${firstName} ${lastName}`}</span>
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
            </h2>
            <span className="ml-2 truncate max-w-[60px] sm:max-w-[140px] md:max-w-[130px] text-foreground/50 lg:text-[16px] md:text-[14px] text-[12px]">
              @{username}
            </span>
            <time
              dateTime="2025-05-14T12:00:00Z"
              className="ml-2 truncate max-w-[60px] sm:max-w-[140px] md:max-w-[130px] text-foreground/50 lg:text-[16px] md:text-[14px] text-[12px]"
            >
              · 14m
            </time>
          </header>
          <div className="w-full">
            <MarkdownRenderer>{content.replace(/(\[.*?\])/g, "$1\n")}</MarkdownRenderer>
          </div>
          <span>{hashtag}</span>
          <MultipleImage images={images} />
        </div>
      </div>
    </article>
  );
};

export default memo(PostCard);
