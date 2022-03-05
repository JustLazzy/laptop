import { OpenAppProps } from "../interfaces";
import Icons from "./Icons";

const OpenApp = ({ icon, onClick, isSvg, title }: OpenAppProps) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center flex-col hover:bg-white/10 rounded-lg transition-colors py-4 px-4 cursor-pointer"
    >
      {!isSvg ? (
        <img className="w-12 h-12 rounded-lg" src={icon} alt={title} />
      ) : (
        <Icons icon={icon} className="w-12 h-12 rounded-lg" />
      )}
      <span className="text-white/90 text-md font-medium">{title}</span>
    </div>
  );
};
export default OpenApp;
