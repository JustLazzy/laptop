import { PlaylistCardProps } from "../../../../interfaces";

const Card = ({ playlist, cover, onClick }: PlaylistCardProps) => {
  return (
    <div
      className="bg-neutral-700/60 hover:bg-neutral-700/80 transition w-72 rounded-md h-20 cursor-pointer"
      onClick={onClick}
    >
      <div className="inline-flex space-x-5 items-center h-20">
        <img src={cover} className="w-20 bg-auto rounded-tl-md rounded-bl-md" />
        <span className="text-white font-medium text-md">{playlist}</span>
      </div>
    </div>
  );
};
export default Card;
