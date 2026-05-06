import { useReviews } from "../../store";
import { FaXmark } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import MyInput from "../../components/common/MyInput";
import MyForm from "../../components/common/MyForm";
import CstBtn from "../../components/common/CstBtn";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

export default function AddReview() {
  const { openReview, setOpenReview, setReview } = useReviews();

  const initialValues = {
    fullName: "",
    email: "",
    comment: "",
    rating: 0,
  };

  const reviewSchema = Yup.object().shape({
    fullName: Yup.string().required(""),
    email: Yup.string().email("Invalid email").required(""),
    comment: Yup.string().min(10, "Review is too short").required(""),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newReview = {
      id: Date.now(),
      name: values.fullName,
      email: values.email,
      comment: values.comment,
      rating: values.rating,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    setReview(newReview);
    setOpenReview(false);
    resetForm();
    toast.success("Review submitted successfully!");
  };

  return (
    <AnimatePresence>
      {openReview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-dvh bg-darky/15 fixed top-0 left-0 z-9999 flex justify-center items-center py-8 px-10 backdrop-blur-[2px]"
          onClick={() => setOpenReview(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:w-106 h-[95%] bg-white rounded-lg shadow-2xl py-7 flex flex-col no-scrollbar overflow-y-auto"
          >
            <div className="w-full flex justify-between items-center p-5">
              <h1 className="text-[18px] text-darky font-bold">Write Review</h1>
              <button
                className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-full hover:bg-gray-100 transition-colors text-darky"
                onClick={() => setOpenReview(false)}
              >
                <FaXmark size={20} />
              </button>
            </div>

            <div className="p-7 border-t border-darky/10">
              <MyForm
                initialValues={initialValues}
                validationSchema={reviewSchema}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {({ setFieldValue, values, errors, touched }) => (
                  <>
                    <MyInput
                      name="email"
                      accName="Email Address"
                      type="email"
                      shap={true}
                    />
                    <MyInput
                      name="fullName"
                      accName="Full Name"
                      type="text"
                      shap={true}
                    />
                    <MyInput
                      name="comment"
                      accName="Review"
                      as="textarea"
                      shap={true}
                      className="h-32"
                    />

                    <div className="flex flex-col gap-2">
                      <div className="flex text-2xl text-darky">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className="cursor-pointer transition-transform hover:scale-110"
                            onClick={() => setFieldValue("rating", star)}
                          >
                            {star <= values.rating ? (
                              <MdOutlineStar className="text-darky" />
                            ) : (
                              <MdOutlineStarBorder className="text-gray-300" />
                            )}
                          </button>
                        ))}
                      </div>
                      {errors.rating && touched.rating && (
                        <span className="text-red-500 text-xs font-bold">
                          {errors.rating}
                        </span>
                      )}
                    </div>

                    <div className="mt-4">
                      <CstBtn fullWidth="true" type="submit" size="sm">
                        Submit Your Review
                      </CstBtn>
                    </div>
                  </>
                )}
              </MyForm>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
