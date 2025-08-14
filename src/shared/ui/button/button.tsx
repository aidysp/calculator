import { FC, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  active?: boolean;
  bg?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, active, bg = true }) => {
  if (!bg) {
    return (
      <button className="align-center grid">{children}</button>
    );
  }

  if (active) {
    return (
      <button className="align-center grid h-full w-full items-center rounded-lg bg-[#56CB95] p-1 text-2xl  text-white transition-all active:bg-[#4edb99] betterhover:hover:bg-[#4edb99] dark:active:bg-[#d138d6] dark:bg-[#C818CE] dark:betterhover:hover:bg-[#D40EDB]">
        {children}
      </button>
    );
  }

  return (
    <button className="align-center  h-full w-full rounded-lg bg-[#F3F3F3] p-1 text-2xl font-semibold text-[#707070] transition-all active:bg-[#ebebeb] betterhover:hover:bg-[#ebebeb] dark:active:bg-[#5c5c5c] dark:bg-[#4E4E4E] dark:text-white dark:betterhover:hover:bg-[#5e5e5e]">
      {children}
    </button>
  );
};
