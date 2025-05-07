import { ReactNode } from "react";

const RenderIf = ({ value, children }: { value: boolean; children: ReactNode }) => {
  return value && <>{children}</>;
};

export default RenderIf;
