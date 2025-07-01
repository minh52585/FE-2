import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, X } from "lucide-react";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  selectedVolume?: string;
  selectedScent?: string;
  image: string;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch (err) {
        console.error("Lỗi parse localStorage:", err);
      }
    }
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const updateQuantity = (id: string, value: number) => {
    if (value < 1) return;
    const newCart = cart.map(item =>
      item._id === id ? { ...item, quantity: Math.min(50, value) } : item
    );
    updateCart(newCart);
  };

  const removeItem = (id: string) => {
    const newCart = cart.filter(item => item._id !== id);
    updateCart(newCart);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium mb-8 text-black">Giỏ hàng của bạn</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {cart.length === 0 ? (
            <div className="text-center py-12 border rounded-lg">
              <p className="text-gray-500">Giỏ hàng của bạn trống.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item._id} className="flex border rounded-lg p-4">
                  <div className="w-24 h-24 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/100x150?text=No+Image";
                      }}
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-black">{item.name}</h3>
                      </div>
                      <button
                        onClick={() => removeItem(item._id)}
                        className="bg-[#f9fafb] rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item._id, item.quantity - 1)}
                          className="px-3 py-1 text-black bg-[#f9fafb] rounded-full"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <div className="px-4 py-1 text-black text-sm border-l border-r">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => updateQuantity(item._id, item.quantity + 1)}
                          className="px-3 py-1 text-black bg-[#f9fafb] rounded-full"
                          disabled={item.quantity >= 50}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="font-bold text-red-600">
                        {(item.price * item.quantity).toLocaleString("vi-VN")}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:w-1/3">
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-black">Tóm tắt đơn hàng</h2>

            <div className="space-y-4 mb-6">
              <div className="border-t pt-4 flex justify-between font-semibold">
                <span className="font-bold text-red-600">Thành tiền</span>
                <span className="font-bold text-red-600">
                  {subtotal.toLocaleString("vi-VN")}
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full block text-center px-6 py-3 bg-[#4f0f87] text-white font-medium rounded hover:bg-[#51348f] hover:text-white transition"
            >
              Tiến hành Thanh toán
            </Link>

            <Link
              to="/"
              className="w-full block text-center px-6 py-3 text-gray-900 hover:text-gray-900 font-medium mt-2"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;