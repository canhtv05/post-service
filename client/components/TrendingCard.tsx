import Link from "next/link";

const TrendingCard = ({ index }: { index: number }) => {
  return (
    <Link href={`/search?=${"ok"}`}>
      <div className="flex py-3 hover:bg-primary/10 rounded-lg px-2 transition-colors duration-200 cursor-pointer overflow-hidden">
        <div className="flex flex-col">
          <span className="text-[12px] text-foreground/50">Top {index} · Trending</span>
          <span className="text-16-bold">#code</span>
          <span className="text-14-semibold">500 posts</span>
        </div>
      </div>
    </Link>
  );
};

export default TrendingCard;
