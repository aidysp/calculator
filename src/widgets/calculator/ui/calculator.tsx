import { useEffect, useState } from "react";

import { Button } from "../../../shared/ui/button";
import { operations } from "./operations";

const expressions: string = "/*-+=,.";

const checkExpressionsType = (lastData: string, pressKey: string): boolean => {
  let expressionKey: boolean = true;
  expressions.split("").map((expression) => {
    if (lastData == expression || lastData == undefined) {
      expressionKey = false;
    }

    if (Number(pressKey) || Number(pressKey) == 0) expressionKey = true;
  });

  return expressionKey;
};

const formatResult = (num: number): string => {
  if (isNaN(num)) return "Error";

  const absNum = Math.abs(num);

  if (absNum === 0) return "0";

  if (absNum >= 1e8 || absNum < 1e-6) {
    return String(num.toExponential(2));
  }

  if (Number.isInteger(num)) {
    return String(num.toString());
  }

  return String(num.toFixed(6).replace(/\.?0+$/, ""));
};

export const Calculator = () => {
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("0");
  // const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = (e.target as HTMLElement).innerHTML;
    navigator.clipboard.writeText(text);

    // setCopied(true);
    // setTimeout(() => setCopied(false), 2000);
      alert("Copied");
  };

  useEffect(() => {
    if (
      Number(counts[counts.length - 1]) ||
      Number(counts[counts.length - 1]) == 0
    ) {
      setResult(eval(counts));
    }
  }, [counts]);

  return (
    <>
      {" "}
      <div className="relative h-screen md:my-auto sm:h-[95vh] sm:w-72 2xl:w-[90%] 2xl:text-5xl 2xl:h-full w-screen grid gap-y-5 sm:rounded-lg sm:mr-auto sm:ml-auto bg-[linear-gradient(135deg,_#fbfbfb_0%,_rgba(251,_251,_251,_0.33)_83.5%,_rgba(251,_251,_251,_0.2)_100%)] lg:gap-y-2 md:gap-1 dark:bg-[linear-gradient(136deg,_#424242_0%,_rgba(66,_66,_66,_0.4)_100%)]">
        <header>
          
        </header>

        <div className="grid justify-end overflow-hidden text-slate-600 focus:outline-none dark:text-slate-100 pr-2">
          <div className="w-screen overflow-x-scroll text-right text-1xl scrollbar-hide  align-middle">
            {counts}
          </div>
          <div
            title="click to copy"
            onClick={handleCopy}
            className="w-screen  cursor-pointer overflow-x-scroll text-7xl align-middle text-right font-medium text-black scrollbar-hide dark:text-white"
          >
            {formatResult(Number(result))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1 p-1">
          {operations.map((e: string, index: number) => {
            return e == "0" ? (
              <div
                key={index}
                className="col-span-2"
                onClick={(j) => {
                  if (counts != "0") {
                    const matches = counts.match(/\d+/g);
                    const lastValue = matches
                      ? matches[matches.length - 1]
                      : null;

                    if (
                      (lastValue ? lastValue[0] : "") === "0" &&
                      (j.target as HTMLElement).innerHTML == "0" &&
                      counts[counts.length - 1] === "0" &&
                      !counts.includes(".")
                    ) {
                      return;
                    } else {
                      setCounts(counts + (j.target as HTMLElement).innerHTML);
                    }
                  } else {
                    setCounts((j.target as HTMLElement).innerHTML);
                  }

                  setResult("");
                }}
              >
                <Button>{e}</Button>
              </div>
            ) : index == 0 ? (
              <div
                key={index}
                className="col-span-2"
                onClick={() => {
                    setCounts("0");
                    setResult("0");
                }}
              >
                <Button active={false}>{e}</Button>
              </div>
            )  : e == "DEL" ? (
              <div
                key={index}
                onClick={() => {
                  if (counts.length == 1) {
                    setCounts("0");
                    setResult("0");
                  } else {
                    setCounts(counts.slice(0, -1));
                    setResult("");
                  }
                }}
              >
                <Button>
                  {e}
                </Button>
              </div>
            ) : (
              <div
                key={index}
                className={(e == "+") ? "row-span-2" : ""}
                onClick={(j) => {
             
                    if (
                      checkExpressionsType(
                        counts[counts.length - 1],
                        (j.target as HTMLElement).innerHTML,
                      )
                    ) {
                      if (counts != "0") {
                        const matches = counts.match(/\d+(?:\.\d+)?/g);
                        console.log("matches: ", matches);
                        console.log("Counts: ", counts);
                        if (
                          matches &&
                          matches[matches.length - 1].includes(".") &&
                          (j.target as HTMLElement).innerHTML === "."
                        ) {
                          return;
                        }

                        if (
                          /[^.\d]0$/.test(counts) &&
                          !isNaN(Number((j.target as HTMLElement).innerHTML))
                        ) {
                          return;
                        } else {
                          setCounts(
                            counts + (j.target as HTMLElement).innerHTML,
                          );
                        }
                      } else {
                        if (Number((j.target as HTMLElement).innerHTML)) {
                          setCounts((j.target as HTMLElement).innerHTML);
                        } else {
                          setCounts(
                            counts + (j.target as HTMLElement).innerHTML,
                          );
                        }
                      }
                      setResult("");
                    }
                  }
                }
              >
                {e == "+" ? <Button active={true}>{e}</Button> :<Button>{e}</Button>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
