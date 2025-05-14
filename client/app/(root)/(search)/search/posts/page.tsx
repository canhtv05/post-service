import { Fragment, useEffect, useState } from "react";

import CustomScrollbar from "@/components/CustomScrollbar";
import Loading from "@/components/Loading";
import RenderIf from "@/components/RenderIf";
import PostCard from "@/components/PostCard";
import { useViewport } from "@/hooks";

const Posts = () => {
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
          {new Array(1).fill(null).map((_, index: number) => (
            <PostCard
              key={index}
              props={{
                src: "https://github.com/shadcn.png",
                username: "CanhTV05",
                tick: true,
                creator: true,
                followers: 1000,
                bio: "Nothing",
                firstName: "Van",
                lastName: "Rain",
                isFollowing: true,
                content: `~~~js
// Basic JavaScript Function Example

function greet(name) {
  console.log("Hello, " + name + "!");
}

// Usage
greet("World"); // Output: Hello, World!
~~~

---

hello world
`,
                hashtag: "#ok ne",
                images: [
                  "https://img.freepik.com/free-psd/delicious-chocolate-birthday-cake-with-candles_632498-24980.jpg?semt=ais_hybrid&w=740",
                  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XLWbI9bZUqvwOJW66NTEEuFnZIDA5vopDQ&s",
                  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XLWbI9bZUqvwOJW66NTEEuFnZIDA5vopDQ&s",
                  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XLWbI9bZUqvwOJW66NTEEuFnZIDA5vopDQ&s",
                ],
              }}
            />
          ))}
        </CustomScrollbar>
      </RenderIf>
    </Fragment>
  );
};

export default Posts;
