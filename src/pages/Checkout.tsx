import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShippingInfo {
  name: string;
  phone: string;
  address: string;
  note: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [shipping, setShipping] = useState<ShippingInfo>({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  useEffect(() => {
    const cartRaw = localStorage.getItem("cart");
    if (cartRaw) {
      try {
        setCart(JSON.parse(cartRaw));
      } catch (err) {
        console.error("Lỗi parse cart:", err);
      }
    }

    const userRaw = localStorage.getItem("user");
    if (userRaw) {
      try {
        const user = JSON.parse(userRaw);
        setShipping((prev) => ({
          ...prev,
          name: user.fullname || "",
          phone: user.phoneNumber || "",
        }));
      } catch (err) {
        console.error("Lỗi parse user:", err);
      }
    }

    const shippingInfoRaw = localStorage.getItem("shippingInfo");
    if (shippingInfoRaw) {
      try {
        const saved = JSON.parse(shippingInfoRaw);
        setShipping((prev) => ({
          ...prev,
          address: saved.address || "",
          note: saved.note || "",
        }));
      } catch (err) {
        console.error("Lỗi parse shipping info:", err);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setShipping((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("shippingInfo", JSON.stringify({
      address: shipping.address,
      note: shipping.note
    }));
    alert("Đặt hàng thành công!");
    navigate("/order")
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = 0;
  const total = subtotal + shippingFee;

  return (
    <main className="flex-grow container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-[#4f0f87] mb-4 border-b-2 border-[#4f0f87] pb-2">THÔNG TIN GIAO HÀNG</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Họ và tên</label>
              <input
                type="text"
                name="name"
                value={shipping.name}
                onChange={handleInputChange}
                placeholder="Nhập họ và tên"
                className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-black"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Số điện thoại</label>
              <input
                type="text"
                name="phone"
                value={shipping.phone ? `0${shipping.phone}` : ""}
                onChange={handleInputChange}
                placeholder="Nhập số điện thoại"
                className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-black"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Địa chỉ giao hàng</label>
              <input
                type="text"
                name="address"
                value={shipping.address}
                onChange={handleInputChange}
                placeholder="Nhập địa chỉ"
                className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-black"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Ghi chú</label>
              <textarea
                name="note"
                rows={4}
                value={shipping.note}
                onChange={handleInputChange}
                placeholder="Ghi chú cho đơn hàng (nếu có)"
                className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-black"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#4f0f87] mb-4 border-b-2 border-[#4f0f87] pb-2">PHƯƠNG THỨC THANH TOÁN</h3>
              <div className="flex items-center mb-3">
                <input type="radio" name="payment" id="cod" className="mr-2" defaultChecked />
                <label htmlFor="cod">Thanh toán khi nhận hàng (COD)</label>
              </div>
              <div className="flex items-center mb-6">
                <input type="radio" name="payment" id="bank" className="mr-2" />
                <label htmlFor="bank">Chuyển khoản ngân hàng (VNPay)</label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-[#4f0f87] text-white py-2 rounded hover:bg-[#51348f] transition"
            >
              Xác nhận đặt hàng
            </button>
          </form>
        </div>

        <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-[#4f0f87] mb-4 border-b-2 border-[#4f0f87] pb-2">
            THÔNG TIN ĐẶT HÀNG
          </h2>
          {cart.map((item) => (
            <div key={item._id} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-16 object-cover rounded"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/60x90?text=No+Image";
                  }}
                />
                <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-gray-500 text-sm">x{item.quantity}</div>
                </div>
              </div>
              <span className="font-semibold mt-10">{(item.price * item.quantity).toLocaleString("vi-VN")}</span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Nhập mã giảm giá"
                className="flex-1 border border-gray-300 rounded px-4 py-2 bg-white text-black"
            />
            <button
                type="button"
                className="px-4 py-2 bg-[#4f0f87] text-white rounded hover:bg-purple-800 transition"
                onClick={() => alert("Mã giảm giá chỉ là demo!")}
            >
                Áp dụng
            </button>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between">
            <span>Thành tiền</span>
            <span className="font-semibold">{subtotal.toLocaleString("vi-VN")}</span>
          </div>
          <div className="flex justify-between">
            <span>Phí vận chuyển</span>
            <span className="font-semibold">Miễn phí</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-red-500 font-bold text-xl">
            <span>Tổng tiền</span>
            <span>{total.toLocaleString("vi-VN")}</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;