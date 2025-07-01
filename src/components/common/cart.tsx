import React, { useState } from "react";

type CartItem = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
};

const initialCart: CartItem[] = [
    {
        id: 1,
        name: "Book Title",
        price: 25000,
        description: "A wonderful book about adventures.",
        image: "https://picsum.photos/100/150",
        quantity: 1,
    },
    {
        id: 2,
        name: "Another Book",
        price: 18000,
        description: "A mysterious story unfolds.",
        image: "https://picsum.photos/100/150?2",
        quantity: 2,
    },
];

const Cart: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>(initialCart);

    const handleQuantityChange = (id: number, value: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: value < 1 ? 1 : value > 50 ? 50 : value }
                    : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <main className="flex-grow container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-8 text-purple-700 text-center">Giỏ Hàng</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b text-center">Sản phẩm</th>
                            <th className="px-4 py-2 border-b text-center">Mô tả</th>
                            <th className="px-4 py-2 border-b text-center">Giá</th>
                            <th className="px-4 py-2 border-b text-center">Số lượng</th>
                            <th className="px-4 py-2 border-b text-center">Tổng</th>
                            <th className="px-4 py-2 border-b text-center">Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id} className="border-b">
                                <td className="px-4 py-2 flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-24 object-cover rounded"
                                    />
                                    <span className="font-semibold">{item.name}</span>
                                </td>
                                <td className="px-4 py-2">{item.description}</td>
                                <td className="px-4 py-2 text-center text-purple-700 font-semibold">
                                    {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="w-8 inline-block text-center">{item.quantity}</span>
                                        <button
                                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    {item.quantity >= 50 && (
                                        <div className="text-xs text-red-500 mt-1">Tối đa chỉ đc 50 sản phẩm</div>
                                    )}
                                </td>
                                <td className="px-4 py-2 text-center font-semibold">
                                    {(item.price * item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </td>

                                <td className="px-4 py-2 text-center">
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-10 bg-white p-6 rounded-lg shadow-md md:w-1/3 ml-auto">
                <h3 className="text-xl font-bold mb-4 text-purple-700">Tổng Đơn hàng</h3>
                <div className="flex justify-between mb-2">
                    <span>Tổng tiền</span>
                    <span>{subtotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                </div>

                <div className="flex justify-between font-semibold text-lg border-t pt-4">
                    <span>Tổng thanh toán</span>
                    <span>{subtotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                </div>
                <button
                    className="mt-6 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
                    disabled={cart.length === 0} >
                    Thanh Toán
                </button>
            </div>
        </main>
    );
};

export default Cart;