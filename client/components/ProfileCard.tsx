"use client";

import { Fragment, MouseEventHandler } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

import { AvatarFallback, AvatarImage, Avatar } from "./ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import RenderIf from "./RenderIf";

const ProfileCard = ({
  props,
}: {
  props: { isFollowing?: boolean; onFollow: MouseEventHandler<HTMLButtonElement> };
}) => {
  const { isFollowing, onFollow } = props;
  const text: string =
    "Lorem ipsum dolor sit amet consectetur adipisicing adipisicing adipisicing adipisicing adipisicing elit. Eum,  #black consectetur?";
  const parts: string[] = text.split(/(\#[a-zA-Z0-9_]+)/g);

  return (
    <>
      <div className="flex justify-between space-x-4">
        <Link href={``}>
          <Avatar className="size-[54px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
        </Link>
        <div className="space-y-1">
          <div className="flex justify-end">
            <Button
              asChild
              className={`${
                isFollowing ? `${cn(buttonVariants({ variant: "outline" }))} text-foreground` : "border"
              } !rounded-full`}
              onClick={onFollow}
            >
              <div>
                <div
                  className={`2xl:text-[14px] text-[12px] font-black ${
                    isFollowing ? "text-foreground" : "!text-background"
                  }`}
                >{`${isFollowing ? "Following" : "Follow"}`}</div>
                {isFollowing && <Check className="size-3" />}
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Link href={``}>
          <h3 className="text-14-bold font-black mt-2 line-clamp-1 hover:underline">Rain Rain</h3>
          <span className="text-14-semibold font-semibold line-clamp-1">@rainrain</span>
        </Link>
      </div>
      <p className="text-[14px] mt-2 line-clamp-3">
        {parts.map((item, index) => (
          <Fragment key={index}>
            <RenderIf value={item.startsWith("#")}>
              <Link href={``}>
                <span key={index} className={"text-blue-500 cursor-pointer"}>
                  {item}
                </span>
              </Link>
            </RenderIf>
            <RenderIf value={!item.startsWith("#")}>
              <span key={index} className={"text-foreground"}>
                {item}
              </span>
            </RenderIf>
          </Fragment>
        ))}
      </p>
      <div className="flex mt-2">
        <div className="flex">
          <span className="text-14-bold font-black">1300</span>
          <span className="ml-1 text-14-semibold">Following</span>
        </div>
        <div className="flex ml-4">
          <span className="text-14-bold font-black">1</span>
          <span className="ml-1 text-14-semibold">Followers</span>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
