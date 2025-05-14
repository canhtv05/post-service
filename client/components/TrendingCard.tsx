import Link from "next/link";
import { memo } from "react";

const TrendingCard = ({ index }: { index: number }) => {
  return (
    <article
      className="flex py-3 hover:bg-primary/10 rounded-lg px-2 transition-colors duration-200 cursor-pointer overflow-hidden"
      aria-labelledby={`trending-card-${index}`}
      role="region"
    >
      <Link href={`/`} aria-label={`Trending topic number ${index}`} title={`Go to trending topic #${index}`}>
        <div className="flex flex-col">
          <span className="text-[12px] text-foreground/50">Top {index} · Trending</span>
          <h3 className="text-16-bold">#code</h3>
          <span className="text-14-semibold">500 posts</span>
        </div>
      </Link>
    </article>
  );
};

export default memo(TrendingCard);
