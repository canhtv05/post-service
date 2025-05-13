"use client";

import { Fragment, useEffect, useState } from "react";

import CustomScrollbar from "@/components/CustomScrollbar";
import Loading from "@/components/Loading";
import RenderIf from "@/components/RenderIf";
import UserCard from "@/components/UserCard";
import { useViewport } from "@/hooks";

const Users = () => {
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
          {new Array(20).fill(null).map((_, index: number) => (
            <UserCard
              key={index}
              props={{
                src: "https://github.com/shadcn.png",
                username: "Rainrain",
                tick: true,
                creator: true,
                followers: 1000,
                bio: "Nothing",
                firstName: "Van",
                lastName: "Rain",
                isFollowing: true,
              }}
            />
          ))}
        </CustomScrollbar>
      </RenderIf>
    </Fragment>
  );
};

export default Users;
