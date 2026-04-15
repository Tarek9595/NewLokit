import { BsBoxSeam, BsFileText, BsHandThumbsUp, BsTruck } from "react-icons/bs";

export default function Test() {
  const steps = [
    {
      label: "Order Placed",
      icon: <BsFileText className="text-2xl text-darky" />,
    },
    { label: "Packaging", icon: <BsBoxSeam className="text-2xl text-darky" /> },
    { label: "On The Road", icon: <BsTruck className="text-2xl text-darky" /> },
    {
      label: "Delivered",
      icon: <BsHandThumbsUp className="text-2xl text-darky" />,
    },
  ];
  return (
    <div className="w-full flex justify-center relative h-30">
      <div className="w-[80%] h-2 bg-darky -z-10"></div>

      <div className="w-[93%] xl:w-[90%] h-full flex justify-between absolute -top-2.25">
        {steps.map((step, index) => (
          <div
            key={index}
            className={` flex gap-3 flex-col items-center` + " h-full"}
          >
            <div className="w-6 h-6 bg-darky rounded-full"></div>
            {step.icon}
            <span className="">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
