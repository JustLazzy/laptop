import { OpenAppProps } from "../../../interfaces";
import Icons from "../../Icons";

const OpenApp = ({ icon, onClick, isSvg, title }: OpenAppProps) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center flex-col hover:bg-white/5 rounded-lg transition-colors py-2 px-4 cursor-pointer space-y-2"
    >
      {!isSvg ? (
        <img className="w-10 h-10 rounded-md" src={icon} alt={title} />
      ) : (
        <Icons icon={icon} className="w-10 h-10 rounded-md" />
      )}
      <span className="text-white/90 text-sm font-medium">{title}</span>
    </div>
  );
};
export default OpenApp;
