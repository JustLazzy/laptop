import { MenuProps } from "../interfaces";
import Icons from "./Icons";

const MenuIcon = ({ icon, title }: MenuProps) => {
  return (
    <div className="w-[96px] h-[84px] hover:bg-white/5 transition-colors ease-in-out duration-150 rounded-md">
      <div className="flex justify-center items-center flex-col space-y-2 mt-2.5">
        <Icons icon={icon} className="w-8 h-8" />
        <span className="text-white/90 text-sm">{title}</span>
      </div>
    </div>
  );
};
export default MenuIcon;
