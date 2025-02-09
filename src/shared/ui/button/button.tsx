import { FC, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  active?: boolean;
  bg?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, active, bg = true }) => {
  if (!bg) {
    return (
      <button className="align-center grid h-[4vw] w-[2vw]">{children}</button>
    );
  }

  if (active) {
    return (
      <button className="align-center grid h-full w-full items-center rounded-[0.7vw] bg-[#56CB95] p-[1vw] text-[1.5vw] text-white transition-all active:bg-[#4edb99] betterhover:hover:bg-[#4edb99]">
        {children}
      </button>
    );
  }

  return (
    <button className="align-center grid h-full w-full rounded-[0.7vw] bg-[#F3F3F3] p-[1vw] text-[1.5vw] font-semibold text-[#707070] transition-all active:bg-[#ebebeb] betterhover:hover:bg-[#ebebeb] dark:bg-[#4E4E4E] dark:text-white dark:betterhover:hover:bg-[#5e5e5e]">
      {children}
    </button>
  );
};
