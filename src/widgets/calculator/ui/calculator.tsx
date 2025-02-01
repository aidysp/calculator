import { Button } from "../../../shared/ui/button";

export const Calculator = () => {
  const operations: string[] = [
    "CE",
    "del",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ",",
  ];

  return (
    <div className="mx-auto my-auto grid gap-2 rounded-lg bg-[#FBFBFB]">
      <header className="flex justify-around gap-2 overflow-hidden rounded-tl-lg rounded-tr-lg p-2">
        <div>...</div>

        <div>change</div>
      </header>
      <input className="h-36 p-5 text-slate-600 focus:outline-none" />
      <div className="m-4 grid grid-cols-4 gap-2">
        {operations.map((e: string) => {
          return e == "0" ? (
            <div className="col-span-2">
              <Button>{e}</Button>
            </div>
          ) : e == "=" ? (
            <div className="row-span-2">
              <Button active={true}>{e}</Button>
            </div>
          ) : (
            <Button>{e}</Button>
          );
        })}
      </div>
    </div>
  );
};
