import { FC, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  active?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, active }) => {
  if (active) {
    return (
      <button className="align-center h-full w-full rounded-lg bg-[#56CB95] p-4 text-white transition-all hover:bg-[#4edb99]">
        {children}
      </button>
    );
  }

  return (
    <button className="align-center h-full w-full rounded-lg bg-[#F3F3F3] p-4 text-[#707070] transition-all hover:bg-[#ebebeb]">
      {children}
    </button>
  );
};
