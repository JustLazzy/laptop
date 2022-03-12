import { Transition } from "@headlessui/react";
import { format } from "date-fns";
import { FormEvent, useEffect, useState } from "react";
import { isBrowser } from "react-device-detect";

import { fetchNui } from "../utils/fetchNui";
import { formatDuration } from "../utils/format";

import { Spotify } from "../api/spotify";

import { Album } from "../types";

import Window from "../components/Window";
import Panel from "../components/Panel";
import Calendar from "../components/Calendar";
import MenuIcon from "../components/MenuIcon";
import TaskOpen from "../components/TaskOpen";
import OpenApp from "../components/OpenApp";
import Icons from "../components/Icons";

import tunerCars from "../images/app/nfs.jpg";
import race from "../images/app/race.jpg";
import nitrousOn from "../images/items/nitrous.png";
import { debugData } from "../utils/debugData";
import CurrentPlaying from "../components/CurrentPlaying";

if (isBrowser) {
  debugData([
    {
      action: "setVisible",
      data: true,
    },
  ]);
}
export default function Home() {
  const [album, setAlbum] = useState([{}] as any);
  const [error, setError] = useState(false);
  const [selectArtist, setSelectArtist] = useState("");
  const [enableNos, setEnableNos] = useState(false);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState(false);
  const [play, setPlay] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openPanel, setOpenPanel] = useState(false);
  const [nitrous, setNitrous] = useState(false);
  const [openViewCalendar, setOpenViewCalendar] = useState(false);
  const [openTunerMode, setTunerMode] = useState(false);
  const [startMenu, setStartMenu] = useState(false);
  const [openRace, setOpenRace] = useState(false);
  const [openSpotify, setOpenSpotify] = useState(false);
  const [startWindows, setStartWindows] = useState(true);
  const time = format(new Date(), "HH:mm");
  const date = format(new Date(), "dd/MM/yyyy");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectArtist === "") {
      setSearch(false);
      setError(true);
      setMessage("Veuillez remplir le champ");
      setTimeout(() => setError(false), 1250);
      return;
    }
    if (!search) {
      const app = new Spotify();
      app.getTracks(selectArtist).then((res) => {
        res.json().then((data: Album) => {
          setAlbum(data.tracks as any);
          setSearch(true);
        });
      });
    }
  };
  const playMusic = (src: string) => {
    const audio = new Audio(src);
    if (play) {
      audio.pause();
      audio.volume = 0;
      setPlay(false);
    } else {
      setPlay(true);
      audio.volume = 0.1;
      audio.play();
    }
  };

  useEffect(() => {
    setInterval(() => {
      setStartWindows(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between">
        <main className="flex justify-center min-h-screen items-center w-full h-full">
          <Transition
            show={startWindows}
            enter="transition-opacity duration-500 ease-in"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 duration-500"
            className="bg-black w-screen h-screen z-[9999]"
          >
            <div className="flex h-screen space-y-10 flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="140"
                height="140"
                version="1.1"
                viewBox="0 0 48.745 48.747"
              >
                <g fill="#0078d4">
                  <rect
                    x="2.2848e-15"
                    y="-.00011033"
                    width="23.105"
                    height="23.105"
                  />
                  <rect
                    x="25.64"
                    y="-.00011033"
                    width="23.105"
                    height="23.105"
                  />
                  <rect
                    x="2.2848e-15"
                    y="25.642"
                    width="23.105"
                    height="23.105"
                  />
                  <rect x="25.64" y="25.642" width="23.105" height="23.105" />
                </g>
              </svg>
              <div className="border-t-transparent w-10 h-10 border-4 border-white border-dotted rounded-full animate-spin"></div>
            </div>
          </Transition>

          <div className="space-x-2 inline-flex z-20">
            <Window
              open={openTunerMode}
              image={tunerCars}
              opened={
                <div className="flex items-center justify-between">
                  <div
                    className="p-2 hover:bg-rose-500 transition-colors rounded-md cursor-pointer"
                    onClick={() => setTunerMode(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke="#F1F1F1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              }
              title="Tuner Mode"
              children={
                <>
                  <div className="flex flex-col space-y-2 items-center justify-center mt-5">
                    <div className="grid grid-cols-2 space-x-8">
                      <div className="flex flex-col justify-center items-center space-y-2">
                        <div className="flex justify-start items-start">
                          <h1 className="text-white font-medium text-lg">
                            Enable NOS
                          </h1>
                        </div>
                        {!nitrous && (
                          <div className="inline-flex space-x-2">
                            <button
                              onClick={() => setNitrous(true)}
                              className="py-2 px-14 bg-neutral-800 hover:bg-sky-400 focus:bg-sky-400 focus:text-black/90 transition duration-300 rounded-md hover:text-black/90 text-white font-medium"
                            >
                              Yes
                            </button>
                            <button className="py-2 px-14 bg-neutral-800 hover:bg-sky-400 focus:bg-sky-400 focus:text-black/90 transition duration-300 rounded-md hover:text-black/90 text-white font-medium">
                              No
                            </button>
                          </div>
                        )}
                        <Transition
                          show={nitrous}
                          enter="transition-opacity duration-500 ease-in"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition-opacity duration-500 ease-out"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0 duration-500"
                        >
                          <div className="inline-flex space-x-2">
                            <div className="flex flex-col space-y-1 justify-center items-center">
                              <button className="hover:bg-white/20 py-2 px-3 transition-colors rounded-lg">
                                <img
                                  src={nitrousOn}
                                  className="w-10 h-10"
                                  alt=""
                                />
                                <span className="text-white text-sm">
                                  Stage 1
                                </span>
                              </button>
                            </div>
                            <div className="flex flex-col space-y-1 justify-center items-center">
                              <button className="hover:bg-white/20 py-2 px-3 transition-colors rounded-lg">
                                <img
                                  src={nitrousOn}
                                  className="w-10 h-10"
                                  alt=""
                                />
                                <span className="text-white text-sm">
                                  Stage 2
                                </span>
                              </button>
                            </div>
                            <div className="flex flex-col space-y-1 justify-center items-center">
                              <button className="hover:bg-white/20 py-2 px-3 transition-colors rounded-lg">
                                <img
                                  src={nitrousOn}
                                  className="w-10 h-10"
                                  alt=""
                                />
                                <span className="text-white text-sm">
                                  Stage 3
                                </span>
                              </button>
                            </div>
                          </div>
                        </Transition>

                        {!enableNos && (
                          <>
                            <div className="flex justify-center items-center">
                              <h1 className="text-white font-medium text-lg">
                                Enable Neon
                              </h1>
                            </div>
                            <div className="inline-flex space-x-2">
                              <button
                                onClick={() => {
                                  setEnableNos(true);
                                }}
                                className="py-2 px-14 bg-neutral-800 hover:bg-sky-400 focus:bg-sky-400 focus:text-black/90 transition duration-300 rounded-md hover:text-black/90 text-white font-medium"
                              >
                                Yes
                              </button>
                              <button className="py-2 px-14 bg-neutral-800 hover:bg-sky-400 focus:bg-sky-400 focus:text-black/90 transition duration-300 rounded-md hover:text-black/90 text-white font-medium">
                                No
                              </button>
                            </div>
                          </>
                        )}

                        <Transition
                          show={enableNos}
                          enter="transition-opacity duration-500 ease-in"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition-opacity duration-500 ease-out"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0 duration-500"
                        >
                          <div className="flex justify-center items-center">
                            <h1 className="text-white font-medium text-lg">
                              Neon Color
                            </h1>
                          </div>
                          <div className="inline-flex justify-center items-center space-x-2">
                            <div className="bg-sky-400/40 w-64 h-2.5 rounded-lg">
                              <div
                                className="bg-sky-400 max-w-[16rem] rounded-lg h-2.5 transition duration-300 ease-in-out"
                                style={{ width: "20%" }}
                              />
                            </div>
                          </div>
                        </Transition>
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-2">
                        <div className="flex justify-start items-start">
                          <h1 className="text-white font-medium text-lg">
                            Settings Transmission
                          </h1>
                        </div>
                        <div className="inline-flex items-center space-x-2">
                          <div className="bg-sky-400/40 w-64 h-2.5 rounded-lg">
                            <div
                              className="bg-sky-400 max-w-[16rem] rounded-lg h-2.5 transition duration-300 ease-in-out"
                              style={{ width: "20%" }}
                            />
                          </div>
                          <div
                            className="absolute w-5 h-5 bg-white rounded-full shadow-md cursor-move"
                            style={{ transform: `translateX(120%)` }}
                          />
                        </div>
                        <h1 className="text-white font-medium text-lg">
                          Brake Force
                        </h1>

                        <div className="inline-flex items-center space-x-2">
                          <div className="bg-sky-400/40 w-64 h-2.5 rounded-lg">
                            <div
                              className="bg-sky-400 max-w-[16rem] rounded-lg h-2.5 transition duration-300 ease-in-out"
                              style={{ width: "20%" }}
                            />
                          </div>
                          <div
                            className="absolute w-5 h-5 bg-white rounded-full shadow-md cursor-move"
                            style={{ transform: `translateX(120%)` }}
                          />
                        </div>
                        <h1 className="text-white font-medium text-lg">
                          Turbo PSI
                        </h1>

                        <div className="inline-flex items-center space-x-2">
                          <div className="bg-sky-400/40 w-64 h-2.5 rounded-lg">
                            <div
                              className="bg-sky-400 max-w-[16rem] rounded-lg h-2.5 transition duration-300 ease-in-out"
                              style={{ width: "20%" }}
                            />
                          </div>
                          <div
                            className="absolute w-5 h-5 bg-white rounded-full shadow-md cursor-move"
                            style={{ transform: `translateX(120%)` }}
                          />
                        </div>
                        <h1 className="text-white font-medium text-lg">
                          Ignition Timing
                        </h1>

                        <div className="inline-flex items-center space-x-2">
                          <div className="bg-sky-400/40 w-64 h-2.5 rounded-lg">
                            <div
                              className="bg-sky-400 max-w-[16rem] rounded-lg h-2.5 transition duration-300 ease-in-out"
                              style={{ width: "20%" }}
                            />
                          </div>
                          <div
                            className="absolute w-5 h-5 bg-white rounded-full shadow-md cursor-move"
                            style={{ transform: `translateX(120%)` }}
                          />
                        </div>
                        <h1 className="text-white font-medium text-lg">
                          Driver Bias
                        </h1>

                        <div className="inline-flex items-center space-x-2">
                          <div className="bg-sky-400/40 w-64 h-2.5 rounded-lg">
                            <div
                              className="bg-sky-400 max-w-[16rem] rounded-lg h-2.5 transition duration-300 ease-in-out"
                              style={{ width: "20%" }}
                            />
                          </div>
                          <div
                            className="absolute w-5 h-5 bg-white rounded-full shadow-md cursor-move"
                            style={{ transform: `translateX(120%)` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              }
              size="w-[700px] h-96"
            />

            <Window
              open={openRace}
              image={race}
              opened={
                <div className="flex items-center justify-between">
                  <div
                    className="p-2 hover:bg-rose-500 transition-colors rounded-md cursor-pointer"
                    onClick={() => setOpenRace(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke="#F1F1F1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              }
              title="Races"
              children={
                <div className="px-3 py-3 text-white">Not finished yet.</div>
              }
              size="w-[700px] h-96"
            />

            <Window
              open={openSpotify}
              image="spotify"
              isSvg={true}
              opened={
                <div className="flex items-center justify-between">
                  <div
                    className="p-2 hover:bg-rose-500 transition-colors rounded-md cursor-pointer"
                    onClick={() => setOpenSpotify(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke="#F1F1F1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              }
              title="Spotify"
              children={
                <>
                  <div className="flex-1 flex overflow-y-hidden">
                    <div className="sidebar bg-gray-900-spotify w-48 flex-none flex flex-col justify-between font-semibold">
                      <ul className="py-6">
                        <li className="border-l-4 border-green-600">
                          <a
                            href="#"
                            className="flex items-center mx-4 mt-4 group"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              className="fill-current text-white h-6 w-6"
                            >
                              <path d="M13 20v-5h-2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-7.59l-.3.3a1 1 0 11-1.4-1.42l9-9a1 1 0 011.4 0l9 9a1 1 0 01-1.4 1.42l-.3-.3V20a2 2 0 01-2 2h-3a2 2 0 01-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 012 2v5h3z"></path>
                            </svg>
                            <span className="ml-2 text-white">Home</span>
                          </a>
                        </li>
                        <li className="border-l-4 border-transparent">
                          <a
                            href="#"
                            className="flex items-center hover:text-white mx-4 mt-4 group"
                          >
                            <svg
                              width="24"
                              height="24"
                              className="fill-current h-6 w-6 text-white"
                            >
                              <path fill="none" d="M15 5.414V7h1.586z"></path>
                              <path
                                fill="none"
                                d="M14 9a1 1 0 01-1-1V4H9v12h9V9h-4z"
                              ></path>
                              <path d="M20 17V8h-.009a.996.996 0 00-.284-.707l-5-5A.99.99 0 0014 2.01V2H8a1 1 0 00-1 1v14a1 1 0 001 1h11a1 1 0 001-1zM15 5.414L16.586 7H15V5.414zM9 16V4h4v4a1 1 0 001 1h4v7H9z"></path>
                              <path d="M3 8v13a1 1 0 001 1h12v-2H5V8H3z"></path>
                            </svg>
                            <span className="ml-2 text-white">Browse</span>
                          </a>
                        </li>
                        <li className="border-l-4 border-transparent">
                          <a
                            href="#"
                            className="flex items-center hover:text-white mx-4 mt-4 group"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              className="fill-current h-6 w-6 text-white"
                            >
                              <g data-name="Layer 2">
                                <g data-name="radio">
                                  <path d="M12 8a3 3 0 00-1 5.83 1 1 0 000 .17v6a1 1 0 002 0v-6a1 1 0 000-.17A3 3 0 0012 8zm0 4a1 1 0 111-1 1 1 0 01-1 1zM3.5 11a6.87 6.87 0 012.64-5.23 1 1 0 10-1.28-1.54A8.84 8.84 0 001.5 11a8.84 8.84 0 003.36 6.77 1 1 0 101.28-1.54A6.87 6.87 0 013.5 11z"></path>
                                  <path d="M16.64 6.24a1 1 0 00-1.28 1.52A4.28 4.28 0 0117 11a4.28 4.28 0 01-1.64 3.24A1 1 0 0016 16a1 1 0 00.64-.24A6.2 6.2 0 0019 11a6.2 6.2 0 00-2.36-4.76zM8.76 6.36a1 1 0 00-1.4-.12A6.2 6.2 0 005 11a6.2 6.2 0 002.36 4.76 1 1 0 001.4-.12 1 1 0 00-.12-1.4A4.28 4.28 0 017 11a4.28 4.28 0 011.64-3.24 1 1 0 00.12-1.4z"></path>
                                  <path d="M19.14 4.23a1 1 0 10-1.28 1.54A6.87 6.87 0 0120.5 11a6.87 6.87 0 01-2.64 5.23 1 1 0 001.28 1.54A8.84 8.84 0 0022.5 11a8.84 8.84 0 00-3.36-6.77z"></path>
                                </g>
                              </g>
                            </svg>
                            <span className="ml-2 text-white">Radio</span>
                          </a>
                        </li>
                      </ul>
                      <div className="sidebar-spotify overflow-y-auto px-5 mt-2">
                        <h3 className="uppercase tracking-widest text-gray-50 font-normal text-xs">
                          Your Library
                        </h3>
                        <ul className="leading-extra-loose">
                          <li className="truncate">
                            <a
                              href="#"
                              className="text-neutral-400 hover:text-neutral-300"
                            >
                              Made For You
                            </a>
                          </li>
                          <li className="truncate">
                            <a
                              href="#"
                              className="text-neutral-400 hover:text-neutral-300"
                            >
                              Recently Played
                            </a>
                          </li>
                          <li className="truncate">
                            <a
                              href="#"
                              className="text-neutral-400 hover:text-neutral-300"
                            >
                              Liked Songs
                            </a>
                          </li>
                          <li className="truncate">
                            <a
                              href="#"
                              className="text-neutral-400 hover:text-neutral-300"
                            >
                              Albums
                            </a>
                          </li>
                          <li className="truncate">
                            <a
                              href="#"
                              className="text-neutral-400 hover:text-neutral-300"
                            >
                              Artists
                            </a>
                          </li>
                          <li className="truncate">
                            <a
                              href="#"
                              className="text-neutral-400 hover:text-neutral-300"
                            >
                              Podcasts
                            </a>
                          </li>
                        </ul>
                        <h3 className="uppercase tracking-widest text-gray-50 font-normal text-xs mt-6">
                          Playlists
                        </h3>
                        <ul className="leading-extra-loose mb-6">
                          <li className="truncate">
                            <a
                              href="#"
                              className="text-neutral-400 hover:text-neutral-300"
                            >
                              Acoustic Hits
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-800-spotify flex-1 flex flex-col">
                      <div className="top-bar flex items-center justify-between px-4 py-2">
                        <div className="flex items-center">
                          <button>
                            <svg
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              className="fill-current hover:text-gray-50 text-white h-10 w-10"
                            >
                              <path d="M14.7 15.3a1 1 0 01-1.4 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 011.4 1.4L11.42 12l3.3 3.3z"></path>
                            </svg>
                          </button>
                          <button className="ml-1">
                            <svg
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              className="fill-current hover:text-gray-50 text-white h-10 w-10"
                            >
                              <path
                                d="M9.3 8.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4l3.29-3.3-3.3-3.3z"
                                className="py-0.5"
                              ></path>
                            </svg>
                          </button>
                          <div className="ml-4 relative">
                            <input
                              placeholder="Search"
                              className="bg-white text-gray-800 placeholder-gray-800 rounded-full px-3 pl-8 py-1 focus:outline-none"
                            />
                            <div className="absolute top-0">
                              <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="fill-current text-gray-800 h-6 w-6 pt-1 pl-2"
                              >
                                <path
                                  d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
                                  className="heroicon-ui"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button>
                            <svg
                              viewBox="0 0 496 512"
                              className="fill-current hover:text-gray-50 text-white w-6 h-6"
                            >
                              <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path>
                            </svg>
                          </button>
                          <a
                            href="#"
                            className="ml-2 hover:underline text-white"
                          >
                            Amine
                          </a>
                          <button className="ml-4">
                            <svg
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              className="fill-current hover:text-gray-50 text-white w-6 h-6"
                            >
                              <path
                                d="M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z"
                                className="heroicon-ui"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="content-spotify overflow-y-auto">
                        <div className="container mx-auto">
                          <h2 className="mt-24 text-5xl font-semibold text-white">
                            Home
                          </h2>
                          <div className="mt-12">
                            <h3 className="font-semibold text-xl border-b border-gray-900 pb-2 text-white">
                              Recently Played
                            </h3>
                            <div className="flex items-center mt-4 -mx-4">
                              <div className="w-1/5 px-4">
                                <div>
                                  <a href="#">
                                    <img
                                      src="https://picsum.photos/200"
                                      alt="album cover"
                                    />
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="#"
                                    className="font-semibold block text-neutral-50 mt-2"
                                  >
                                    Acoustic Pop Covers 2019
                                  </a>
                                  <div className="text-gray-50 mt-2">
                                    Amazing Acoustic Covers updated every week.
                                  </div>
                                  <div className="uppercase tracking-widest text-xs text-gray-50 mt-2">
                                    6679 Followers
                                  </div>
                                </div>
                              </div>
                              <div className="w-1/5 px-4">
                                <div>
                                  <a href="#">
                                    <img
                                      src="https://picsum.photos/200"
                                      alt="album cover"
                                    />
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="#"
                                    className="font-semibold block text-neutral-50 mt-2"
                                  >
                                    Acoustic Pop Covers 2019
                                  </a>
                                  <div className="text-gray-50 mt-2">
                                    Amazing Acoustic Covers updated every week.
                                  </div>
                                  <div className="uppercase tracking-widest text-xs text-gray-50 mt-2">
                                    6679 Followers
                                  </div>
                                </div>
                              </div>
                              <div className="w-1/5 px-4">
                                <div>
                                  <a href="#">
                                    <img
                                      src="https://picsum.photos/200"
                                      alt="album cover"
                                    />
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="#"
                                    className="font-semibold block text-neutral-50 mt-2"
                                  >
                                    Acoustic Pop Covers 2019
                                  </a>
                                  <div className="text-gray-50 mt-2">
                                    Amazing Acoustic Covers updated every week.
                                  </div>
                                  <div className="uppercase tracking-widest text-xs text-gray-50 mt-2">
                                    6679 Followers
                                  </div>
                                </div>
                              </div>
                              <div className="w-1/5 px-4">
                                <div>
                                  <a href="#">
                                    <img
                                      src="https://picsum.photos/200"
                                      alt="album cover"
                                    />
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="#"
                                    className="font-semibold block text-neutral-50 mt-2"
                                  >
                                    Acoustic Pop Covers 2019
                                  </a>
                                  <div className="text-gray-50 mt-2">
                                    Amazing Acoustic Covers updated every week.
                                  </div>
                                  <div className="uppercase tracking-widest text-xs text-gray-50 mt-2">
                                    6679 Followers
                                  </div>
                                </div>
                              </div>
                              <div className="w-1/5 px-4">
                                <div>
                                  <a href="#">
                                    <img
                                      src="https://picsum.photos/200"
                                      alt="album cover"
                                    />
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="#"
                                    className="font-semibold block text-neutral-50 mt-2"
                                  >
                                    Acoustic Pop Covers 2019
                                  </a>
                                  <div className="text-gray-50 mt-2">
                                    Amazing Acoustic Covers updated every week.
                                  </div>
                                  <div className="uppercase tracking-widest text-xs text-gray-50 mt-2">
                                    6679 Followers
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-neutral-800 flex-none h-22 px-5 flex items-center justify-between bottom-0 fixed w-full py-4">
                    <div className="flex items-center">
                      <a href="#">
                        <img
                          src="https://picsum.photos/200"
                          alt="album cover"
                          className="w-14 h-14"
                        />
                      </a>
                      <div className="ml-3">
                        <div>
                          <a href="#" className="hover:underline text-white">
                            Name of Song
                          </a>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="text-xs text-gray-50 hover:underline hover:text-white"
                          >
                            Artist Name
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="player-controls flex flex-col justify-center">
                      <div className="flex justify-center">
                        <button>
                          <svg
                            viewBox="0 0 20 20"
                            className="fill-current hover:text-gray-50 text-white h-4 w-4"
                          >
                            <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"></path>
                          </svg>
                        </button>
                        <button className="ml-8">
                          <svg
                            viewBox="0 0 20 20"
                            className="fill-current hover:text-gray-50 text-white h-6 w-6"
                          >
                            <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"></path>
                          </svg>
                        </button>
                        <button className="ml-8">
                          <svg
                            viewBox="0 0 20 20"
                            className="fill-current hover:text-gray-50 text-white h-8 w-8"
                          >
                            <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM7 6l8 4-8 4V6z"></path>
                          </svg>
                        </button>
                        <button className="ml-8">
                          <svg
                            viewBox="0 0 20 20"
                            className="fill-current hover:text-gray-50 text-white h-6 w-6"
                          >
                            <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"></path>
                          </svg>
                        </button>
                        <button className="ml-8">
                          <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="fill-current hover:text-gray-50 text-white h-4 w-4"
                          >
                            <path d="M5.41 16H18a2 2 0 002-2 1 1 0 012 0 4 4 0 01-4 4H5.41l2.3 2.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 111.42 1.4L5.4 16zM6 8a2 2 0 00-2 2 1 1 0 01-2 0 4 4 0 014-4h12.59l-2.3-2.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4L18.6 8H6z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="max-w-full mt-3 flex items-center justify-center">
                        <div className="text-xs text-gray-50">1:20</div>
                        <div className="bg-gray-50 rounded-lg w-full xl:w-200 h-1 ml-3"></div>
                        <div className="ml-3 text-xs text-gray-50">3:21</div>
                      </div>
                    </div>
                    <div className="volume-controls flex items-center">
                      <button>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current hover:text-gray-50 text-gray-50 h-6 w-6"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"></path>
                        </svg>
                      </button>
                      <button className="ml-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current text-gray-50 hover:text-gray-50 h-5 w-5"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z"></path>
                        </svg>
                      </button>
                      <button className="ml-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current text-gray-50 hover:text-gray-50 h-5 w-5"
                        >
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
                          <path d="M0 0h24v24H0z" fill="none"></path>
                        </svg>
                      </button>
                      <div className="bg-white hover:bg-gray-50 rounded-lg w-20 h-1 ml-3"></div>
                      <button className="ml-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="fill-current text-white hover:text-gray-50  h-4 w-4"
                        >
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              }
              size="w-[1400px] h-[800px]"
            />
          </div>
          <Transition
            show={startMenu}
            enter="transition-opacity duration-500 ease-in slide-in-bottom"
            enterFrom="opacity-0"
            enterTo="opacity-500 slide-in-bottom"
            leave="transition-all"
            leaveFrom="opacity-500 slide-out-bottom"
            leaveTo="opacity-0 duration-500 slide-out-bottom"
            className="fixed bottom-0 my-16 w-[642px] h-[726px] bg-neutral-900/70 backdrop-blur-2xl rounded-lg shadow-lg"
          >
            <div className="px-10 py-10">
              <div className="space-y-7">
                <div>
                  <div className="flex justify-start items-start">
                    <div className="ml-4">
                      <Icons
                        icon="searching"
                        className="absolute mt-3 w-3.5 h-3.5"
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here to search"
                    className="w-full h-10 px-10 py-4 text-sm rounded-[0.250rem] bg-neutral-900 text-gray-100 placeholder-neutral-400 border-b-[2.5px] border-r-neutral-700/40 border-r-[1px] border-l-[1px] border-l-neutral-700/40 border-t-[1px] border-t-neutral-700/40 border border-b-sky-400 focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="w-[576px] h-[302px]">
                  <div className="flex justify-between px-7">
                    <div>
                      <h1 className="text-white/90 font-medium text-sm">
                        Pinned
                      </h1>
                    </div>
                    <div className="hidden">
                      <button className="bg-white px-3 py-1 rounded-lg border-2 border-gray-300">
                        <div className="inline-flex justify-start items-center">
                          <span className="text-white/90 font-medium">
                            All apps
                          </span>
                          <div className="w-[10px] h-[22px] flex justify-center items-center ml-2">
                            <svg
                              className="w-3 h-3"
                              viewBox="0 0 5 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.125977 7.4375C0.125977 7.35286 0.156901 7.27962 0.21875 7.21777L3.43164 4L0.21875 0.782227C0.156901 0.720378 0.125977 0.647135 0.125977 0.5625C0.125977 0.477865 0.156901 0.404622 0.21875 0.342773C0.280599 0.280924 0.353841 0.25 0.438477 0.25C0.523112 0.25 0.596354 0.280924 0.658203 0.342773L4.0957 3.78027C4.15755 3.84212 4.18848 3.91536 4.18848 4C4.18848 4.08464 4.15755 4.15788 4.0957 4.21973L0.658203 7.65723C0.596354 7.71908 0.523112 7.75 0.438477 7.75C0.353841 7.75 0.280599 7.71908 0.21875 7.65723C0.156901 7.59538 0.125977 7.52214 0.125977 7.4375Z"
                                fill="black"
                                fillOpacity="0.6063"
                              />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-7">
                    <div className="flex items-center justify-center">
                      <MenuIcon icon="spotify" title="Spotify" />
                      <MenuIcon icon="twitter" title="Twitter" />
                      <MenuIcon icon="settings" title="Settings" />
                      <MenuIcon icon="mail" title="Mail" />
                      <MenuIcon icon="xbox" title="Xbox" />
                      <MenuIcon icon="photos" title="Photos" />
                    </div>
                  </div>

                  <div className="w-[536px] h-[204px] mb-20 bottom-0 fixed">
                    <div className="flex justify-between px-7">
                      <h1 className="text-white/90 font-medium text-sm">
                        Recommanded
                      </h1>
                    </div>
                    <div className="flex justify-between items-center px-7 py-7 space-x-8 w-full">
                      <div
                        className="inline-flex space-x-3 items-center hover:bg-white/5 px-3 py-2 rounded-md w-full transition cursor-pointer"
                        onClick={() =>
                          openSpotify
                            ? setOpenSpotify(false)
                            : setOpenSpotify(true)
                        }
                      >
                        <Icons icon="spotify" className="w-6 h-6" />
                        <div className="flex flex-col">
                          <h1 className="text-white/90 font-medium text-sm">
                            Spotify
                          </h1>
                          <p className="text-white/60 font-medium text-xs">
                            Recently Added
                          </p>
                        </div>
                      </div>

                      <div
                        className="inline-flex space-x-3 items-center hover:bg-white/5 px-3 py-2 rounded-md w-full transition cursor-pointer"
                        onClick={() =>
                          openRace ? setOpenRace(false) : setOpenRace(true)
                        }
                      >
                        <img src={race} className="w-6 h-6 rounded" alt="" />
                        <div className="flex flex-col">
                          <h1 className="text-white/90 font-medium text-sm">
                            Races
                          </h1>
                          <p className="text-white/60 font-medium text-xs">
                            Recently Added
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bottom-0 fixed -ml-10 ">
                      <div className="w-[642px] h-[62px] border-b-transparent border border-l-transparent border-r-transparent border-t-neutral-800/70 rounded-b-lg">
                        <div className="flex justify-evenly	space-x-60 mt-1">
                          <div className="w-[100px] h-[40px] inline-flex space-x-3 justify-center items-center mt-1 hover:bg-white/5 transition-colors ease-in-out duration-150 rounded-md">
                            <img
                              src="https://avatars.githubusercontent.com/u/38817327?v=4"
                              className="w-8 h-8 rounded-full"
                              alt="me"
                            />
                            <span className="text-white/90 font-medium text-xs">
                              Amine
                            </span>
                          </div>
                          <div className="flex justify-center items-center">
                            <div
                              onClick={() => fetchNui("hideFrame")}
                              className="w-10 h-10 flex justify-center items-center hover:bg-white/5 transition-colors ease-in-out duration-150 rounded-md"
                            >
                              <Icons
                                icon="poweroff"
                                className="w-4 h-4 text-white"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </main>

        <div className="absolute px-2 py-2">
          <OpenApp
            onClick={() => {
              openTunerMode ? setTunerMode(false) : setTunerMode(true);
            }}
            isSvg={false}
            icon={tunerCars}
            title="Tuner Cars"
          />
          <OpenApp
            onClick={() => {
              openRace ? setOpenRace(false) : setOpenRace(true);
            }}
            isSvg={false}
            icon={race}
            title="Races"
          />
          <OpenApp
            onClick={() => {
              openSpotify ? setOpenSpotify(false) : setOpenSpotify(true);
            }}
            isSvg={true}
            icon="spotify"
            title="Spotify"
          />
        </div>
        <Calendar
          open={openCalendar}
          openCalendar={openViewCalendar}
          onClick={() =>
            openViewCalendar
              ? setOpenViewCalendar(false)
              : setOpenViewCalendar(true)
          }
        />

        <Panel open={openPanel} />
        <CurrentPlaying open={openPanel} />
        <div className="bg-neutral-900/70 backdrop-blur-2xl py-1 sticky bottom-0 z-50">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center space-x-2">
              {startMenu ? (
                <>
                  <Icons
                    icon="start"
                    className="w-6 h-6 hover:scale-[0.80] hover:transition hover:transform ease-in-out duration-300"
                    onClick={() => setStartMenu(false)}
                    action={startMenu ? "bg-white/5" : ""}
                  />
                </>
              ) : (
                <Icons
                  icon="start"
                  className="w-6 h-6 hover:scale-[0.80] hover:transition hover:transform ease-in-out duration-300"
                  onClick={() => setStartMenu(true)}
                />
              )}
              <Icons
                icon="teams"
                className="w-6 h-6 hover:scale-[0.80] hover:transition hover:transform ease-in-out duration-300"
              />
              <Icons
                icon="explorer"
                className="w-6 h-6 hover:scale-[0.80] hover:transition hover:transform ease-in-out duration-300"
              />
              <Icons
                icon="edge"
                className="w-6 h-6 hover:scale-[0.80] hover:transition hover:transform ease-in-out duration-300"
              />
              <TaskOpen
                open={openSpotify}
                onClick={() => setOpenSpotify((openSpotify) => !openSpotify)}
                icon="spotify"
                isSvg={false}
              />
              <TaskOpen
                open={openRace}
                onClick={() => setOpenRace((openRace) => !openRace)}
                icon={race}
                isSvg={true}
              />
              <TaskOpen
                open={openTunerMode}
                onClick={() => setTunerMode((openTunerMode) => !openTunerMode)}
                icon={tunerCars}
                isSvg={true}
              />
            </div>
            <div className="flex items-center justify-end px-2 space-x-1 right-0 fixed">
              {openPanel ? (
                <div
                  onClick={() => setOpenPanel(false)}
                  className={`${
                    openPanel ? "bg-white/5" : ""
                  } flex justify-end items-center w-20 h-10 px-2 hover:bg-white/5 transition-colors ease-in-out duration-150 rounded-md`}
                >
                  <svg
                    className="w-20 h-10"
                    viewBox="0 0 68 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5C9.4375 5 8.88021 5.05729 8.32812 5.17188C7.78125 5.28125 7.25 5.44531 6.73438 5.66406C6.21875 5.8776 5.72656 6.14062 5.25781 6.45312C4.78906 6.76562 4.35677 7.1224 3.96094 7.52344C3.76302 7.72135 3.58594 7.92969 3.42969 8.14844C3.27344 8.36198 3.10677 8.57292 2.92969 8.78125C2.86719 8.85417 2.80729 8.90885 2.75 8.94531C2.69271 8.98177 2.61458 9 2.51562 9C2.375 9 2.25521 8.95312 2.15625 8.85938C2.0625 8.76042 2.01562 8.64062 2.01562 8.5C2.01562 8.40104 2.04427 8.30729 2.10156 8.21875C2.51302 7.5625 3.01042 6.97396 3.59375 6.45312C4.18229 5.93229 4.82292 5.48958 5.51562 5.125C6.20833 4.76042 6.9349 4.48177 7.69531 4.28906C8.46094 4.09635 9.22917 4 10 4C10.7656 4 11.5312 4.09635 12.2969 4.28906C13.0625 4.48177 13.7891 4.76042 14.4766 5.125C15.1693 5.48958 15.8073 5.93229 16.3906 6.45312C16.9792 6.97396 17.4818 7.5625 17.8984 8.21875C17.9557 8.30729 17.9844 8.40104 17.9844 8.5C17.9844 8.64062 17.9349 8.76042 17.8359 8.85938C17.7422 8.95312 17.625 9 17.4844 9C17.3958 9 17.3177 8.98177 17.25 8.94531C17.1875 8.90365 17.1276 8.84896 17.0703 8.78125C17.013 8.70833 16.9583 8.63542 16.9062 8.5625C16.8594 8.48438 16.8073 8.40885 16.75 8.33594C16.6406 8.1901 16.526 8.05208 16.4062 7.92188C16.2865 7.78646 16.1641 7.65365 16.0391 7.52344C15.638 7.1224 15.2031 6.76562 14.7344 6.45312C14.2708 6.14062 13.7812 5.8776 13.2656 5.66406C12.7552 5.44531 12.224 5.28125 11.6719 5.17188C11.1198 5.05729 10.5625 5 10 5ZM10 8C9.61458 8 9.23177 8.04167 8.85156 8.125C8.47135 8.20833 8.10417 8.33073 7.75 8.49219C7.40104 8.64844 7.06771 8.84115 6.75 9.07031C6.4375 9.29948 6.15365 9.55729 5.89844 9.84375C5.77344 9.98438 5.65885 10.1328 5.55469 10.2891C5.45573 10.4453 5.34896 10.599 5.23438 10.75C5.17188 10.8281 5.10938 10.8906 5.04688 10.9375C4.98958 10.9792 4.90885 11 4.80469 11C4.66927 11 4.55208 10.9505 4.45312 10.8516C4.35417 10.7526 4.30469 10.6354 4.30469 10.5C4.30469 10.4167 4.32552 10.3333 4.36719 10.25C4.63281 9.75521 4.97135 9.30729 5.38281 8.90625C5.79427 8.50521 6.25 8.16406 6.75 7.88281C7.25 7.60156 7.77604 7.38542 8.32812 7.23438C8.88542 7.07812 9.44271 7 10 7C10.5521 7 11.1068 7.07812 11.6641 7.23438C12.2214 7.38542 12.75 7.60156 13.25 7.88281C13.75 8.16406 14.2057 8.50521 14.6172 8.90625C15.0286 9.30729 15.3672 9.75521 15.6328 10.25C15.6745 10.3333 15.6953 10.4167 15.6953 10.5C15.6953 10.6354 15.6458 10.7526 15.5469 10.8516C15.4479 10.9505 15.3307 11 15.1953 11C15.0911 11 15.0078 10.9792 14.9453 10.9375C14.888 10.8906 14.8281 10.8281 14.7656 10.75C14.651 10.599 14.5417 10.4453 14.4375 10.2891C14.3385 10.1328 14.2266 9.98438 14.1016 9.84375C13.8464 9.55729 13.5599 9.29948 13.2422 9.07031C12.9297 8.84115 12.5964 8.64844 12.2422 8.49219C11.8932 8.33073 11.5286 8.20833 11.1484 8.125C10.7682 8.04167 10.3854 8 10 8ZM10 11C9.70833 11 9.42969 11.0417 9.16406 11.125C8.89844 11.2031 8.64062 11.3177 8.39062 11.4688C8.25 11.5573 8.1276 11.6458 8.02344 11.7344C7.92448 11.8229 7.83333 11.9167 7.75 12.0156C7.67188 12.1146 7.59635 12.2214 7.52344 12.3359C7.45052 12.4453 7.3724 12.5703 7.28906 12.7109C7.23698 12.7995 7.17448 12.8698 7.10156 12.9219C7.02865 12.974 6.9401 13 6.83594 13C6.69531 13 6.57552 12.9505 6.47656 12.8516C6.38281 12.7526 6.33594 12.6328 6.33594 12.4922C6.33594 12.4245 6.35156 12.3542 6.38281 12.2812C6.53385 11.9479 6.73958 11.6406 7 11.3594C7.26042 11.0781 7.55208 10.8385 7.875 10.6406C8.19792 10.4375 8.54167 10.2812 8.90625 10.1719C9.27083 10.0573 9.63542 10 10 10C10.375 10 10.7448 10.0547 11.1094 10.1641C11.474 10.2734 11.8151 10.4271 12.1328 10.625C12.4557 10.8229 12.7448 11.0625 13 11.3438C13.2552 11.625 13.4609 11.9375 13.6172 12.2812C13.6484 12.3542 13.6641 12.4245 13.6641 12.4922C13.6641 12.6276 13.6146 12.7474 13.5156 12.8516C13.4167 12.9505 13.2995 13 13.1641 13C13.0599 13 12.9714 12.974 12.8984 12.9219C12.8255 12.8698 12.763 12.7995 12.7109 12.7109C12.6276 12.5703 12.5495 12.4453 12.4766 12.3359C12.4036 12.2214 12.3255 12.1146 12.2422 12.0156C12.1589 11.9167 12.0651 11.8229 11.9609 11.7344C11.862 11.6458 11.7422 11.5573 11.6016 11.4688C11.3568 11.3177 11.099 11.2031 10.8281 11.125C10.5625 11.0417 10.2865 11 10 11ZM8.75 14C8.75 13.8281 8.78385 13.6667 8.85156 13.5156C8.91927 13.3646 9.00781 13.2344 9.11719 13.125C9.23177 13.0104 9.36458 12.9193 9.51562 12.8516C9.66667 12.7839 9.82812 12.75 10 12.75C10.1719 12.75 10.3333 12.7839 10.4844 12.8516C10.6354 12.9193 10.7656 13.0104 10.875 13.125C10.9896 13.2344 11.0807 13.3646 11.1484 13.5156C11.2161 13.6667 11.25 13.8281 11.25 14C11.25 14.1719 11.2161 14.3333 11.1484 14.4844C11.0807 14.6354 10.9896 14.7682 10.875 14.8828C10.7656 14.9922 10.6354 15.0807 10.4844 15.1484C10.3333 15.2161 10.1719 15.25 10 15.25C9.82812 15.25 9.66667 15.2161 9.51562 15.1484C9.36458 15.0807 9.23177 14.9922 9.11719 14.8828C9.00781 14.7682 8.91927 14.6354 8.85156 14.4844C8.78385 14.3333 8.75 14.1719 8.75 14Z"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M38 16.2422C38 16.1536 38.0156 16.0833 38.0469 16.0312C38.0833 15.974 38.1302 15.9141 38.1875 15.8516C38.2604 15.7786 38.3385 15.7109 38.4219 15.6484C38.5052 15.5807 38.5859 15.5104 38.6641 15.4375C39.0391 15.0938 39.3724 14.7135 39.6641 14.2969C39.9557 13.875 40.2005 13.4297 40.3984 12.9609C40.5964 12.4922 40.7448 12.0078 40.8438 11.5078C40.9479 11.0078 41 10.5052 41 10C41 9.5 40.9479 9 40.8438 8.5C40.7448 7.99479 40.5938 7.50781 40.3906 7.03906C40.1927 6.5651 39.9479 6.11719 39.6562 5.69531C39.3698 5.27344 39.0391 4.89323 38.6641 4.55469C38.5859 4.48177 38.5052 4.41406 38.4219 4.35156C38.3385 4.28385 38.2604 4.21354 38.1875 4.14062C38.125 4.07812 38.0781 4.02083 38.0469 3.96875C38.0156 3.91667 38 3.84375 38 3.75C38 3.60938 38.0469 3.49219 38.1406 3.39844C38.2396 3.30469 38.3594 3.25781 38.5 3.25781C38.5625 3.25781 38.6172 3.26823 38.6641 3.28906C38.7109 3.30469 38.7604 3.33073 38.8125 3.36719C39.0469 3.51823 39.2786 3.71094 39.5078 3.94531C39.737 4.17969 39.9531 4.43229 40.1562 4.70312C40.3646 4.96875 40.5547 5.24219 40.7266 5.52344C40.8984 5.80469 41.0443 6.07031 41.1641 6.32031C41.4401 6.89844 41.6484 7.4974 41.7891 8.11719C41.9297 8.73177 42 9.35938 42 10C42 10.6354 41.9297 11.2656 41.7891 11.8906C41.6484 12.5104 41.4401 13.1068 41.1641 13.6797C41.0443 13.9245 40.8984 14.1901 40.7266 14.4766C40.5547 14.7578 40.3646 15.0339 40.1562 15.3047C39.9479 15.5703 39.7292 15.8203 39.5 16.0547C39.2708 16.2891 39.0417 16.4818 38.8125 16.6328C38.7552 16.6693 38.7031 16.6979 38.6562 16.7188C38.6146 16.7344 38.5625 16.7422 38.5 16.7422C38.3646 16.7422 38.2474 16.6927 38.1484 16.5938C38.0495 16.4948 38 16.3776 38 16.2422ZM29.2969 13H27.5C27.2969 13 27.1042 12.9609 26.9219 12.8828C26.7396 12.8047 26.5781 12.6979 26.4375 12.5625C26.3021 12.4219 26.1953 12.2604 26.1172 12.0781C26.0391 11.8958 26 11.7031 26 11.5V8.5C26 8.29688 26.0391 8.10417 26.1172 7.92188C26.1953 7.73958 26.3021 7.58073 26.4375 7.44531C26.5781 7.30469 26.7396 7.19531 26.9219 7.11719C27.1042 7.03906 27.2969 7 27.5 7H29.2969L31.7188 4.57031C31.7917 4.4974 31.8724 4.44531 31.9609 4.41406C32.0547 4.3776 32.151 4.35938 32.25 4.35938C32.4635 4.35938 32.6406 4.42969 32.7812 4.57031C32.9271 4.71094 33 4.88802 33 5.10156V14.8984C33 15.0026 32.9792 15.099 32.9375 15.1875C32.901 15.276 32.8464 15.3568 32.7734 15.4297C32.7057 15.4974 32.625 15.5521 32.5312 15.5938C32.4427 15.6302 32.349 15.6484 32.25 15.6484C32.0417 15.6484 31.8646 15.5755 31.7188 15.4297L29.2969 13ZM36.0312 14.4453C36.0312 14.3568 36.0443 14.2891 36.0703 14.2422C36.1016 14.1953 36.1458 14.138 36.2031 14.0703C36.4896 13.7474 36.7448 13.4375 36.9688 13.1406C37.1927 12.8438 37.3802 12.5391 37.5312 12.2266C37.6823 11.9089 37.7969 11.5703 37.875 11.2109C37.9583 10.8516 38 10.4479 38 10C38 9.55208 37.9583 9.14844 37.875 8.78906C37.7969 8.42969 37.6823 8.09375 37.5312 7.78125C37.3802 7.46354 37.1927 7.15625 36.9688 6.85938C36.7448 6.5625 36.4896 6.2526 36.2031 5.92969C36.1458 5.86198 36.1016 5.80469 36.0703 5.75781C36.0443 5.71094 36.0312 5.64323 36.0312 5.55469C36.0312 5.41927 36.0807 5.30469 36.1797 5.21094C36.2839 5.11198 36.4036 5.0625 36.5391 5.0625C36.6172 5.0625 36.6771 5.07292 36.7188 5.09375C36.7604 5.10938 36.8125 5.14062 36.875 5.1875C37.0312 5.30729 37.1849 5.45573 37.3359 5.63281C37.4922 5.80469 37.638 5.98958 37.7734 6.1875C37.9141 6.38542 38.0417 6.58854 38.1562 6.79688C38.2708 7 38.3672 7.19271 38.4453 7.375C38.8151 8.20833 39 9.08333 39 10C39 10.9167 38.8151 11.7917 38.4453 12.625C38.3724 12.7917 38.276 12.9818 38.1562 13.1953C38.0417 13.4036 37.9141 13.612 37.7734 13.8203C37.6328 14.0234 37.4844 14.2135 37.3281 14.3906C37.1771 14.5677 37.026 14.7083 36.875 14.8125C36.8177 14.849 36.763 14.8802 36.7109 14.9062C36.6641 14.9271 36.6068 14.9375 36.5391 14.9375C36.4036 14.9375 36.2839 14.8906 36.1797 14.7969C36.0807 14.6979 36.0312 14.5807 36.0312 14.4453ZM32 14.2891V5.70312L29.8516 7.85156C29.7526 7.95052 29.6354 8 29.5 8H27.5C27.3646 8 27.2474 8.04948 27.1484 8.14844C27.0495 8.2474 27 8.36458 27 8.5V11.5C27 11.6354 27.0495 11.7526 27.1484 11.8516C27.2474 11.9505 27.3646 12 27.5 12H29.5C29.6354 12 29.7526 12.0495 29.8516 12.1484L32 14.2891ZM34.0938 12.5391C34.0938 12.4661 34.1016 12.4089 34.1172 12.3672C34.138 12.3255 34.1693 12.276 34.2109 12.2188C34.3307 12.0365 34.4401 11.862 34.5391 11.6953C34.638 11.5234 34.7214 11.3516 34.7891 11.1797C34.8568 11.0026 34.9089 10.8203 34.9453 10.6328C34.9818 10.4401 35 10.2292 35 10C35 9.77604 34.9818 9.56771 34.9453 9.375C34.9089 9.18229 34.8568 9 34.7891 8.82812C34.7214 8.65104 34.638 8.47917 34.5391 8.3125C34.4401 8.14062 34.3307 7.96354 34.2109 7.78125C34.1693 7.72396 34.138 7.67448 34.1172 7.63281C34.1016 7.59115 34.0938 7.53385 34.0938 7.46094C34.0938 7.32552 34.1432 7.20833 34.2422 7.10938C34.3411 7.01042 34.4583 6.96094 34.5938 6.96094C34.6823 6.96094 34.7552 6.97656 34.8125 7.00781C34.8698 7.03906 34.9271 7.08594 34.9844 7.14844C35.151 7.33073 35.2969 7.53646 35.4219 7.76562C35.5469 7.98958 35.651 8.22917 35.7344 8.48438C35.8229 8.73438 35.888 8.98958 35.9297 9.25C35.9766 9.51042 36 9.76042 36 10C36 10.2292 35.9766 10.4766 35.9297 10.7422C35.888 11.0026 35.8229 11.263 35.7344 11.5234C35.651 11.7786 35.5443 12.0234 35.4141 12.2578C35.2891 12.487 35.1458 12.6849 34.9844 12.8516C34.875 12.9714 34.7448 13.0312 34.5938 13.0312C34.4583 13.0312 34.3411 12.9844 34.2422 12.8906C34.1432 12.7917 34.0938 12.6745 34.0938 12.5391Z"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M66 10.5C66 10.776 65.901 11.013 65.7031 11.2109C65.5104 11.4036 65.276 11.5 65 11.5H64V12.5547C64 12.8828 63.9323 13.1953 63.7969 13.4922C63.6667 13.7891 63.4896 14.0495 63.2656 14.2734C63.0469 14.4922 62.7891 14.6693 62.4922 14.8047C62.1953 14.9349 61.8828 15 61.5547 15H52.4453C52.1172 15 51.8047 14.9349 51.5078 14.8047C51.2109 14.6693 50.9505 14.4922 50.7266 14.2734C50.5078 14.0495 50.3307 13.7891 50.1953 13.4922C50.0651 13.1953 50 12.8828 50 12.5547V7.44531C50 7.11719 50.0651 6.80469 50.1953 6.50781C50.3307 6.21094 50.5078 5.95312 50.7266 5.73438C50.9505 5.51042 51.2109 5.33333 51.5078 5.20312C51.8047 5.06771 52.1172 5 52.4453 5H61.5547C61.888 5 62.2005 5.06771 62.4922 5.20312C62.7891 5.33333 63.0469 5.51042 63.2656 5.73438C63.4896 5.95312 63.6667 6.21094 63.7969 6.50781C63.9271 6.80469 63.9948 7.11719 64 7.44531V7.79688V8.5H65C65.1354 8.5 65.263 8.52604 65.3828 8.57812C65.5026 8.63021 65.6094 8.70312 65.7031 8.79688C65.7969 8.89062 65.8698 8.9974 65.9219 9.11719C65.974 9.23698 66 9.36458 66 9.5V10.5ZM63 7.5C63 7.29688 62.9609 7.10417 62.8828 6.92188C62.8047 6.73958 62.6953 6.58073 62.5547 6.44531C62.4193 6.30469 62.2604 6.19531 62.0781 6.11719C61.8958 6.03906 61.7031 6 61.5 6H52.5C52.2969 6 52.1042 6.03906 51.9219 6.11719C51.7396 6.19531 51.5781 6.30469 51.4375 6.44531C51.3021 6.58073 51.1953 6.73958 51.1172 6.92188C51.0391 7.10417 51 7.29688 51 7.5V12.5C51 12.7031 51.0391 12.8958 51.1172 13.0781C51.1953 13.2604 51.3021 13.4219 51.4375 13.5625C51.5781 13.6979 51.7396 13.8047 51.9219 13.8828C52.1042 13.9609 52.2969 14 52.5 14H61.5C61.7031 14 61.8958 13.9609 62.0781 13.8828C62.2604 13.8047 62.4193 13.6979 62.5547 13.5625C62.6953 13.4219 62.8047 13.2604 62.8828 13.0781C62.9609 12.8958 63 12.7031 63 12.5V7.5ZM60.25 7C60.4583 7 60.6354 7.07292 60.7812 7.21875C60.9271 7.36458 61 7.54167 61 7.75V12.25C61 12.4583 60.9271 12.6354 60.7812 12.7812C60.6354 12.9271 60.4583 13 60.25 13H52.75C52.5417 13 52.3646 12.9271 52.2188 12.7812C52.0729 12.6354 52 12.4583 52 12.25V7.75C52 7.54167 52.0729 7.36458 52.2188 7.21875C52.3646 7.07292 52.5417 7 52.75 7H60.25Z"
                      fill="#F1F1F1"
                    />
                  </svg>
                </div>
              ) : (
                <div
                  onClick={() => setOpenPanel(true)}
                  className="flex justify-end items-center w-20 h-10 px-2 hover:bg-white/5 transition-colors ease-in-out duration-150 rounded-md"
                >
                  <svg
                    className="w-20 h-10"
                    viewBox="0 0 68 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5C9.4375 5 8.88021 5.05729 8.32812 5.17188C7.78125 5.28125 7.25 5.44531 6.73438 5.66406C6.21875 5.8776 5.72656 6.14062 5.25781 6.45312C4.78906 6.76562 4.35677 7.1224 3.96094 7.52344C3.76302 7.72135 3.58594 7.92969 3.42969 8.14844C3.27344 8.36198 3.10677 8.57292 2.92969 8.78125C2.86719 8.85417 2.80729 8.90885 2.75 8.94531C2.69271 8.98177 2.61458 9 2.51562 9C2.375 9 2.25521 8.95312 2.15625 8.85938C2.0625 8.76042 2.01562 8.64062 2.01562 8.5C2.01562 8.40104 2.04427 8.30729 2.10156 8.21875C2.51302 7.5625 3.01042 6.97396 3.59375 6.45312C4.18229 5.93229 4.82292 5.48958 5.51562 5.125C6.20833 4.76042 6.9349 4.48177 7.69531 4.28906C8.46094 4.09635 9.22917 4 10 4C10.7656 4 11.5312 4.09635 12.2969 4.28906C13.0625 4.48177 13.7891 4.76042 14.4766 5.125C15.1693 5.48958 15.8073 5.93229 16.3906 6.45312C16.9792 6.97396 17.4818 7.5625 17.8984 8.21875C17.9557 8.30729 17.9844 8.40104 17.9844 8.5C17.9844 8.64062 17.9349 8.76042 17.8359 8.85938C17.7422 8.95312 17.625 9 17.4844 9C17.3958 9 17.3177 8.98177 17.25 8.94531C17.1875 8.90365 17.1276 8.84896 17.0703 8.78125C17.013 8.70833 16.9583 8.63542 16.9062 8.5625C16.8594 8.48438 16.8073 8.40885 16.75 8.33594C16.6406 8.1901 16.526 8.05208 16.4062 7.92188C16.2865 7.78646 16.1641 7.65365 16.0391 7.52344C15.638 7.1224 15.2031 6.76562 14.7344 6.45312C14.2708 6.14062 13.7812 5.8776 13.2656 5.66406C12.7552 5.44531 12.224 5.28125 11.6719 5.17188C11.1198 5.05729 10.5625 5 10 5ZM10 8C9.61458 8 9.23177 8.04167 8.85156 8.125C8.47135 8.20833 8.10417 8.33073 7.75 8.49219C7.40104 8.64844 7.06771 8.84115 6.75 9.07031C6.4375 9.29948 6.15365 9.55729 5.89844 9.84375C5.77344 9.98438 5.65885 10.1328 5.55469 10.2891C5.45573 10.4453 5.34896 10.599 5.23438 10.75C5.17188 10.8281 5.10938 10.8906 5.04688 10.9375C4.98958 10.9792 4.90885 11 4.80469 11C4.66927 11 4.55208 10.9505 4.45312 10.8516C4.35417 10.7526 4.30469 10.6354 4.30469 10.5C4.30469 10.4167 4.32552 10.3333 4.36719 10.25C4.63281 9.75521 4.97135 9.30729 5.38281 8.90625C5.79427 8.50521 6.25 8.16406 6.75 7.88281C7.25 7.60156 7.77604 7.38542 8.32812 7.23438C8.88542 7.07812 9.44271 7 10 7C10.5521 7 11.1068 7.07812 11.6641 7.23438C12.2214 7.38542 12.75 7.60156 13.25 7.88281C13.75 8.16406 14.2057 8.50521 14.6172 8.90625C15.0286 9.30729 15.3672 9.75521 15.6328 10.25C15.6745 10.3333 15.6953 10.4167 15.6953 10.5C15.6953 10.6354 15.6458 10.7526 15.5469 10.8516C15.4479 10.9505 15.3307 11 15.1953 11C15.0911 11 15.0078 10.9792 14.9453 10.9375C14.888 10.8906 14.8281 10.8281 14.7656 10.75C14.651 10.599 14.5417 10.4453 14.4375 10.2891C14.3385 10.1328 14.2266 9.98438 14.1016 9.84375C13.8464 9.55729 13.5599 9.29948 13.2422 9.07031C12.9297 8.84115 12.5964 8.64844 12.2422 8.49219C11.8932 8.33073 11.5286 8.20833 11.1484 8.125C10.7682 8.04167 10.3854 8 10 8ZM10 11C9.70833 11 9.42969 11.0417 9.16406 11.125C8.89844 11.2031 8.64062 11.3177 8.39062 11.4688C8.25 11.5573 8.1276 11.6458 8.02344 11.7344C7.92448 11.8229 7.83333 11.9167 7.75 12.0156C7.67188 12.1146 7.59635 12.2214 7.52344 12.3359C7.45052 12.4453 7.3724 12.5703 7.28906 12.7109C7.23698 12.7995 7.17448 12.8698 7.10156 12.9219C7.02865 12.974 6.9401 13 6.83594 13C6.69531 13 6.57552 12.9505 6.47656 12.8516C6.38281 12.7526 6.33594 12.6328 6.33594 12.4922C6.33594 12.4245 6.35156 12.3542 6.38281 12.2812C6.53385 11.9479 6.73958 11.6406 7 11.3594C7.26042 11.0781 7.55208 10.8385 7.875 10.6406C8.19792 10.4375 8.54167 10.2812 8.90625 10.1719C9.27083 10.0573 9.63542 10 10 10C10.375 10 10.7448 10.0547 11.1094 10.1641C11.474 10.2734 11.8151 10.4271 12.1328 10.625C12.4557 10.8229 12.7448 11.0625 13 11.3438C13.2552 11.625 13.4609 11.9375 13.6172 12.2812C13.6484 12.3542 13.6641 12.4245 13.6641 12.4922C13.6641 12.6276 13.6146 12.7474 13.5156 12.8516C13.4167 12.9505 13.2995 13 13.1641 13C13.0599 13 12.9714 12.974 12.8984 12.9219C12.8255 12.8698 12.763 12.7995 12.7109 12.7109C12.6276 12.5703 12.5495 12.4453 12.4766 12.3359C12.4036 12.2214 12.3255 12.1146 12.2422 12.0156C12.1589 11.9167 12.0651 11.8229 11.9609 11.7344C11.862 11.6458 11.7422 11.5573 11.6016 11.4688C11.3568 11.3177 11.099 11.2031 10.8281 11.125C10.5625 11.0417 10.2865 11 10 11ZM8.75 14C8.75 13.8281 8.78385 13.6667 8.85156 13.5156C8.91927 13.3646 9.00781 13.2344 9.11719 13.125C9.23177 13.0104 9.36458 12.9193 9.51562 12.8516C9.66667 12.7839 9.82812 12.75 10 12.75C10.1719 12.75 10.3333 12.7839 10.4844 12.8516C10.6354 12.9193 10.7656 13.0104 10.875 13.125C10.9896 13.2344 11.0807 13.3646 11.1484 13.5156C11.2161 13.6667 11.25 13.8281 11.25 14C11.25 14.1719 11.2161 14.3333 11.1484 14.4844C11.0807 14.6354 10.9896 14.7682 10.875 14.8828C10.7656 14.9922 10.6354 15.0807 10.4844 15.1484C10.3333 15.2161 10.1719 15.25 10 15.25C9.82812 15.25 9.66667 15.2161 9.51562 15.1484C9.36458 15.0807 9.23177 14.9922 9.11719 14.8828C9.00781 14.7682 8.91927 14.6354 8.85156 14.4844C8.78385 14.3333 8.75 14.1719 8.75 14Z"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M38 16.2422C38 16.1536 38.0156 16.0833 38.0469 16.0312C38.0833 15.974 38.1302 15.9141 38.1875 15.8516C38.2604 15.7786 38.3385 15.7109 38.4219 15.6484C38.5052 15.5807 38.5859 15.5104 38.6641 15.4375C39.0391 15.0938 39.3724 14.7135 39.6641 14.2969C39.9557 13.875 40.2005 13.4297 40.3984 12.9609C40.5964 12.4922 40.7448 12.0078 40.8438 11.5078C40.9479 11.0078 41 10.5052 41 10C41 9.5 40.9479 9 40.8438 8.5C40.7448 7.99479 40.5938 7.50781 40.3906 7.03906C40.1927 6.5651 39.9479 6.11719 39.6562 5.69531C39.3698 5.27344 39.0391 4.89323 38.6641 4.55469C38.5859 4.48177 38.5052 4.41406 38.4219 4.35156C38.3385 4.28385 38.2604 4.21354 38.1875 4.14062C38.125 4.07812 38.0781 4.02083 38.0469 3.96875C38.0156 3.91667 38 3.84375 38 3.75C38 3.60938 38.0469 3.49219 38.1406 3.39844C38.2396 3.30469 38.3594 3.25781 38.5 3.25781C38.5625 3.25781 38.6172 3.26823 38.6641 3.28906C38.7109 3.30469 38.7604 3.33073 38.8125 3.36719C39.0469 3.51823 39.2786 3.71094 39.5078 3.94531C39.737 4.17969 39.9531 4.43229 40.1562 4.70312C40.3646 4.96875 40.5547 5.24219 40.7266 5.52344C40.8984 5.80469 41.0443 6.07031 41.1641 6.32031C41.4401 6.89844 41.6484 7.4974 41.7891 8.11719C41.9297 8.73177 42 9.35938 42 10C42 10.6354 41.9297 11.2656 41.7891 11.8906C41.6484 12.5104 41.4401 13.1068 41.1641 13.6797C41.0443 13.9245 40.8984 14.1901 40.7266 14.4766C40.5547 14.7578 40.3646 15.0339 40.1562 15.3047C39.9479 15.5703 39.7292 15.8203 39.5 16.0547C39.2708 16.2891 39.0417 16.4818 38.8125 16.6328C38.7552 16.6693 38.7031 16.6979 38.6562 16.7188C38.6146 16.7344 38.5625 16.7422 38.5 16.7422C38.3646 16.7422 38.2474 16.6927 38.1484 16.5938C38.0495 16.4948 38 16.3776 38 16.2422ZM29.2969 13H27.5C27.2969 13 27.1042 12.9609 26.9219 12.8828C26.7396 12.8047 26.5781 12.6979 26.4375 12.5625C26.3021 12.4219 26.1953 12.2604 26.1172 12.0781C26.0391 11.8958 26 11.7031 26 11.5V8.5C26 8.29688 26.0391 8.10417 26.1172 7.92188C26.1953 7.73958 26.3021 7.58073 26.4375 7.44531C26.5781 7.30469 26.7396 7.19531 26.9219 7.11719C27.1042 7.03906 27.2969 7 27.5 7H29.2969L31.7188 4.57031C31.7917 4.4974 31.8724 4.44531 31.9609 4.41406C32.0547 4.3776 32.151 4.35938 32.25 4.35938C32.4635 4.35938 32.6406 4.42969 32.7812 4.57031C32.9271 4.71094 33 4.88802 33 5.10156V14.8984C33 15.0026 32.9792 15.099 32.9375 15.1875C32.901 15.276 32.8464 15.3568 32.7734 15.4297C32.7057 15.4974 32.625 15.5521 32.5312 15.5938C32.4427 15.6302 32.349 15.6484 32.25 15.6484C32.0417 15.6484 31.8646 15.5755 31.7188 15.4297L29.2969 13ZM36.0312 14.4453C36.0312 14.3568 36.0443 14.2891 36.0703 14.2422C36.1016 14.1953 36.1458 14.138 36.2031 14.0703C36.4896 13.7474 36.7448 13.4375 36.9688 13.1406C37.1927 12.8438 37.3802 12.5391 37.5312 12.2266C37.6823 11.9089 37.7969 11.5703 37.875 11.2109C37.9583 10.8516 38 10.4479 38 10C38 9.55208 37.9583 9.14844 37.875 8.78906C37.7969 8.42969 37.6823 8.09375 37.5312 7.78125C37.3802 7.46354 37.1927 7.15625 36.9688 6.85938C36.7448 6.5625 36.4896 6.2526 36.2031 5.92969C36.1458 5.86198 36.1016 5.80469 36.0703 5.75781C36.0443 5.71094 36.0312 5.64323 36.0312 5.55469C36.0312 5.41927 36.0807 5.30469 36.1797 5.21094C36.2839 5.11198 36.4036 5.0625 36.5391 5.0625C36.6172 5.0625 36.6771 5.07292 36.7188 5.09375C36.7604 5.10938 36.8125 5.14062 36.875 5.1875C37.0312 5.30729 37.1849 5.45573 37.3359 5.63281C37.4922 5.80469 37.638 5.98958 37.7734 6.1875C37.9141 6.38542 38.0417 6.58854 38.1562 6.79688C38.2708 7 38.3672 7.19271 38.4453 7.375C38.8151 8.20833 39 9.08333 39 10C39 10.9167 38.8151 11.7917 38.4453 12.625C38.3724 12.7917 38.276 12.9818 38.1562 13.1953C38.0417 13.4036 37.9141 13.612 37.7734 13.8203C37.6328 14.0234 37.4844 14.2135 37.3281 14.3906C37.1771 14.5677 37.026 14.7083 36.875 14.8125C36.8177 14.849 36.763 14.8802 36.7109 14.9062C36.6641 14.9271 36.6068 14.9375 36.5391 14.9375C36.4036 14.9375 36.2839 14.8906 36.1797 14.7969C36.0807 14.6979 36.0312 14.5807 36.0312 14.4453ZM32 14.2891V5.70312L29.8516 7.85156C29.7526 7.95052 29.6354 8 29.5 8H27.5C27.3646 8 27.2474 8.04948 27.1484 8.14844C27.0495 8.2474 27 8.36458 27 8.5V11.5C27 11.6354 27.0495 11.7526 27.1484 11.8516C27.2474 11.9505 27.3646 12 27.5 12H29.5C29.6354 12 29.7526 12.0495 29.8516 12.1484L32 14.2891ZM34.0938 12.5391C34.0938 12.4661 34.1016 12.4089 34.1172 12.3672C34.138 12.3255 34.1693 12.276 34.2109 12.2188C34.3307 12.0365 34.4401 11.862 34.5391 11.6953C34.638 11.5234 34.7214 11.3516 34.7891 11.1797C34.8568 11.0026 34.9089 10.8203 34.9453 10.6328C34.9818 10.4401 35 10.2292 35 10C35 9.77604 34.9818 9.56771 34.9453 9.375C34.9089 9.18229 34.8568 9 34.7891 8.82812C34.7214 8.65104 34.638 8.47917 34.5391 8.3125C34.4401 8.14062 34.3307 7.96354 34.2109 7.78125C34.1693 7.72396 34.138 7.67448 34.1172 7.63281C34.1016 7.59115 34.0938 7.53385 34.0938 7.46094C34.0938 7.32552 34.1432 7.20833 34.2422 7.10938C34.3411 7.01042 34.4583 6.96094 34.5938 6.96094C34.6823 6.96094 34.7552 6.97656 34.8125 7.00781C34.8698 7.03906 34.9271 7.08594 34.9844 7.14844C35.151 7.33073 35.2969 7.53646 35.4219 7.76562C35.5469 7.98958 35.651 8.22917 35.7344 8.48438C35.8229 8.73438 35.888 8.98958 35.9297 9.25C35.9766 9.51042 36 9.76042 36 10C36 10.2292 35.9766 10.4766 35.9297 10.7422C35.888 11.0026 35.8229 11.263 35.7344 11.5234C35.651 11.7786 35.5443 12.0234 35.4141 12.2578C35.2891 12.487 35.1458 12.6849 34.9844 12.8516C34.875 12.9714 34.7448 13.0312 34.5938 13.0312C34.4583 13.0312 34.3411 12.9844 34.2422 12.8906C34.1432 12.7917 34.0938 12.6745 34.0938 12.5391Z"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M66 10.5C66 10.776 65.901 11.013 65.7031 11.2109C65.5104 11.4036 65.276 11.5 65 11.5H64V12.5547C64 12.8828 63.9323 13.1953 63.7969 13.4922C63.6667 13.7891 63.4896 14.0495 63.2656 14.2734C63.0469 14.4922 62.7891 14.6693 62.4922 14.8047C62.1953 14.9349 61.8828 15 61.5547 15H52.4453C52.1172 15 51.8047 14.9349 51.5078 14.8047C51.2109 14.6693 50.9505 14.4922 50.7266 14.2734C50.5078 14.0495 50.3307 13.7891 50.1953 13.4922C50.0651 13.1953 50 12.8828 50 12.5547V7.44531C50 7.11719 50.0651 6.80469 50.1953 6.50781C50.3307 6.21094 50.5078 5.95312 50.7266 5.73438C50.9505 5.51042 51.2109 5.33333 51.5078 5.20312C51.8047 5.06771 52.1172 5 52.4453 5H61.5547C61.888 5 62.2005 5.06771 62.4922 5.20312C62.7891 5.33333 63.0469 5.51042 63.2656 5.73438C63.4896 5.95312 63.6667 6.21094 63.7969 6.50781C63.9271 6.80469 63.9948 7.11719 64 7.44531V7.79688V8.5H65C65.1354 8.5 65.263 8.52604 65.3828 8.57812C65.5026 8.63021 65.6094 8.70312 65.7031 8.79688C65.7969 8.89062 65.8698 8.9974 65.9219 9.11719C65.974 9.23698 66 9.36458 66 9.5V10.5ZM63 7.5C63 7.29688 62.9609 7.10417 62.8828 6.92188C62.8047 6.73958 62.6953 6.58073 62.5547 6.44531C62.4193 6.30469 62.2604 6.19531 62.0781 6.11719C61.8958 6.03906 61.7031 6 61.5 6H52.5C52.2969 6 52.1042 6.03906 51.9219 6.11719C51.7396 6.19531 51.5781 6.30469 51.4375 6.44531C51.3021 6.58073 51.1953 6.73958 51.1172 6.92188C51.0391 7.10417 51 7.29688 51 7.5V12.5C51 12.7031 51.0391 12.8958 51.1172 13.0781C51.1953 13.2604 51.3021 13.4219 51.4375 13.5625C51.5781 13.6979 51.7396 13.8047 51.9219 13.8828C52.1042 13.9609 52.2969 14 52.5 14H61.5C61.7031 14 61.8958 13.9609 62.0781 13.8828C62.2604 13.8047 62.4193 13.6979 62.5547 13.5625C62.6953 13.4219 62.8047 13.2604 62.8828 13.0781C62.9609 12.8958 63 12.7031 63 12.5V7.5ZM60.25 7C60.4583 7 60.6354 7.07292 60.7812 7.21875C60.9271 7.36458 61 7.54167 61 7.75V12.25C61 12.4583 60.9271 12.6354 60.7812 12.7812C60.6354 12.9271 60.4583 13 60.25 13H52.75C52.5417 13 52.3646 12.9271 52.2188 12.7812C52.0729 12.6354 52 12.4583 52 12.25V7.75C52 7.54167 52.0729 7.36458 52.2188 7.21875C52.3646 7.07292 52.5417 7 52.75 7H60.25Z"
                      fill="#F1F1F1"
                    />
                  </svg>
                </div>
              )}
              {openCalendar ? (
                <div
                  className={`${
                    openCalendar ? "bg-white/5" : ""
                  } flex flex-col hover:bg-white/5 transition-colors ease-in-out duration-150 rounded-md px-1.5 py-1.5`}
                  onClick={() => setOpenCalendar(false)}
                >
                  <span className="text-xs text-right text-white">{time}</span>
                  <span className="text-xs text-white">{date}</span>
                </div>
              ) : (
                <div
                  className={`${
                    openCalendar ? "bg-white/5" : ""
                  } flex flex-col hover:bg-white/5 transition-colors ease-in-out duration-150 rounded-md px-1.5 py-1.5`}
                  onClick={() => setOpenCalendar(true)}
                >
                  <span className="text-xs text-right text-white">{time}</span>
                  <span className="text-xs text-white">{date}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
