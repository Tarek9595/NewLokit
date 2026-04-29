// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useShare } from "../../store";
import { FaXmark } from "react-icons/fa6";
import CopyLink from "../../assets/img/icons/Copy.svg";
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";

export default function ShareLink() {
  const { openShare, setOpenShare } = useShare();

  const shareLinks = [
    {
      id: 1,
      name: "Facebook",
      icon: <FaFacebookF size={20} />,
      url: "https://www.facebook.com/",
      color: "hover:text-[#1877F2]", // لون فيسبوك الرسمي
    },
    {
      id: 2,
      name: "X",
      icon: <FaXTwitter size={20} />,
      url: "https://x.com/",
      color: "hover:text-black", // لون X الرسمي
    },
    {
      id: 3,
      name: "Pinterest",
      icon: <FaPinterestP size={20} />,
      url: "https://www.pinterest.com/",
      color: "hover:text-[#BD081C]", // لون بينترست
    },
    {
      id: 4,
      name: "Telegram",
      icon: <FaTelegram size={20} />,
      url: "https://web.telegram.org/",
      color: "hover:text-[#229ED9]", // لون تليجرام
    },
    {
      id: 5,
      name: "WhatsApp",
      icon: <FaWhatsapp size={20} />,
      url: "https://web.whatsapp.com/",
      color: "hover:text-[#25D366]", // لون واتساب
    },
  ];

  return (
    <AnimatePresence>
      {openShare && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-dvh bg-darky/15 fixed top-0 left-0 z-9999 flex justify-center lg:justify-end items-center lg:items-start lg:py-56.25 lg:px-73.75 py-8 px-10"
          onClick={() => setOpenShare(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-112.5 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col p-6 gap-10"
          >
            <div className="flex flex-col gap-6">
              <div className="w-full flex justify-between items-center border-b border-gray-100">
                <h1 className="text-[18px] text-darky font-bold">Copy Link</h1>
                <button
                  onClick={() => setOpenShare(false)}
                  className="cursor-pointer w-9 h-9 flex justify-center items-center rounded-full hover:bg-gray-100 transition-colors text-darky"
                >
                  <FaXmark size={20} />
                </button>
              </div>

              <div className="flex items-center gap-3 bg-white w-full">
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] text-gray-500 truncate p-4 border border-gray-200 rounded-md">
                    https://Lokit.io/Store_lokit/products/very-long-url-that-should-be-truncated-with-dots
                  </p>
                </div>

                <button
                  className=" hover:bg-gray-50 transition-all active:scale-95 group cursor-pointer  p-4 border border-gray-200 rounded-md"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "https://Lokit.io/Store_lokit/products/very-long-url-that-should-be-truncated-with-dots",
                    );
                  }}
                >
                  <img src={CopyLink} />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-[18px] text-darky font-bold">Share</h1>

              <div className="flex items-center gap-5 bg-white w-full">
                {shareLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[24px] text-gray-500 cursor-pointer transition-all duration-300 transform hover:scale-125 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
