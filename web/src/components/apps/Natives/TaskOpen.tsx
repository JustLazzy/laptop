import { Transition } from "@headlessui/react";
import { TaskOpenProps } from "../../../interfaces";
import Icons from "../../Icons";

const TaskOpen = ({ open, onClick, icon, isSvg }: TaskOpenProps) => {
  return (
    <Transition
      show={open}
      enter="transition-opacity duration-400 ease-in"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-400 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        onClick={onClick}
        className={`${
          open ? "bg-white/10" : ""
        } flex flex-col justify-center items-center w-10 h-10 hover:bg-white/10 transition-colors ease-in-out duration-150 rounded-md`}
      >
        {!isSvg ? (
          <Icons
            icon={icon}
            className="w-6 h-6 hover:scale-[0.80] hover:transition hover:transform ease-in-out duration-300"
          />
        ) : (
          <img
            src={icon}
            className="w-6 h-6 hover:scale-[0.80] hover:transition hover:transform ease-in-out duration-300 rounded"
            alt=""
          />
        )}
        {open ? (
          <div className="w-2 h-0.5 rounded-full bg-white/40 mt-0.5" />
        ) : (
          ""
        )}
      </div>
    </Transition>
  );
};
export default TaskOpen;
