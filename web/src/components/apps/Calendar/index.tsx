import { Transition } from "@headlessui/react";
import { format } from "date-fns";
import { OpenViewCalendarProps } from "../../../interfaces";
const Calendar = ({ open, openCalendar, onClick }: OpenViewCalendarProps) => {
  const date = format(new Date(), "EEEE, MMMM dd");
  const month = format(new Date(), "MMMM");
  const year = format(new Date(), "yyyy");
  const array = [
    {
      name: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
      isValid: true,
    },
  ];
  return (
    <Transition
      show={open}
      enter="transition-opacity duration-500 ease-in slide-in-right"
      enterFrom="opacity-0"
      enterTo="opacity-400 slide-in-right"
      leave="transition-opacity duration-500 ease-out slide-out-right"
      leaveFrom="opacity-100"
      leaveTo="opacity-0 duration-500 slide-out-right"
      className={`absolute right-[13px] bottom-[65px] w-[335px] h-[400px] ${
        openCalendar ? "" : "!h-14"
      } flex flex-col bg-neutral-900/70 backdrop-blur-2xl border border-neutral-600 rounded-lg shadow-2xl duration-200 overflow-hidden`}
    >
      <div
        className={`${
          openCalendar ? "" : "bg-white/40 dark:bg-neutral-700/40"
        } flex items-center bg-white/40 dark:bg-neutral-900/70 px-6 py-4`}
      >
        <span className="text-sm text-gray-700 dark:text-white flex-grow">
          {date}
        </span>
        <button
          onClick={onClick}
          className="bg-gray-400 bg-opacity-10 border border-gray-400 border-opacity-20 p-1.5 rounded-md"
        >
          {openCalendar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="transition-all ease-in-out transform rotate-180 fill-current w-[10px] h-[10px] text-gray-700 dark:text-gray-200"
            >
              <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="transform fill-current w-[10px] h-[10px] text-gray-700 dark:text-gray-200"
            >
              <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
            </svg>
          )}
        </button>
      </div>
      <Transition
        show={openCalendar}
        enter="transition-opacity ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-400"
        leave="transition-opacity ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex justify-center items-center gap-3 px-6 pt-4">
          <span className="text-gray-700 dark:text-white text-sm flex-grow">
            {month} {year}
          </span>

          <button className="flex justify-center items-center hover:bg-gray-600 hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 rounded-md duration-150">
            <svg
              width="24"
              height="24"
              viewBox="0 0 27 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-600 dark:text-gray-400 p-2"
            >
              <path d="M11.7679 0.999999C12.5378 -0.333335 14.4623 -0.333333 15.2321 1L26.0574 19.75C26.8272 21.0833 25.8649 22.75 24.3253 22.75H2.67468C1.13508 22.75 0.172831 21.0833 0.942632 19.75L11.7679 0.999999Z"></path>
            </svg>
          </button>
          <button className="flex justify-center items-center hover:bg-gray-600 hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 rounded-md duration-150">
            <svg
              width="24"
              height="24"
              viewBox="0 0 27 23"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-600 dark:text-gray-400 p-2 transform rotate-180"
            >
              <path d="M11.7679 0.999999C12.5378 -0.333335 14.4623 -0.333333 15.2321 1L26.0574 19.75C26.8272 21.0833 25.8649 22.75 24.3253 22.75H2.67468C1.13508 22.75 0.172831 21.0833 0.942632 19.75L11.7679 0.999999Z"></path>
            </svg>
          </button>
        </div>
        {openCalendar ? (
          <div className="flex-grow grid items-center grid-rows-6 grid-cols-7 p-4 gap-2">
            <div className="flex justify-center items-center text-xs text-gray-600 dark:text-gray-100">
              Su
            </div>
            <div className="flex justify-center items-center text-xs text-gray-600 dark:text-gray-100">
              Mo
            </div>
            <div className="flex justify-center items-center text-xs text-gray-600 dark:text-gray-100">
              Tu
            </div>
            <div className="flex justify-center items-center text-xs text-gray-600 dark:text-gray-100">
              We
            </div>
            <div className="flex justify-center items-center text-xs text-gray-600 dark:text-gray-100">
              Th
            </div>
            <div className="flex justify-center items-center text-xs text-gray-600 dark:text-gray-100">
              Fr
            </div>
            <div className="flex justify-center items-center text-xs text-gray-600 dark:text-gray-100">
              Sa
            </div>
            {array[0].name.map((i) => (
              <button
                className={`flex justify-center items-center text-sm rounded-full w-8 h-8 duration-150 text-gray-600 bg-transparent focus:text-white dark:focus:bg-sky-400 focus:bg-sky-400 hover:bg-opacity-10 dark:text-gray-300 dark:hover:bg-white dark:hover:bg-opacity-10`}
              >
                {i}
              </button>
            ))}
          </div>
        ) : null}
      </Transition>
    </Transition>
  );
};
export default Calendar;
