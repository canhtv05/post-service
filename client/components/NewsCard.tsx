import { NewsCardType } from "@/types";
import Link from "next/link";
import Tooltip from "./Tooltip";
import { TickIcon } from "@/assets/icons";
import { SettingsIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import RenderIf from "./RenderIf";
import { partHashtag } from "@/lib/utils";

const NewsCard = ({ props }: { props: NewsCardType }) => {
  const { content, firstName, hashtag, lastName, creator, tick } = props;
  const parts = partHashtag(hashtag);

  return (
    <Link href={`/search?=${"ok"}`}>
      <div className="flex py-3 hover:bg-primary/10 rounded-lg px-2 transition-colors duration-200 cursor-pointer overflow-hidden">
        <div className="flex flex-col px-4 min-w-0 w-full">
          <div className="flex items-center w-full justify-between">
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
            <span className="font-black text-[12px] text-foreground/50 flex items-center min-w-0">Recently</span>
          </div>
          <div className="min-w-0 max-w-[110px] sm:max-w-[150px] md:max-w-[300px]">
            <span className="text-start leading-4 md:leading-5 lg:text-[14px] md:text-[12px] text-[10px] text-foreground truncate block">
              {content}
            </span>
          </div>
          <div className="min-w-0 max-w-[110px] sm:max-w-[150px] md:max-w-[300px]">
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
  );
};

export default NewsCard;
