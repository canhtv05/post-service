"use client";

import { Fragment, useEffect, useState } from "react";

import CustomScrollbar from "@/components/CustomScrollbar";
import Loading from "@/components/Loading";
import NewsCard from "@/components/NewsCard";
import RenderIf from "@/components/RenderIf";
import { useViewport } from "@/hooks";

const Page = () => {
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
            <NewsCard
              key={index}
              props={{
                tick: true,
                creator: true,
                content: "Nothing",
                firstName: "Van",
                lastName: "Rain",
                hashtag: "#ok #ok",
              }}
            />
          ))}
        </CustomScrollbar>
      </RenderIf>
    </Fragment>
  );
};

export default Page;
