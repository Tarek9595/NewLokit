import Notebook from "../../assets/img/icons/Notebook.svg";
import Package from "../../assets/img/icons/Package.svg";
import Truck from "../../assets/img/icons/Truck.svg";
import Handshake from "../../assets/img/icons/Handshake.svg";
import { useState } from "react";

export default function Test() {
  const [stage, setStage] = useState(3);

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

  const finalProgress =
    stage === 0
      ? "md:w-47 lg:w-45 xl:w-60 2xl:w-75"
      : stage === 1
        ? "md:w-95 lg:w-85 xl:w-120 2xl:w-155"
        : "md:w-145 lg:w-120 xl:w-180 2xl:w-225";

  return (
    <div className="w-full sm:h-30 h-100 flex sm:flex-row flex-col sm:justify-center relative ">
      <div className="sm:w-[81%] xl:w-[85%] w-2 sm:h-2 h-[89%] -z-10 relative">
        <div className="w-full h-full absolute bg-darky/15"></div>
        <div className={`h-full absolute z-10 bg-darky ` + finalProgress}></div>
      </div>

      <div className="pl-5 sm:w-[95%] sm:h-full h-[95%] flex sm:flex-row flex-col justify-between items-between sm:items-center absolute -top-2.25 sm:left-0 -left-7">
        {steps.map((step, index) => (
          <div
            key={index}
            className=" flex gap-3 sm:flex-col items-center sm:h-full"
          >
            <div
              className={
                `w-6 h-6 rounded-full border-3 border-white` + " bg-darky"
              }
            ></div>
            <div className="w-8 h-8 shrink-0">
              <img
                src={step.icon}
                className={`w-full h-full object-contain` + " text-darky"}
                alt={step.label}
              />
            </div>
            <span className={`text-darky`}>{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
