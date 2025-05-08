import { MouseEventHandler } from "react";
import { Check } from "lucide-react";
import Account from "./Account";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import ProfileCard from "./ProfileCard";

const SuggestionAccount = ({
  isFollowing,
  onFollow,
}: {
  isFollowing?: boolean;
  onFollow: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="my-4 flex justify-between items-center">
      <Account
        props={{
          src: "https://github.com/shadcn.png",
          creator: true,
          tick: true,
          hasTooltip: true,
          render: <ProfileCard props={{ isFollowing, onFollow }} />,
        }}
      />
      <Button
        asChild
        className={`${
          isFollowing ? `${cn(buttonVariants({ variant: "outline" }))} text-foreground` : "border"
        } !rounded-full`}
        onClick={onFollow}
      >
        <div>
          <div
            className={`2xl:text-[14px] text-[12px] font-black ${isFollowing ? "text-foreground" : "!text-background"}`}
          >{`${isFollowing ? "Following" : "Follow"}`}</div>
          {isFollowing && <Check className="size-3" />}
        </div>
      </Button>
    </div>
  );
};

export default SuggestionAccount;
