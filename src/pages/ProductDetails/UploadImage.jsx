// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Webcam from "react-webcam";
import { useUpload, useCurrentProduct } from "../../store";
import toast from "react-hot-toast";

import starsWhite from "../../assets/img/icons/starsWhite.svg";
import Camera from "../../assets/img/icons/Camera.svg";
import Gallery from "../../assets/img/icons/Gallery.svg";
import NoImage from "../../assets/img/icons/noImage.svg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdDownload } from "react-icons/md";

export default function UploadImage() {
  const {
    openUpload,
    setOpenUpload,
    tryOnProduct,
    isLoadingTryOn,
    tryOnResult,
    uploadError,
  } = useUpload();

  const { currentProduct } = useCurrentProduct();

  const [selectedImage, setSelectedImage] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const galleryInputRef = useRef(null);
  const webcamRef = useRef(null);

  const fallbackImage = NoImage;
  const productImageUrl =
    currentProduct?.images && currentProduct.images.length > 0
      ? currentProduct.images[0]
      : currentProduct?.img || fallbackImage;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsCameraActive(false);
      setSelectedImage({
        file: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      fetch(imageSrc)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "captured-image.jpg", {
            type: "image/jpeg",
          });
          setSelectedImage({
            file: file,
            preview: imageSrc,
          });
          setIsCameraActive(false);
        });
    }
  };

  const handleAiTryOnSubmit = async () => {
    if (!currentProduct?.id) {
      toast.error("Product ID is missing!");
      return;
    }
    if (!selectedImage?.file) {
      toast.error("Please upload or capture your photo first!");
      return;
    }

    await tryOnProduct(currentProduct.id, selectedImage.file);

    if (uploadError) {
      toast.error(uploadError);
    }
  };

  return (
    <AnimatePresence>
      {openUpload && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 w-full h-full bg-darky/40 z-9999 flex justify-center items-center p-6"
          onClick={() => setOpenUpload(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl h-auto max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col p-6 md:p-8 gap-6 overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-[18px] text-darky font-bold uppercase tracking-tight flex items-center gap-2">
                <img src={starsWhite} alt="stars" className="w-5 h-5 invert" />{" "}
                AI Try - On Studio
              </h1>

              <input
                type="file"
                accept="image/*"
                ref={galleryInputRef}
                className="hidden"
                onChange={handleImageChange}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-2">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    01 - Your Photo
                  </span>
                  <div className="relative aspect-3/4 bg-btnGray rounded-xl overflow-hidden flex items-center justify-center border-2 border-dashed border-gray-200">
                    {isCameraActive ? (
                      <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="w-full h-full object-cover"
                      />
                    ) : selectedImage ? (
                      <img
                        src={selectedImage.preview}
                        alt="Your preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center text-center p-4 text-gray-400 gap-2">
                        <img
                          src={NoImage}
                          alt="No image"
                          className="w-12 h-12 opacity-40"
                        />
                        <p className="text-xs">
                          Take a photo or upload one from your device
                        </p>
                      </div>
                    )}

                    {isCameraActive && (
                      <button
                        onClick={capturePhoto}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-darky text-white px-4 py-2 rounded-full text-xs font-semibold hover:opacity-90"
                      >
                        Capture
                      </button>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mt-1">
                    <button
                      onClick={() => {
                        setIsCameraActive(!isCameraActive);
                        setSelectedImage(null);
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-xs font-semibold transition-all ${
                        isCameraActive
                          ? "bg-red-50 text-red-500 border-red-200"
                          : "bg-white text-darky border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <img src={Camera} alt="Camera" className="w-4 h-4" />
                      {isCameraActive ? "Cancel" : "Use Camera"}
                    </button>
                    <button
                      onClick={() => galleryInputRef.current.click()}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white text-darky border border-gray-200 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-all"
                    >
                      <img src={Gallery} alt="Gallery" className="w-4 h-4" />
                      Upload Photo
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    02 - AI Result
                  </span>
                  <div className="relative aspect-3/4 bg-btnGray rounded-xl overflow-hidden flex items-center justify-center border border-gray-100">
                    {isLoadingTryOn ? (
                      <div className="flex flex-col items-center gap-3 text-darky font-semibold text-sm">
                        <AiOutlineLoading3Quarters className="text-3xl animate-spin" />
                        <span className="animate-pulse">
                          AI is dressing you up...
                        </span>
                      </div>
                    ) : tryOnResult ? (
                      <div className="w-full h-full relative">
                        <img
                          src={tryOnResult}
                          alt="AI Try On Result"
                          className="w-full h-full object-cover"
                        />
                        <a
                          href={tryOnResult}
                          download={`tryon-${currentProduct?.id || "result"}.jpg`}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute bottom-3 right-3 bg-white/95 backdrop-blur p-2.5 rounded-xl shadow-md text-darky hover:bg-darky hover:text-white transition-all text-xl"
                          title="Download Result"
                        >
                          <MdDownload />
                        </a>
                      </div>
                    ) : (
                      <div className="w-full h-full relative group">
                        <img
                          src={productImageUrl}
                          alt="Target Product"
                          className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center p-4">
                          <span className="bg-white/90 backdrop-blur text-darky px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider shadow-sm">
                            {currentProduct?.productName || "Selected Product"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={handleAiTryOnSubmit}
                disabled={isLoadingTryOn || !selectedImage}
                className="w-full mt-4 bg-darky text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
              >
                {isLoadingTryOn ? (
                  <>
                    <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                    Generating your look...
                  </>
                ) : (
                  <>
                    <img src={starsWhite} alt="stars" className="w-4 h-4" />
                    Generate Magic Look
                  </>
                )}
              </button>

              {uploadError && (
                <p className="text-xs text-red-500 font-semibold text-center mt-1 animate-pulse">
                  {uploadError}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
