// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useAiModel } from "../../store";
import stars from "../../assets/img/icons/Stars.svg";
import Camera from "../../assets/img/icons/Camera.svg";
import Gallery from "../../assets/img/icons/Gallery.svg";

export default function AiModel() {
  const { openAiModel, setOpenAiModel } = useAiModel();
  const Instructions = [
    "For best results :",
    "1. Stand straight facing the camera.",
    "2. Ensure good lighting ",
    "3. Keep arms slightly away from body.",
    "4. Make sure your full upper body is visible",
  ];

  return (
    <AnimatePresence>
      {openAiModel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-dvh bg-darky/15 fixed z-9999 flex justify-center lg:justify-end items-center lg:items-start lg:py-56.25 lg:px-73.75"
          onClick={() => setOpenAiModel(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-112.5 overflow-hidden xl:absolute xl:left-150 xl:top-30 flex flex-col p-6 gap-10"
          >
            <div className="flex flex-col gap-6">
              <div className="w-full bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center py-6 px-9 gap-8">
                <div className="flex w-full justify-center gap-4">
                  <h1 className="text-[16px] text-darky font-bold">
                    Al Try - Before - you - Buy
                  </h1>
                  <div className="w-6 h-6 shrink-0">
                    <img src={stars} className="w-full h-full object-contain" />
                  </div>
                </div>

                <p className="text-[#5F6368] text-[14px] font-normal">
                  Select an image source
                </p>

                <div className="w-[80%] flex justify-between items-center">
                  <div className="flex flex-col gap-3.5 justify-center items-center">
                    <div className="w-9] h-9 shrink-0 cursor-pointer">
                      <img
                        src={Camera}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-[16px] text-darky">Camera</p>
                  </div>
                  <div className="flex flex-col gap-3.5 justify-center items-center">
                    <div className="w-9 h-9 shrink-0 cursor-pointer">
                      <img
                        src={Gallery}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-[16px] text-darky">Gallery</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center bg-white rounded-2xl shadow-2xl flex-col p-6 gap-6">
                <h1 className="text-darky font-bold">Photo Instructions</h1>
                <div className="w-[80%] flex flex-col gap-2 text-[12px] text-[#5F6368]">
                  {Instructions.map((el, index) => (
                    <span key={index}>{el}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
