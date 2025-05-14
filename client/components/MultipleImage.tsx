import { Fragment, memo } from "react";
import RenderIf from "./RenderIf";

const MultipleImage = ({ images }: { images: string[] | undefined }) => {
  const length = images?.length || 0;

  return (
    <>
      <RenderIf value={length === 4}>
        <div className="grid grid-cols-2 grid-rows-2 gap-1">
          {images?.map((img, index) => (
            <img src={img} alt={`img-${index}`} key={index} className={`w-full h-full`} />
          ))}
        </div>
      </RenderIf>
      <RenderIf value={length === 3}>
        <div className="flex gap-1">
          <div className="flex-1">
            <img src={images[0]} alt="img-1" className="w-full h-full" />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex-1">
              <img src={images[1]} alt="img-2" className="w-full h-full" />
            </div>
            <div className="flex-1">
              <img src={images[2]} alt="img-3" className="w-full h-full" />
            </div>
          </div>
        </div>
      </RenderIf>
      <RenderIf value={length === 2}>
        <div className="flex gap-1">
          {images?.map((img, index) => (
            <img src={img} alt={`img-${index}`} key={index} className={`w-[50%] flex-1`} />
          ))}
        </div>
      </RenderIf>
      <RenderIf value={length === 1}>
        <img src={images[0]} alt={`img-0`} className={`w-full h-full max-h-[500px]`} />
      </RenderIf>
    </>
  );
};

export default memo(MultipleImage);
