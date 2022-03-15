import { ItemSelectProps } from "../../../../interfaces";
import Icons from "../../../Icons";

const ItemSelect = ({ name, icon, onClick }: ItemSelectProps) => {
  return (
    <a
      onClick={onClick}
      className="group rounded-md text-md font-semibold transition duration-200 inline-flex space-x-3 items-center hover:text-white text-[#999999] cursor-pointer"
    >
      <Icons icon={icon} className="w-6 h-7" />
      <span>{name}</span>
    </a>
  );
};
export default ItemSelect;
