// import Image from "next/image"

import Star from "../components/star";
import Star1 from "../components/star1";
import Star2 from "../components/star2";
import Star3 from "../components/star3";
import Star4 from "../components/star4";
import Star5 from "../components/star5";
import Star6 from "../components/star6";
import Countdown from "react-countdown";

export default function Index() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div>новый год прошёл</div>;
    } else {
      return (
        <div className=" place-self-center pt-2 w-full">
          <h2 className="xl:text-sm text-xs text-center ">До нового года осталось:</h2>
          <span className=" flex justify-center gap-1 font-bold text-xs flex-row">
            <div className="flex-col  p-2 bg-[#222327] rounded-2xl">
              <div>{days}</div>
              <div>дня</div>
            </div>
            <div className="flex-col p-2 bg-[#222327] rounded-2xl">
              <div>{hours}</div>
              <div>часа</div>
            </div>
            <div className="flex-col p-2 bg-[#222327] rounded-2xl">
              <div>{minutes}</div>
              <div>минуты</div>
            </div>
            <div className="flex-col p-2 bg-[#222327] rounded-2xl">
              <div>{seconds}</div>
              <div>секунды</div>
            </div>
          </span>
        </div>
      );
    }
  };
  return (
    <div>
      {/* <img src="1.png" alt="tailwind logo" className=""/> */}

      <div className="grid grid-cols-5 grid-rows-5 gap-4 lg:gap-6 sm:p-0 p-8 min-h-screen bg-gradient-to-b from-black via-purple-100 to-[#191970]">
        <div className="col-span-5 row-start-2 col-start-1  text-lg font-bold text-center p-2 rounded-2xl bg-yellow-400/75 shadow-2xl shadow-[#FFD700] hover:scale-125 xl:hover:scale-125 lg:hover:scale-125 md:hover:scale-125 transition-all transform duration-500">
          <h1 className="my-auto xl:text-2xl drop-shadow-2xl shadow-black">
            <font size="24" color="#6A5ACD" face="Playball">
              С наступающим 2023 годом!
            </font>
          </h1>
          <img className=" mx-auto xl:11/12" src="cmp.png" alt="gift" />
        </div>

        <div className="my-auto col-span-3 row-start-3 col-start-1 rounded-3xl bg-yellow-400/75 shadow-2xl shadow-[#FFD700] hover:shadow-2xl hover:scale-125 xl:hover:scale-125 lg:hover:scale-125 md:hover:scale-125 transition-all transform duration-500 ">
          <h1 className=" flex justify-evenly  drop-shadow-2xl shadow-black">
            <font color="#6A5ACD" face="Playball">
              Тыкни на картинку
            </font>
          </h1>
          <img
            className="rounded-t-3xl rounded-3xl mx-auto p-0 scale-50 hover:scale-150 xl:hover:scale-125 lg:hover:scale-125 md:hover:scale-125 sm:hover:scale-150 transition-all transform duration-700 "
            src="ph3.png"
            alt="photo"
          />
        </div>

        <div className="col-span-2 col-start-4 row-start-3 rounded-3xl bg-yellow-400/75 shadow-2xl shadow-[#FFD700] hover:scale-125 xl:hover:scale-125 lg:hover:scale-125 md:hover:scale-125 transition-all transform duration-500">
        <h1 className="text-center text-2xl pt-16">
            <font color=".8135L13" face="Playball">
              Александр Лада поздравляет всех с новым годом!
            </font>
          </h1>
          
        </div>

        <div className="col-span-3 col-start-1 row-start-4 rounded-3xl bg-yellow-400/75 shadow-2xl shadow-[#FFD700] hover:scale-125 xl:hover:scale-125 lg:hover:scale-125 md:hover:scale-125 transition-all transform duration-500">
        <Countdown date={"2023-01-01T00:00:00"} renderer={renderer}>
        </Countdown>

        <img src="ph.png" alt="photo" className="w-24 rounded-3xl mx-auto shadow-2xl shadow-[#191970]"/>
        </div>
        

        <div className="col-span-2 col-start-4 row-start-4 rounded-3xl bg-yellow-400/75 shadow-2xl shadow-[#FFD700] hover:scale-125 xl:hover:scale-125 lg:hover:scale-125 md:hover:scale-125 transition-all transform duration-500">
          <h1 className="flex justify-evenly drop-shadow-2xl shadow-black">
            <font color="#6A5ACD" face="Playball">
              И на эту
            </font>
          </h1>
          <img
            className="rounded-t-3xl rounded-3xl mx-auto p-0 mb-2 scale-100 hover:scale-150 xl:hover:scale-125 lg:hover:scale-125 md:hover:scale-125 sm:hover:scale-150 transition-all transform duration-700"
            src="ph4.png"
            alt="photo"
          />
          
        </div>
        <img
          className="col-start-5 row-start-1 w-44"
          src="moon.png"
          alt="moon"
        />

        <Star />
        <Star1 />
        <Star2 />
        <Star3 />
        <Star4 />
        <Star5 />
        <Star6 />

        <div className="col-start-1 row-start-2 col-span-5 row-span-3 rounded-3xl  bg-red-500/75 shadow-2xl  shadow-[#CD5C5C]"></div>
      </div>
    </div>
  );
}
