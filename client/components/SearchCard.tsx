"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const SearchCard = () => {
  return (
    <div className="absolute top-12 z-10 w-full right-0">
      <motion.div
        key="search-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <Card className="shadow-lg">
          <CardHeader className="">
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default SearchCard;
