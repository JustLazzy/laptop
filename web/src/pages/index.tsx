import moment from "moment";
import { Link } from "react-router-dom";
export default function Index() {
  moment().locale("fr");
  const date = moment().format("dddd MMMM Do");
  const time = moment().format("HH:mm");
  return (
    <>
      <div className="flex flex-col justify-between backdrop-blur-lg">
        <main className="flex flex-col justify-center min-h-screen items-center w-full h-full">
          <div className="slide-in-top flex flex-col justify-center items-center">
            <h1 className="text-7xl text-white">{time}</h1>
            <h1 className="text-white">{date}</h1>
            <div className="mt-3">
              <Link to="/login" className="text-white">
                <button className="bg-neutral-900/70 hover:bg-neutral-900/80 transition-colors text-white border-t-transparent border-l-transparent border-r-transparent border-2 border-b-orange-700 px-12 rounded-lg py-3 focus:outline-none focus:shadow-outline">
                  Connexion
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
