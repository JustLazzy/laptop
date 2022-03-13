import { Transition } from "@headlessui/react";
import Draggable from "react-draggable";
import { WindowProps } from "../interfaces";
import Icons from "./Icons";

const Window = ({
  open,
  image,
  title,
  children,
  opened,
  isSvg,
  size,
  isTitle,
}: WindowProps) => {
  return (
    <Transition
      show={open}
      enter="transition-opacity duration-500 ease-in scale-in-bottom"
      enterFrom="opacity-0"
      enterTo="opacity-100 scale-in-bottom"
      leave="transition-opacity duration-500 ease-out scale-out-bottom"
      leaveFrom="opacity-100"
      leaveTo="opacity-0 duration-500 scale-out-bottom"
    >
      <Draggable>
        <div
          className={`group ${size} bg-neutral-900 shadow-lg border border-neutral-800 rounded-md z-20`}
        >
          <div
            className={
              isTitle
                ? `bg-neutral-900 rounded-tl-md rounded-tr-md px-2 py-2 h-10`
                : `rounded-tl-md rounded-tr-md`
            }
          >
            <div
              className={`flex items-center ${
                isTitle ? "justify-between" : "justify-end"
              }`}
            >
              {isTitle && (
                <>
                  <div className="inline-flex space-x-2 items-center">
                    {isSvg ? (
                      <Icons icon={image} className="w-5 h-5 mr-2" />
                    ) : (
                      <img src={image} className="w-6 h-6 rounded-md" alt="" />
                    )}
                    <h1 className="text-[#F1F1F1]">{title}</h1>
                  </div>
                </>
              )}

              {opened}
            </div>
          </div>
          {children}
        </div>
      </Draggable>
    </Transition>
  );
};
export default Window;
