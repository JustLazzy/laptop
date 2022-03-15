import { UserCardProps } from "../../../interfaces";
import Icons from "../../Icons";

const UserCard = ({ onClick, image, name }: UserCardProps) => {
  return (
    <div className="bottom-0 fixed -ml-10">
      <div className="w-[642px] h-[62px] border-b-transparent border border-l-transparent border-r-transparent border-t-neutral-800/70 rounded-b-lg">
        <div className="flex justify-evenly	space-x-60 mt-1">
          <div className="w-[100px] h-[40px] inline-flex space-x-3 justify-center items-center mt-1 hover:bg-white/5 transition-colors ease-in-out duration-150 rounded-md">
            <img src={image} className="w-8 h-8 rounded-full" alt="me" />
            <span className="text-white/90 font-medium text-xs">{name}</span>
          </div>
          <div className="flex justify-center items-center">
            <div
              onClick={onClick}
              className="w-10 h-10 flex justify-center items-center hover:bg-white/5 transition-colors ease-in-out duration-150 rounded-md"
            >
              <Icons icon="poweroff" className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
