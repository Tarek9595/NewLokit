import Swal from "sweetalert2";
import { useCurrentOrder, useStage, useCart } from "../../store";
import ViewOrdered from "./ViewOrdered";
import { useNavigate } from "react-router";

export default function OrderDetails() {
  const { selectedOrder } = useCurrentOrder();

  const { clearOrderHistory } = useCart();
  // زرار تسريع الاوردر من مرحلة الي مرحلة
  const { stage, setStage } = useStage();
  const changeStage = () => {
    setStage(stage + 1);
  };
  const handleCancelClick = () => {
    if (stage < 2) {
      confirmRemove();
    }
  };
  // زرار تسريع الاوردر من مرحلة الي مرحلة

  const navigate = useNavigate();

  const confirmRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to Cancel this order?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0F172B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        clearOrderHistory();
        window.scrollTo(0, 0);
        Swal.fire({
          title: "Removed!",
          text: "Order has been removed.",
          icon: "success",
          timer: 500,
          showConfirmButton: false,
        });
        navigate("/");
      }
    });
  };

  if (!selectedOrder)
    return <div className="p-10 text-center">No Order Selected</div>;

  return (
    <div className="flex flex-col gap-8">
      <div className=" md:w-[85%] bg-white shadow-lg p-6 rounded-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-darky uppercase">
            {selectedOrder.orderId}
          </h2>
          <p className="text-sm text-gray-500">
            {selectedOrder.items.length} Products • Ordered on
            {selectedOrder.date}
          </p>
          <span className="text-[#E26F1D] font-medium text-sm">
            {selectedOrder.status}
          </span>
        </div>
        <div className="text-2xl font-bold text-darky">
          {selectedOrder.totalPrice} EGP
        </div>
      </div>

      <div className="py-6 flex flex-col gap-8 ">
        <div className="w-full flex flex-col lg:flex-row justify-between pr-10">
          <p className="text-sm">
            Order expected arrival
            <span className="font-bold">23 Jan, 2021</span>
          </p>

          {/* <button
            className="px-5 bg-darky text-white text-sm font-bold rounded-xl uppercase cursor-pointer"
            onClick={changeStage}
          >
            go go
          </button> */}
        </div>
        <ViewOrdered />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <h3 className="font-bold text-darky">
          Product ({selectedOrder.items.length})
        </h3>
        <div className="overflow-x-auto">
          <table className="text-left text-sm border-collapse w-full">
            <thead className="bg-[#F3F4F6] text-gray-600  text-[12px] px-2">
              <tr>
                <th className="py-4 px-1">Products</th>
                <th className="py-4 px-1 text-center">Price</th>
                <th className="py-4 px-1 text-center">Quantity</th>
                <th className="py-4 px-1 text-center">Sub-Total</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder.items.map((item, index) => {
                return (
                  <tr
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                    className="border-b border-gray-100 text-[12px] md:text-sm"
                  >
                    <td className="py-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
                      <img
                        src={item.images?.[0] || item.images || item.img}
                        className="w-14 h-14 object-cover rounded border border-gray-100 shrink-0"
                        alt={item.productName || item.name}
                      />
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[14px] font-bold text-darky line-clamp-1">
                          {item.productName || item.name}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 text-[12px] capitalize font-medium">
                          <span>color:</span>
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-gray-300 inline-block"
                            style={{
                              backgroundColor: item.selectedColor || item.color,
                            }}
                          ></span>
                          <span className="w-2 h-px bg-gray-400"></span>
                          <span>
                            size:{" "}
                            <strong className="uppercase text-darky font-bold">
                              {item.selectedSize || "M"}
                            </strong>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-center font-medium">
                      {item.price} EGP
                    </td>
                    <td className="py-4 text-center text-gray-500">
                      x{item.qty || item.quantity || 1}
                    </td>
                    <td className="py-4 text-center font-bold text-darky">
                      {(item.price * (item.qty || item.quantity || 1)).toFixed(
                        2,
                      )}{" "}
                      EGP
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  gap-8 w-fit border-2 border-gray-100 p-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-darky pb-2">Shipping Address</h3>
          <div className="text-[14px] text-gray-600 leading-relaxed">
            <p className="font-bold text-darky">
              {selectedOrder.customerDetails?.firstName}{" "}
              {selectedOrder.customerDetails?.lastName}
            </p>
            <p>{selectedOrder.customerDetails?.streetAddress}</p>
            <p>
              {selectedOrder.customerDetails?.city},{" "}
              {selectedOrder.customerDetails?.governorate}
            </p>
            <p className="mt-2 text-darky">
              Phone:{" "}
              <span className="font-medium">
                {selectedOrder.customerDetails?.phone}
              </span>
            </p>
            <p className="text-darky">
              Email:{" "}
              <span className="font-medium">
                {selectedOrder.customerDetails?.email}
              </span>
            </p>
          </div>
        </div>
        <div className="md:w-0.5 md:h-full w-full h-0.5 bg-gray-100"></div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-darky pb-2">Order Notes</h3>
          <p className="text-[14px] text-gray-600 italic">
            "
            {selectedOrder.customerDetails?.orderNotes ||
              "No notes provided for this order."}
            "
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-8 flex flex-col gap-4">
        <p className="text-sm font-bold text-darky uppercase">
          Want to Cancel Your Order?
        </p>
        <p className="text-xs text-gray-500">
          You can cancel your order anytime before it is shipped.
        </p>
        <button
          className={`w-[70%] px-8 py-3 md:w-75 md:p-3  text-sm font-bold rounded-xl uppercase cursor-pointer ${stage >= 2 ? "bg-darky/15 text-darky/15" : "bg-darky text-white"}`}
          onClick={handleCancelClick}
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
}
