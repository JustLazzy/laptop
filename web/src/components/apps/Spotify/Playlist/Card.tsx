import { PlaylistCardProps } from "../../../../interfaces";

const Card = ({ playlist, cover, onClick, type }: PlaylistCardProps) => {
  return (
    <>
      {type === "all" && (
        <div
          className="bg-white/10 hover:bg-white/20 transition duration-300 w-72 rounded-md h-20 cursor-pointer"
          onClick={onClick}
        >
          <div className="inline-flex space-x-5 items-center h-20">
            <img
              src={cover}
              className="w-20 bg-auto rounded-tl-md rounded-bl-md"
            />
            <span className="text-white font-medium text-md">
              {playlist} All
            </span>
          </div>
        </div>
      )}
      {type === "dance" && (
        <div
          className="bg-white/10 hover:bg-white/20 transition duration-300 w-72 rounded-md h-20 cursor-pointer"
          onClick={onClick}
        >
          <div className="inline-flex space-x-5 items-center h-20">
            <img
              src={cover}
              className="w-20 bg-auto rounded-tl-md rounded-bl-md"
            />
            <span className="text-white font-medium text-md">
              {playlist} Dance
            </span>
          </div>
        </div>
      )}
      {type === "turnUp-US" && (
        <div
          className="bg-white/10 hover:bg-white/20 transition duration-300 w-72 rounded-md h-20 cursor-pointer"
          onClick={onClick}
        >
          <div className="inline-flex space-x-5 items-center h-20">
            <img
              src={cover}
              className="w-20 bg-auto rounded-tl-md rounded-bl-md"
            />
            <span className="text-white font-medium text-md">
              {playlist} RAP US
            </span>
          </div>
        </div>
      )}
    </>
  );
};
export default Card;
