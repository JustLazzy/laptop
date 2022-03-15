import { PlaylistItemProps } from "../../../../interfaces";

const Item = ({ playlist }: PlaylistItemProps) => {
  return (
    <a
      href="#"
      className="group rounded-md text-md font-semibold transition duration-200 inline-flex space-x-3 items-center hover:text-white text-[#999999]"
    >
      <span>{playlist}</span>
    </a>
  );
};

export default Item;
