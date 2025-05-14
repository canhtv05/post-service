import { memo, useMemo } from "react";
import Link from "next/link";
import { SettingsIcon } from "lucide-react";

import { NewsCardType } from "@/types";
import Tooltip from "./Tooltip";
import { TickIcon } from "@/assets/icons";
import { Badge } from "./ui/badge";
import RenderIf from "./RenderIf";
import { partHashtag } from "@/lib/utils";

const NewsCard = ({ props }: { props: NewsCardType }) => {
  const { content, firstName, hashtag, lastName, creator, tick } = props;
  const parts = useMemo(() => partHashtag(hashtag), [hashtag]);

  return (
    <article className="hover:bg-primary/10 rounded-lg transition-colors duration-200 cursor-pointer overflow-hidden">
      <Link href={`/`} aria-label={`View news post by ${firstName} ${lastName}`}>
        <div className="flex py-3">
          <div className="flex flex-col px-2 min-w-0 w-full">
            <header className="flex items-center w-full justify-between">
              <h2 className="font-black lg:text-[16px] md:text-[14px] text-[12px] flex items-center min-w-0">
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
              </h2>
              <time
                className="font-black text-[12px] text-foreground/50 flex items-center min-w-0"
                dateTime={new Date().toISOString()}
              >
                1s
              </time>
            </header>

            <p className="text-start leading-4 md:leading-5 lg:text-[14px] md:text-[12px] text-[10px] text-foreground truncate block max-w-[110px] sm:max-w-[150px] md:max-w-[300px]">
              {content}
            </p>

            <div className="min-w-0 max-w-[110px] sm:max-w-[150px] md:max-w-[300px] mt-1">
              {parts.map((part: string, index: number) => (
                <RenderIf value={part.startsWith("#")} key={index}>
                  <Badge variant={"hashtag"} className="mr-2">
                    <span className="text-[10px] md:text-[12px] truncate block">{part}</span>
                  </Badge>
                </RenderIf>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default memo(NewsCard);
