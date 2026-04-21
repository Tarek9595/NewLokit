import { useReviews } from "../../store";

export default function AddReview() {
  const { openReview, setOpenReview } = useReviews();
  // py-8 px-10
  return (
    <div
      className={`w-full h-dvh bg-darky/15 fixed top-0 left-0 z-9999 flex justify-center py-8 px-10  ${
        openReview ? "flex" : "hidden"
      }`}
    >
      <button
        className="w-5 h-5 flex justify-center items-center bg-white text-darky"
        onClick={() => setOpenReview(false)}
      >
        X
      </button>
    </div>
  );
}
