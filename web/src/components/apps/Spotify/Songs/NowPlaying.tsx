import { NowPlayingProps } from "../../../../interfaces";
import Icons from "../../../Icons";

const NowPlaying = ({ name, artist, cover, isLiked }: NowPlayingProps) => {
  return (
    <div className="flex items-center space-x-4">
      <a href="#">
        <img src={cover} alt="album cover" className="w-14 h-14" />
      </a>
      <div className="ml-3">
        <div>
          <a href="#" className="hover:underline text-white">
            {name}
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-xs text-gray-50 hover:underline hover:text-white"
          >
            {artist}
          </a>
        </div>
      </div>
      <div className="inline-flex space-x-2">
        {isLiked ? (
          <Icons
            icon="hearts"
            className="text-[#999999] hover:text-white transition w-5 h-5"
          />
        ) : (
          <Icons
            icon="heart"
            className="text-red-500 hover:text-white transition w-5 h-5"
          />
        )}
      </div>
    </div>
  );
};

export default NowPlaying;
