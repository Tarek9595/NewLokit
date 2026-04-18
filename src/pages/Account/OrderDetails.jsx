import { useCurrentOrder } from "../../store";
import { BsClipboardCheck } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";
import Test from "./Test";

export default function OrderDetails() {
  const { selectedOrder } = useCurrentOrder();

  if (!selectedOrder)
    return <div className="p-10 text-center">No Order Selected</div>;

  console.log(selectedOrder);
  return (
    <div className="flex flex-col gap-8">
      <div className=" md:w-[85%] bg-white shadow-lg p-6 rounded-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-darky uppercase">
            {selectedOrder.orderId}
          </h2>
          <p className="text-sm text-gray-500">
            {selectedOrder.items.length} Products • Ordered on{" "}
            {selectedOrder.date}
          </p>
          <span className="text-[#E26F1D] font-medium text-sm">
            {selectedOrder.status}
          </span>
        </div>
        <div className="text-2xl font-bold text-darky">
          ${selectedOrder.totalPrice}
        </div>
      </div>

      {/* Order Progress Bar */}
      <div className="py-6 flex flex-col gap-8 ">
        <p className="text-sm">
          Order expected arrival <span className="font-bold">23 Jan, 2021</span>
        </p>
        <Test />
      </div>

      {/* Products Table */}
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
              {selectedOrder.items.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 text-[12px] md:text-sm"
                >
                  <td className="py-4 flex flex-col md:flex-row gap-2">
                    <img
                      src={item.img}
                      className="w-14 h-14 object-cover rounded"
                      alt={item.name}
                    />
                    <div className="flex flex-col gap-3">
                      <span className=" text-darky">{item.brand}</span>
                      <span className=" text-darky">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-center font-medium">
                    ${item.price}
                  </td>
                  <td className="py-4 text-center text-gray-500">
                    x{item.qty || 1}
                  </td>
                  <td className="py-4 text-center font-bold text-darky">
                    ${(item.price * (item.qty || 1)).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Address and Notes Section */}
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

      {/* Cancel Action */}
      <div className="border-t border-gray-100 pt-8 flex flex-col gap-4">
        <p className="text-sm font-bold text-darky uppercase">
          Want to Cancel Your Order?
        </p>
        <p className="text-xs text-gray-500">
          You can cancel your order anytime before it is shipped.
        </p>
        <button className="w-[70%] px-8 py-3 md:w-75 md:p-3 bg-darky text-white text-sm font-bold rounded-xl uppercase">
          Cancel Order
        </button>
      </div>
    </div>
  );
}
