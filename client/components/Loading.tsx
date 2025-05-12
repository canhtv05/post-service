import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <LoaderCircle className="animate-spin size-10" />
    </div>
  );
};

export default Loading;
