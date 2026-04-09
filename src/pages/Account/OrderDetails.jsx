import { useCurrentOrder } from "../../store";

export default function OrderDetails() {
  const { selectedOrder } = useCurrentOrder();

  // لو مفيش طلب مختار (حماية للكود)
  if (!selectedOrder)
    return <div className="p-10 text-center">No Order Selected</div>;

  const steps = [
    { label: "Order Placed", icon: "📋", completed: true },
    { label: "Packaging", icon: "📦", completed: true },
    { label: "On The Road", icon: "🚚", completed: false },
    { label: "Delivered", icon: "✅", completed: false },
  ];

  return (
    <div className="flex flex-col gap-8 w-full animate-fadeIn">
      {/* Header Info */}
      <div className="bg-[#F9FAFB] p-6 rounded-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
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
      <div className="py-6 flex flex-col gap-8">
        <p className="text-sm font-medium">
          Order expected arrival <span className="font-bold">23 Jan, 2021</span>
        </p>

        <div className="relative flex justify-between items-center w-full">
          {/* Progress Line Background */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          {/* Active Progress Line (50% based on example) */}
          <div className="absolute top-1/2 left-0 w-1/3 h-1 bg-darky -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center gap-3 bg-white px-2"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all 
                ${step.completed ? "bg-darky border-darky text-white" : "bg-white border-gray-200 text-gray-400"}`}
              >
                <span className="text-lg">{step.icon}</span>
              </div>
              <span
                className={`text-[12px] font-semibold whitespace-nowrap ${step.completed ? "text-darky" : "text-gray-400"}`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Products Table */}
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-darky">
          Product ({selectedOrder.items.length})
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-[#F3F4F6] text-gray-600 uppercase text-[12px]">
              <tr>
                <th className="p-4">Products</th>
                <th className="p-4 text-center">Price</th>
                <th className="p-4 text-center">Quantity</th>
                <th className="p-4 text-right">Sub-Total</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder.items.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="p-4 flex gap-4 items-center min-w-[250px]">
                    <img
                      src={item.img}
                      className="w-16 h-16 object-cover rounded"
                      alt={item.name}
                    />
                    <span className="font-medium text-darky">{item.name}</span>
                  </td>
                  <td className="p-4 text-center font-medium">${item.price}</td>
                  <td className="p-4 text-center text-gray-500">
                    x{item.qty || 1}
                  </td>
                  <td className="p-4 text-right font-bold text-darky">
                    ${(item.price * (item.qty || 1)).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Address and Notes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-darky border-b pb-2">
            Shipping Address
          </h3>
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

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-darky border-b pb-2">Order Notes</h3>
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
        <button className="w-fit px-8 py-3 bg-darky text-white text-sm font-bold rounded-sm hover:opacity-90 transition-all uppercase">
          Cancel Order
        </button>
      </div>
    </div>
  );
}
