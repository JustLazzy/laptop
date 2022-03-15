import Icons from "../../../Icons";

const Activity = () => {
  return (
    <div className="inline-flex space-x-2 items-center">
      <div className="bg-neutral-700 px-3 py-3 rounded-full relative">
        <div className="absolute top-0 right-0 mt-1.5">
          <div className="w-2 h-2 bg-blue-500 rounded-full " />
        </div>
        <Icons icon="user" className="w-6 h-6 text-neutral-300" />
      </div>
      <div className="flex flex-col space-y-2">
        <span className="bg-neutral-700 w-24 h-2 rounded-full"></span>
        <span className="bg-neutral-700 w-20 h-2 rounded-full"></span>
        <span className="bg-neutral-700 w-20 h-2 rounded-full"></span>
      </div>
    </div>
  );
};
export default Activity;
