import { RightSide } from "../../right/RightSide";

export const Layout = ({ children }) => {
  return (
    <div className="flex justify-between relative lg:px-10 mt-3 mg-8 gap-3">
      <div className="lg:w-[75%] min-h-[100%]">{children}</div>
      <div className=" hidden lg:block lg:w-[25%] bg-white shadow-md">
        <RightSide />
      </div>
    </div>
  );
};
