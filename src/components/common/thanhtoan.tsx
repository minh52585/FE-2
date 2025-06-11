import React from "react";

const ThanhToan: React.FC = () => {
    return (
        <main className="flex-grow container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-purple-700 mb-4">Thông Tin Giao Hàng</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">Họ và tên</label>
                            <input type="text" placeholder="Nhập họ và tên"
                                className="w-full border border-gray-300 rounded px-4 py-2" />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Số điện thoại</label>
                            <input type="text" placeholder="Nhập số điện thoại"
                                className="w-full border border-gray-300 rounded px-4 py-2" />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Địa chỉ giao hàng</label>
                            <input type="text" placeholder="Nhập địa chỉ"
                                className="w-full border border-gray-300 rounded px-4 py-2" />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Ghi chú</label>
                            <textarea rows={4} placeholder="Ghi chú cho đơn hàng (nếu có)"
                                className="w-full border border-gray-300 rounded px-4 py-2"></textarea>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-purple-700 mb-2">Phương Thức Thanh Toán</h3>
                            <div className="flex items-center mb-2">
                                <input type="radio" name="payment" id="cod" className="mr-2" defaultChecked />
                                <label htmlFor="cod">Thanh toán khi nhận hàng</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="payment" id="bank" className="mr-2" />
                                <label htmlFor="bank">Chuyển khoản ngân hàng</label>
                            </div>
                        </div>

                        <button type="submit"
                            className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                            Xác Nhận Đặt Hàng
                        </button>
                    </form>
                </div>

                <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-purple-700 mb-4 border-b-2 border-purple-300 pb-2">
                        Thông tin đặt hàng
                    </h2>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://picsum.photos/60/90?random=1"
                                alt="Sản phẩm 1"
                                className="w-12 h-16 object-cover rounded"
                            />
                            <span>Đắc nhân tâm</span>
                            <span className="ml-2 text-gray-500">x2</span>
                        </div>
                        <span>200.000₫</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://picsum.photos/60/90?random=2"
                                alt="Sản phẩm 2"
                                className="w-12 h-16 object-cover rounded"
                            />
                            <span>Sản phẩm 2</span>
                            <span className="ml-2 text-gray-500">x1</span>
                        </div>
                        <span>150.000₫</span>
                    </div>

                    <hr className="my-4" />

                    <div className="flex justify-between">
                        <span>Phí vận chuyển</span>
                        <span>30.000₫</span>
                    </div>

                    <div className="flex justify-between font-semibold text-lg">
                        <span>Tổng thanh toán</span>
                        <span>380.000₫</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default ThanhToan;