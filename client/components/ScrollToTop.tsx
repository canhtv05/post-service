import { ChevronsUp } from "lucide-react";
import { MouseEventHandler } from "react";

const ScrollToTop = ({ visible, onScroll }: { visible: boolean; onScroll: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <button
      className={`${
        visible ? "bg-accent" : "bg-transparent"
      } absolute bottom-3 right-0 rounded-full p-2 cursor-pointer border hover:bg-accent duration-200 transition-colors`}
      onClick={onScroll}
    >
      <ChevronsUp className="size-5" />
    </button>
  );
};

export default ScrollToTop;
