import { RecentlyCardProps } from "../../../interfaces";
import Icons from "../../Icons";

const RecentlyCard = ({ onClick, name, icon, isSvg }: RecentlyCardProps) => {
  return (
    <div
      className="inline-flex space-x-3 items-center hover:bg-white/5 px-3 py-2 rounded-md w-full transition cursor-pointer"
      onClick={onClick}
    >
      {isSvg ? (
        <Icons icon={icon} className="w-6 h-6" />
      ) : (
        <img src={icon} className="w-6 h-6 rounded" alt="me" />
      )}
      <div className="flex flex-col">
        <h1 className="text-white/90 font-medium text-sm">{name}</h1>
        <p className="text-white/60 font-medium text-xs">Recently Added</p>
      </div>
    </div>
  );
};
export default RecentlyCard;
