/* eslint-disable no-unused-vars */
import Notebook from "../../assets/img/icons/Notebook.svg";
import Package from "../../assets/img/icons/Package.svg";
import Truck from "../../assets/img/icons/Truck.svg";
import Handshake from "../../assets/img/icons/Handshake.svg";
import { useState } from "react";

export default function ViewOrdered() {
  const [stage, setStage] = useState(0);

  const steps = [
    {
      label: "Order Placed",
      icon: Notebook,
    },
    { label: "Packaging", icon: Package },
    { label: "On The Road", icon: Truck },
    {
      label: "Delivered",
      icon: Handshake,
    },
  ];

  const progressPercent = (stage / (steps.length - 1)) * 100;

  return (
    <div className="w-full sm:h-30 h-100 flex sm:flex-row flex-col sm:justify-center relative ">
      <div className="sm:w-[81%] xl:w-[85%] w-2 sm:h-2 h-[89%] -z-10 relative">
        <div className="w-full h-full absolute bg-darky/15"></div>
        <div
          className={`absolute z-10 bg-darky transition-all duration-700 ease-in-out`}
          style={{
            width:
              typeof window !== "undefined" && window.innerWidth >= 640
                ? `${progressPercent}%`
                : "100%",
            height:
              typeof window !== "undefined" && window.innerWidth < 640
                ? `${progressPercent}%`
                : "100%",
          }}
        ></div>
      </div>

      <div className="pl-5 sm:w-[95%] sm:h-full h-[95%] flex sm:flex-row flex-col justify-between items-between sm:items-center absolute -top-2.25 sm:left-0 -left-7">
        {steps.map((step, index) => {
          const isActive = index <= stage;
          return (
            <div
              key={index}
              className="flex gap-3 sm:flex-col items-center sm:h-full"
            >
              <div
                className={
                  isActive
                    ? "bg-darky  w-6 h-6 rounded-full border-3 border-white"
                    : "bg-darky/40  w-6 h-6 rounded-full border-3 border-white"
                }
              ></div>
              <div className={"w-8 h-8 shrink-0"}>
                <img
                  src={step.icon}
                  className={
                    isActive
                      ? "grayscale-0 w-full h-full object-contain"
                      : "grayscale w-full h-full object-contain"
                  }
                  alt={step.label}
                />
              </div>
              <span className={isActive ? "text-darky" : "text-darky/50"}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
