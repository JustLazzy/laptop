import { NowPlayingProps } from "../../../../interfaces";
import Icons from "../../../Icons";

const NowPlaying = ({
  name,
  artist,
  cover,
  isLiked,
  onClick,
}: NowPlayingProps) => {
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
          <svg
            className="text-[#1DB954] hover:text-white transition w-5 h-5"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
          >
            <path
              d="M14.625 10.179L8.99998 15.75L3.37498 10.179C3.00396 9.81797 2.71171 9.38402 2.51664 8.90449C2.32157 8.42495 2.2279 7.91022 2.24153 7.39271C2.25517 6.8752 2.3758 6.36611 2.59585 5.89751C2.8159 5.42891 3.13058 5.01095 3.5201 4.66995C3.90961 4.32894 4.36551 4.07228 4.85909 3.91612C5.35267 3.75997 5.87324 3.7077 6.38801 3.76261C6.90278 3.81752 7.40061 3.97843 7.85014 4.23519C8.29967 4.49195 8.69117 4.83901 8.99998 5.25451C9.31013 4.84203 9.70208 4.498 10.1513 4.24396C10.6005 3.98993 11.0974 3.83135 11.6107 3.77815C12.124 3.72495 12.6428 3.77828 13.1346 3.9348C13.6263 4.09132 14.0805 4.34767 14.4686 4.68778C14.8568 5.0279 15.1706 5.44447 15.3903 5.91143C15.61 6.37839 15.731 6.88567 15.7457 7.40154C15.7604 7.91741 15.6684 8.43076 15.4756 8.90945C15.2827 9.38814 14.9932 9.82188 14.625 10.1835"
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <Icons
            icon="hearts"
            className="text-[#999999] hover:text-white transition w-5 h-5"
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
};

export default NowPlaying;
