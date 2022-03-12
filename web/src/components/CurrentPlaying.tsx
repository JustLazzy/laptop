import { Transition } from "@headlessui/react";
import { PanelProps } from "../interfaces";
import Icons from "./Icons";

const CurrentPlaying = ({ open }: PanelProps) => {
  return (
    <Transition
      show={open}
      enter="transition-opacity duration-500 ease-in slide-in-right"
      enterFrom="opacity-0"
      enterTo="opacity-400 slide-in-right"
      leave="transition-opacity duration-500 ease-out slide-out-right"
      leaveFrom="opacity-100"
      leaveTo="opacity-0 duration-500 slide-out-right"
      className={`absolute right-[13px] bottom-[475px] w-[360px] h-[160px] flex flex-col bg-neutral-900/90 backdrop-blur-2xl border border-neutral-600 rounded-lg shadow-2xl duration-200 overflow-hidden px-5 py-5`}
    >
      <div className="flex flex-col">
        <div className="inline-flex space-x-2 items-center">
          <Icons icon="spotify" className="w-4 h-4" />
          <span className="text-white text-sm ">Spotify</span>
        </div>
        <div className="flex justify-between items-center  h-full">
          <div>
            <h1 className="text-white font-medium text-sm">The Month</h1>
            <p className="text-white text-sm">Lol</p>
          </div>
          <div>
            <img
              src="https://picsum.photos/200"
              alt="album"
              className="w-14 h-14 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="inline-flex items-center space-x-10 py-3">
            <div className="hover:bg-white/5 px-2 py-2 rounded-lg transition">
              <Icons icon="next" className="w-5 h-5 text-white rotate-180" />
            </div>
            <div className="hover:bg-white/5 px-2 py-2 rounded-lg transition">
              <Icons icon="pauseIcon" className="w-5 h-5 text-white" />
            </div>
            <div className="hover:bg-white/5 px-2 py-2 rounded-lg transition">
              <Icons icon="next" className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};
export default CurrentPlaying;
