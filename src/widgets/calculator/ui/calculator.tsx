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

export const Calculator = () => {
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("0");
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = (e.target as HTMLElement).innerHTML;
    navigator.clipboard.writeText(text);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      {copied && (
        <div className="animate-fade py-auto absolute w-full bg-green-500 text-center text-[1vw] text-white opacity-85">
          Copied to clipboard!!
        </div>
      )}
      <div className="relative mx-auto my-auto grid h-screen/90 w-screen/20 rounded-[1vw] bg-[linear-gradient(135deg,_#fbfbfb_0%,_rgba(251,_251,_251,_0.33)_83.5%,_rgba(251,_251,_251,_0.2)_100%)] dark:bg-[linear-gradient(136deg,_#424242_0%,_rgba(66,_66,_66,_0.4)_100%)]">
        <header className="flex h-screen/10 w-screen/20 justify-between p-[.5vw] pt-[1vw]">
          <div>
            <Button bg={false}>
              <svg
                className="max-w-[95%]"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.625 26.25H17.5V23.3333H30.625V26.25ZM30.625 18.9583H4.375V16.0417H30.625V18.9583ZM30.625 11.6667H4.375V8.75H30.625V11.6667Z"
                  className="fill-[#707070] dark:fill-white"
                />
              </svg>
            </Button>
          </div>

          <div>
            <Button bg={false}>
              <svg
                className="max-w-[95%]"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.4375 17.967C35.4553 27.5745 27.6202 35.4307 18.0127 35.4374C13.8632 35.4404 10.0517 33.9939 7.05642 31.5765C6.27757 30.9479 6.21935 29.7806 6.92712 29.0729L7.71933 28.2807C8.32465 27.6754 9.29102 27.6091 9.96166 28.1412C12.1684 29.8923 14.9612 30.9375 18 30.9375C25.1511 30.9375 30.9375 25.15 30.9375 18C30.9375 10.8489 25.15 5.0625 18 5.0625C14.5678 5.0625 11.4505 6.39626 9.13584 8.57334L12.7045 12.142C13.4132 12.8507 12.9113 14.0625 11.909 14.0625H1.6875C1.06615 14.0625 0.5625 13.5589 0.5625 12.9375V2.71596C0.5625 1.71373 1.77427 1.21177 2.48302 1.92045L5.95448 5.39191C9.08501 2.40019 13.3279 0.5625 18 0.5625C27.6194 0.5625 35.4197 8.35172 35.4375 17.967ZM22.7171 23.5065L23.4078 22.6185C23.98 21.8828 23.8475 20.8226 23.1118 20.2504L20.25 18.0245V10.6875C20.25 9.75551 19.4945 9 18.5625 9H17.4375C16.5055 9 15.75 9.75551 15.75 10.6875V20.2255L20.3491 23.8025C21.0847 24.3747 22.1449 24.2422 22.7171 23.5065Z"
                  className="fill-[#707070] dark:fill-white"
                />
              </svg>
            </Button>
          </div>
        </header>

        <div className="grid h-screen/20 w-screen/20 justify-end pr-[.5vw] text-slate-600 focus:outline-none dark:text-slate-100">
          <div className="w-screen/20 overflow-x-auto text-right text-[1.4vw] scrollbar-hide">
            {counts}
          </div>
          <div
            title="click to copy"
            onClick={handleCopy}
            className="w-screen/20 cursor-pointer overflow-x-auto text-right text-[4vw] font-medium text-black scrollbar-hide dark:text-white"
          >
            {result}
          </div>
        </div>

        <div className="grid h-[50vh] max-h-[50vh] w-screen/20 auto-rows-max grid-cols-4 gap-[.5vw] p-[0.5vw]">
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
            ) : e == "=" ? (
              <div
                key={index}
                className="row-span-2"
                onClick={() => {
                  setResult(eval(counts));
                }}
              >
                <Button active={true}>{e}</Button>
              </div>
            ) : e == "del" ? (
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
                  <svg
                    className="max-w-[95%]"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.3333 15L18.3333 25M28.3333 25L18.3333 15L28.3333 25Z"
                      className="stroke-[#707070] dark:stroke-white"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12.3333 8C12.6438 7.58601 13.0464 7.25 13.5093 7.01857C13.9721 6.78715 14.4825 6.66666 15 6.66666H33.3333C34.2174 6.66666 35.0652 7.01785 35.6904 7.64297C36.3155 8.2681 36.6667 9.11594 36.6667 10V30C36.6667 30.8841 36.3155 31.7319 35.6904 32.357C35.0652 32.9821 34.2174 33.3333 33.3333 33.3333H15C14.4825 33.3333 13.9721 33.2128 13.5093 32.9814C13.0464 32.75 12.6438 32.414 12.3333 32L4.83333 22C4.40059 21.423 4.16667 20.7212 4.16667 20C4.16667 19.2788 4.40059 18.577 4.83333 18L12.3333 8V8Z"
                      className="stroke-[#707070] dark:stroke-white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            ) : (
              <div
                key={index}
                onClick={(j) => {
                  if (e == "CE") {
                    setCounts("0");
                    setResult("0");
                  } else {
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
                }}
              >
                <Button>{e}</Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
