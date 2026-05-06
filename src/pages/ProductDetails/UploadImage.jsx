// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useUpload } from "../../store";
import starsWhite from "../../assets/img/icons/starsWhite.svg";
import Camera from "../../assets/img/icons/Camera.svg";
import Gallery from "../../assets/img/icons/Gallery.svg";
import NoImage from "../../assets/img/icons/noImage.svg";

export default function UploadImage() {
  const { openUpload, setOpenUpload } = useUpload();

  return (
    // <AnimatePresence>
    //   {openUpload && (
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       exit={{ opacity: 0 }}
    //       className="w-full h-[80vh] bg-darky/15 fixed z-9999 flex justify-center lg:justify-end items-center lg:items-start lg:py-56.25 lg:px-73.75 p-10"
    //       onClick={() => setOpenUpload(false)}
    //     >
    //       <motion.div
    //         initial={{ scale: 0.8, opacity: 0, y: 20 }}
    //         animate={{ scale: 1, opacity: 1, y: 0 }}
    //         exit={{ scale: 0.8, opacity: 0, y: 20 }}
    //         transition={{ type: "spring", stiffness: 300, damping: 25 }}
    //         onClick={(e) => e.stopPropagation()}
    //         className="w-full max-w-112.5 bg-white rounded-2xl shadow-2xl xl:absolute xl:left-150 xl:top-5 overflow-hidden flex flex-col p-6 gap-10"
    //       >
    //         <div className="flex flex-col items-center gap-7">
    //           <h1 className="text-[16px] text-darky font-bold">
    //             Al Try - On Preview
    //           </h1>

    //           <div className="w-full h-100 flex flex-col justify-center items-center gap-8">
    //             <div className="w-13 h-13 shrink-0">
    //               <img src={NoImage} className="w-full h-full object-contain" />
    //             </div>
    //             <h1 className="text-[16px] text-darky/55">No image selected</h1>
    //           </div>

    //           <div className="flex flex-col gap-6 w-full">
    //             <button className="w-full bg-darky p-3 text-white text-[18px] font-bold flex gap-1 justify-center items-center rounded-xl cursor-pointer">
    //               <div className="w-4 h-4 shrink-0">
    //                 <img
    //                   src={starsWhite}
    //                   className="w-full h-full object-contain"
    //                 />
    //               </div>
    //               <span>Try On Product</span>
    //             </button>
    //             <div className="w-full flex justify-center items-center gap-1.5">
    //               <button className="w-1/2 border border-darky/30 rounded-xl flex justify-center items-start gap-2 p-3.5 text-darky text-[16px] font-medium cursor-pointer">
    //                 <div className="w-5 h-5 shrink-0">
    //                   <img
    //                     src={Camera}
    //                     className="w-full h-full object-contain"
    //                   />
    //                 </div>
    //                 <span>Camera</span>
    //               </button>
    //               <button className="w-1/2 border border-darky/30 rounded-xl flex justify-center items-start gap-2 p-3.5 text-darky text-[16px] font-medium cursor-pointer">
    //                 <div className="w-5 h-5 shrink-0">
    //                   <img
    //                     src={Gallery}
    //                     className="w-full h-full object-contain"
    //                   />
    //                 </div>
    //                 <span>Gallery</span>
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </motion.div>
    //     </motion.div>
    //   )}
    // </AnimatePresence>
    <AnimatePresence>
      {openUpload && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 w-full h-dvh bg-darky/20 z-9999 flex justify-center items-center p-4"
          onClick={() => setOpenUpload(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-100 h-[90%] lg:h-auto bg-white rounded-3xl shadow-2xl flex flex-col p-5 md:p-8 gap-5 md:gap-8"
          >
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-[16px] md:text-[18px] text-darky font-bold">
                AI Try - On Preview
              </h1>

              <div className="w-full h-70 flex flex-col justify-center items-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100 gap-4">
                <div className="w-12 h-12 opacity-30">
                  <img
                    src={NoImage}
                    className="w-full h-full object-contain"
                    alt="no-image"
                  />
                </div>
                <h1 className="text-[14px] text-darky/40 font-medium">
                  No image selected
                </h1>
              </div>

              <div className="flex flex-col gap-3 md:gap-4 w-full">
                <button className="w-full bg-darky hover:bg-black p-3.5 text-white text-[16px] font-bold flex gap-2 justify-center items-center rounded-xl cursor-pointer transition-colors">
                  <img
                    src={starsWhite}
                    className="w-4 h-4 object-contain"
                    alt="stars"
                  />
                  <span>Try On Product</span>
                </button>

                <div className="w-full flex justify-center items-center gap-3">
                  <button className="flex-1 border border-gray-200 hover:bg-gray-50 rounded-xl flex justify-center items-center gap-2 py-3 text-darky text-[14px] font-semibold cursor-pointer">
                    <img
                      src={Camera}
                      className="w-4 h-4 object-contain"
                      alt="camera"
                    />
                    <span>Camera</span>
                  </button>
                  <button className="flex-1 border border-gray-200 hover:bg-gray-50 rounded-xl flex justify-center items-center gap-2 py-3 text-darky text-[14px] font-semibold cursor-pointer">
                    <img
                      src={Gallery}
                      className="w-4 h-4 object-contain"
                      alt="gallery"
                    />
                    <span>Gallery</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
