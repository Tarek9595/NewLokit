import { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import {
  FiChevronLeft,
  FiMoreVertical,
  FiSend,
  FiCamera,
  FiMessageSquare,
} from "react-icons/fi";
import { useChatStore, useProductStore } from "../../store";
import { useCurrentProduct } from "../../store";

export default function SupportChat() {
  const { messages, sendMessage, isLoading } = useChatStore();
  const { setProduct } = useCurrentProduct();
  const { allProducts, fetchAllProducts } = useProductStore();
  const [inputValue, setInputValue] = useState("");
  const chatContainerRef = useRef(null);
  const navigate = useNavigate();

  const quickReplies = [
    "Recommend products",
    "Where is my order?",
    "Help me choose size",
    "Shipping info",
  ];

  useEffect(() => {
    if (allProducts.length === 0) {
      fetchAllProducts();
    }
  }, [allProducts.length, fetchAllProducts]);

  const featuredProducts = allProducts.slice(0, 9);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isLoading]);

  const handleSend = (text) => {
    if (!text.trim() || isLoading) return;
    sendMessage(text, featuredProducts);
    setInputValue("");
  };

  const openWhatsApp = () => {
    const phoneNumber = "201022361089";
    const message = encodeURIComponent(
      "Hello Lokit Support, I'm reaching out from the website app.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="w-full max-w-md mx-auto h-screen sm:h-[85vh] bg-gray-50 flex flex-col shadow-xl sm:rounded-3xl overflow-hidden border border-gray-100 font-sans">
      <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <FiChevronLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-lg font-medium text-gray-900">
            Support & Chat with us
          </h1>
        </div>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
          <FiMoreVertical size={20} className="text-gray-700" />
        </button>
      </div>

      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => {
            const isBot = msg.sender === "bot";
            return (
              <div key={msg.id} className="flex flex-col w-full gap-2">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`flex w-full ${isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-[14.5px] whitespace-pre-line leading-relaxed shadow-xs relative group
                      ${isBot ? "bg-[#f3f4f6] text-[#2c2c2c] rounded-tl-none" : "bg-[#1a2328] text-white rounded-tr-none"}`}
                  >
                    {msg.text}
                  </div>
                </motion.div>

                {isBot &&
                  msg.isRecommended &&
                  msg.recommendedProducts &&
                  msg.recommendedProducts.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-3 overflow-x-auto pb-2 pt-1 px-1 scrollbar-none w-full"
                    >
                      {msg.recommendedProducts.map((product) => {
                        return (
                          <div
                            key={product.id}
                            onClick={() => {
                              setProduct(product);
                              navigate(`/product/${product.id}`);
                            }}
                            className="min-w-35 max-w-35 bg-white border border-gray-100 rounded-xl p-2 shadow-2xs cursor-pointer hover:shadow-xs transition-all flex flex-col gap-1"
                          >
                            <div className="w-full h-24 overflow-hidden rounded-lg bg-gray-50">
                              <img
                                src={product.images && product.images[0]}
                                alt={product.productName}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-[10px] text-gray-400 font-semibold uppercase truncate">
                              {product.brandName}
                            </span>
                            <h4 className="text-xs font-bold text-gray-800 truncate uppercase">
                              {product.productName}
                            </h4>
                            <span className="text-xs font-semibold text-gray-900">
                              EGP {product.price}
                            </span>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
              </div>
            );
          })}

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start w-full"
            >
              <div className="bg-[#f3f4f6] rounded-2xl rounded-tl-none px-4 py-3.5 flex items-center gap-1">
                <span
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></span>
                <span
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></span>
                <span
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={openWhatsApp}
          className="bg-[#22c55e] hover:bg-[#1bc054] text-white p-4 rounded-2xl flex items-center justify-between cursor-pointer shadow-xs transition-all mt-4 active:scale-[0.99]"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl">
              <FiMessageSquare size={20} />
            </div>
            <div>
              <p className="font-normal text-[14px]">Contact us on WhatsApp</p>
              <p className="text-xs text-emerald-100 font-light mt-0.5">
                +20 102 236 1089
              </p>
            </div>
          </div>
          <FiChevronLeft
            size={18}
            className="transform rotate-180 text-white/80"
          />
        </motion.div>
      </div>

      <div className="px-4 py-2 bg-gray-50/50">
        <div className="flex flex-wrap gap-2 justify-start">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              disabled={isLoading}
              onClick={() => handleSend(reply)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-full text-xs font-normal text-gray-800 hover:bg-[#1a2328] hover:text-white hover:border-[#1a2328] disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 cursor-pointer active:scale-95 shadow-2xs"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
        <div className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 flex items-center gap-2 focus-within:border-gray-300 focus-within:bg-white transition-all">
          <button className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
            <FiCamera size={19} />
          </button>
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            disabled={isLoading}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
            className="w-full bg-transparent border-none outline-none text-gray-800 text-sm placeholder-gray-400 disabled:opacity-50"
          />
        </div>
        <button
          onClick={() => handleSend(inputValue)}
          disabled={isLoading || !inputValue.trim()}
          className="p-3 bg-[#1a2328] text-white rounded-full hover:opacity-90 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer shadow-xs"
        >
          <FiSend size={16} />
        </button>
      </div>
    </div>
  );
}
