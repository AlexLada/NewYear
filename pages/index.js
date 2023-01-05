// import Image from "next/image"

import Star from "../components/star";
import Star1 from "../components/star1";
import Star2 from "../components/star2";
import Star3 from "../components/star3";
import Star4 from "../components/star4";
import Star5 from "../components/star5";
import Star6 from "../components/star6";
import Countdown from "react-countdown";
import React from "react";


export default function Index() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div>Рождество прошло</div>;
    } else {
      return (
        <div className=" place-self-center pt-2 w-full">
          <h2 className="xl:text-sm text-xs text-center ">До рождества осталось:</h2>
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
    <div className="flex h-screen w-full" >
      <div className="flex-1 bg-center">
      <img className="" src="bg.png" alt="bg"/>
      </div>    
    </div>
  );
}
