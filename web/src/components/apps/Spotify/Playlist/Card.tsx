import { PlaylistCardProps } from "../../../../interfaces";

const Card = ({ playlist, cover, onClick }: PlaylistCardProps) => {
  return (
    <div
      className="bg-neutral-700/60 hover:bg-neutral-700/70 transition w-72 rounded-lg h-20"
      onClick={onClick}
    >
      <div className="inline-flex space-x-5 items-center h-20">
        <img src={cover} className="w-20 bg-auto rounded-tl-lg rounded-bl-lg" />
        <span className="text-white font-medium text-md">{playlist}</span>
      </div>
    </div>
  );
};
export default Card;
