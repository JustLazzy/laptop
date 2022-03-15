import { PlaylistCardProps } from "../../../../interfaces";

const BigCard = ({ playlist, cover, onClick, date }: PlaylistCardProps) => {
  return (
    <div
      className="bg-white/5 hover:bg-white/10 transition duration-300 w-40 rounded-md h-60 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col space-y-3 py-4 items-center h-28">
        <img src={cover} className="w-32 h-40 bg-auto rounded" />
        <div className="flex flex-col space-y-1">
          <span className="text-white font-medium text-sm inline-flex space-x-1 items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>{playlist}</span>
          </span>
          <span className="text-neutral-300 font-normal text-xs uppercase">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};
export default BigCard;
