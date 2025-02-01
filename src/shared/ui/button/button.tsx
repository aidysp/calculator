import { FC, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  active?: boolean;
  bg?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, active, bg }) => {
  if (bg) {
    return <button className="align-center h-full w-full">{children}</button>;
  }

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
