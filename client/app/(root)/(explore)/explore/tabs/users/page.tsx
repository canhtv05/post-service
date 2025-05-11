"use client";

import UserCard from "@/components/UserCard";

const Users = () => {
  return (
    <div className="pt-5">
      {new Array(5).fill(null).map((_, index: number) => (
        <UserCard
          key={index}
          props={{
            src: "https://github.com/shadcn.png",
            username: "rainraisqaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaan",
            tick: true,
            creator: true,
            followers: 1000,
            bio: "No thingNo thingNo thingNo thingNo thingNo thingNo thingNo thing No thingNo thingNo thingNo thingNo thingNo thingNo thingNo thing",
            firstName: "Rainwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            lastName: "Rain",
          }}
        />
      ))}
    </div>
  );
};

export default Users;
