import { Button } from "../../../shared/ui/button";
import iconsPathBackspace from "../../../shared/assets/icons/backspace.svg";
import iconPathBurger from "../../../shared/assets/icons/burger.svg";
import iconPathHistory from "../../../shared/assets/icons/history.svg";

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
    <div className="mx-auto my-auto grid gap-2 rounded-lg bg-gradient-to-br from-gray-200 to-green-100">
      <header className="flex justify-between gap-2 overflow-hidden rounded-tl-lg rounded-tr-lg p-2">
        <div>
          <Button bg={true}>{<img src={iconPathBurger} />}</Button>
        </div>

        <div>
          <Button bg={true}>{<img src={iconPathHistory} />}</Button>
        </div>
      </header>
      <input className="h-36 bg-transparent p-5 text-xl text-slate-600 focus:outline-none" />
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
          ) : e == "del" ? (
            <div>
              <Button>{<img src={iconsPathBackspace} />}</Button>
            </div>
          ) : (
            <>
              <Button>{e}</Button>
            </>
          );
        })}
      </div>
    </div>
  );
};
