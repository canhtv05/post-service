"use client";

import { Fragment, useEffect, useState } from "react";

import Loading from "@/components/Loading";
import RenderIf from "@/components/RenderIf";
import TrendingCard from "@/components/TrendingCard";
import CustomScrollbar from "@/components/CustomScrollbar";
import { useViewport } from "@/hooks";

const Trending = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { height } = useViewport();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <Fragment>
      <RenderIf value={loading}>
        <Loading />
      </RenderIf>
      <RenderIf value={!loading}>
        <CustomScrollbar height={height - 170}>
          {new Array(30).fill(0).map((_, index: number) => (
            <TrendingCard key={index} index={index + 1} />
          ))}
        </CustomScrollbar>
      </RenderIf>
    </Fragment>
  );
};

export default Trending;
