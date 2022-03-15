import { WindowExtensionProps } from "../../../interfaces";
import Icons from "../../Icons";

const WindowExtension = ({ onClick }: WindowExtensionProps) => {
  return (
    <>
      <div
        className="p-2 hover:bg-red-600 transition-colors rounded-tr-md px-6 cursor-pointer w-16 absolute right-0 top-0 z-50"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke="#F1F1F1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div
        className="p-2 hover:bg-neutral-600/80 transition-colors px-6 cursor-pointer w-16 absolute right-16 top-0 z-50"
        onClick={onClick}
      >
        <Icons icon="rectangle" className="text-white w-3 h-5" />
      </div>
      <div
        className="p-2 hover:bg-neutral-600/80 transition-colors px-[26px] cursor-pointer w-16 absolute right-32 top-0 py-[17px] z-50"
        onClick={onClick}
      >
        <Icons icon="horizontal-line" className="text-white" />
      </div>
    </>
  );
};
export default WindowExtension;
