// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useUpload } from "../../store";
import starsWhite from "../../assets/img/icons/starsWhite.svg";
import Camera from "../../assets/img/icons/Camera.svg";
import Gallery from "../../assets/img/icons/Gallery.svg";
import NoImage from "../../assets/img/icons/noImage.svg";

export default function UploadImage() {
  const { openUpload, setOpenUpload } = useUpload();

  // State لحفظ الصورة المحددة (الملف والرابط المعاين)
  const [selectedImage, setSelectedImage] = useState(null);

  // Refs للتحكم في الـ Inputs المخفية عن طريق الأزرار
  const galleryInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  // دالة التعامل مع اختيار الصورة
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage({
        file: file, // الملف الفعلي لو هتبعتة للـ API بعدين
        preview: URL.createObjectURL(file), // رابط المعاينة المؤقت
      });
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
            className="w-full max-w-100 h-auto max-h-[85vh] bg-white rounded-xl shadow-2xl flex flex-col p-6 md:p-8 gap-6 md:gap-8 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-[16px] md:text-[18px] text-darky font-bold uppercase tracking-tight">
                AI Try - On Preview
              </h1>

              {/* Inputs المخفية */}
              {/* input المعرض العادي */}
              <input
                type="file"
                accept="image/*"
                ref={galleryInputRef}
                className="hidden"
                onChange={handleImageChange}
              />
              {/* input الكاميرا المباشرة للموبايل */}
              <input
                type="file"
                accept="image/*"
                capture="environment"
                ref={cameraInputRef}
                className="hidden"
                onChange={handleImageChange}
              />

              <div className="w-full h-60 md:h-72 flex flex-col justify-center items-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100 gap-4">
                {/* <div className="w-14 h-14 opacity-20">
                  <img
                    src={NoImage}
                    className="w-full h-full object-contain"
                    alt="no-image"
                  />
                </div>
                <h1 className="text-[14px] text-darky/40 font-medium">
                  No image selected
                </h1> */}

                {selectedImage ? (
                  // إذا تم اختيار صورة، يتم عرضها هنا بالكامل داخل الكادر
                  <img
                    src={selectedImage.preview}
                    className="w-full h-full object-cover rounded-3xl"
                    alt="selected-preview"
                  />
                ) : (
                  // إذا لم يتم اختيار صورة، يظهر الشكل الافتراضي القديم
                  <>
                    <div className="w-14 h-14 opacity-20">
                      <img
                        src={NoImage}
                        className="w-full h-full object-contain"
                        alt="no-image"
                      />
                    </div>
                    <h1 className="text-[14px] text-darky/40 font-medium">
                      No image selected
                    </h1>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-4 w-full">
                <button className="w-full bg-darky hover:bg-black p-4 text-white text-[16px] font-bold flex gap-2 justify-center items-center rounded-2xl cursor-pointer transition-all active:scale-95">
                  <img
                    src={starsWhite}
                    className="w-4 h-4 object-contain"
                    alt="stars"
                  />
                  <span>Try On Product</span>
                </button>

                <div className="w-full flex justify-center items-center gap-3">
                  <button
                    className="flex-1 border border-gray-200 hover:bg-gray-50 rounded-2xl flex justify-center items-center gap-2 py-3.5 text-darky text-[14px] font-bold cursor-pointer transition-all active:scale-95"
                    onClick={() => cameraInputRef.current.click()}
                  >
                    <img
                      src={Camera}
                      className="w-5 h-5 object-contain"
                      alt="camera"
                    />
                    <span>Camera</span>
                  </button>
                  <button
                    className="flex-1 border border-gray-200 hover:bg-gray-50 rounded-2xl flex justify-center items-center gap-2 py-3.5 text-darky text-[14px] font-bold cursor-pointer transition-all active:scale-95"
                    onClick={() => galleryInputRef.current.click()}
                  >
                    <img
                      src={Gallery}
                      className="w-5 h-5 object-contain"
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
