import NavBar from "@/components/NavBar";
import { ReactNode } from "react";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="font-chirp text-foreground bg-background flex lg:w-[90%] md:w-[95%] w-full mx-auto h-screen">
      <NavBar />
      {children}
    </main>
  );
};

export default Layout;
