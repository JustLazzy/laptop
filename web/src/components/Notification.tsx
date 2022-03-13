import { Transition } from "@headlessui/react";
import { NotificationProps } from "../interfaces";
import Icons from "./Icons";

const Notification = ({
  message,
  type,
  open,
  title,
  titleHeader,
  isSvg,
  icon,
  onClick,
}: NotificationProps) => {
  return (
    <>
      <Transition
        show={open}
        enter="transition-opacity duration-500 ease-in slide-in-right"
        enterFrom="opacity-0"
        enterTo="opacity-400 slide-in-right"
        leave="transition-opacity duration-500 ease-out slide-out-right"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 duration-500 slide-out-right"
        className="w-[400px] h-[135px] bg-neutral-900/90 backdrop-blur-2xl right-2 px-4 py-4 rounded-xl space-y-2.5"
      >
        <div className="flex justify-between">
          {!isSvg ? (
            <>
              <div className="inline-flex space-x-2 items-center">
                <img className="w-6 h-6 rounded" src={icon} alt="" />
                <span className="text-white text-sm font-normal">{title}</span>
              </div>
            </>
          ) : (
            <>
              <div className="inline-flex space-x-2 items-center">
                <Icons icon={icon} className="w-6 h-6" />
                <span className="text-white text-sm font-normal">{title}</span>
              </div>
            </>
          )}
          <button onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="inline-flex space-x-5 items-center">
          {!isSvg ? (
            <img className="w-16 h-16 rounded-md bg-center" src={icon} alt="" />
          ) : (
            <Icons icon={icon} className="w-16 h-16 rounded-md" />
          )}
          {type === "" && (
            <>
              <div className="flex flex-col ">
                <span className="text-white font-medium text-md">
                  {titleHeader}
                </span>
                <p className="text-white/90 text-sm">{message}</p>
              </div>
            </>
          )}
        </div>
      </Transition>
    </>
  );
};
export default Notification;
