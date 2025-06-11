const Footer = () => {
    return (
        <footer className="bg-[#4f0f87] text-white pt-6 pb-4 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 border-b border-white pb-6">
                <div className="space-y-3 min-w-[160px] ml-10 col-span-1 flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-bold">📚 Bookora</h2>
                    <section className="flex gap-5">
                        <i className="fab fa-facebook-f cursor-pointer hover:text-gray-300 text-lg" aria-label="Facebook" role="img" />
                        <i className="fab fa-instagram cursor-pointer hover:text-gray-300 text-lg" aria-label="Instagram" role="img" />
                        <i className="fab fa-twitter cursor-pointer hover:text-gray-300 text-lg" aria-label="Twitter" role="img" />
                    </section>
                    <div>
                        <ul className="space-y-1 text-sm">
                            <li><i className="fas fa-phone mr-2" aria-hidden="true" /> 0977 907 877</li>
                            <li><i className="fas fa-clock mr-2" aria-hidden="true" /> 08:00 - 17:00</li>
                            <li><i className="fas fa-envelope mr-2" aria-hidden="true" /> bookora@edu.vn</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-3 text-lg">DỊCH VỤ</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-white font-normal hover:underline hover:text-white">Điều khoản sử dụng</a></li>
                        <li><a href="#" className="text-white font-normal hover:underline hover:text-white">Chính sách bảo mật thông tin cá nhân</a></li>
                        <li><a href="#" className="text-white font-normal hover:underline hover:text-white">Chính sách bảo mật thanh toán</a></li>
                        <li><a href="#" className="text-white font-normal hover:underline hover:text-white">Hệ thống trung tâm - Nhà sách</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-3 text-lg">HỖ TRỢ</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-white font-normal hover:underline hover:text-white">Chính sách đổi - trả - hoàn tiền</a></li>
                        <li><a href="#" className="text-white font-normal hover:underline hover:text-white">Chính sách bảo hành - bồi hoàn</a></li>
                        <li><a href="#" className="text-white font-normal hover:underline hover:text-white">Chính sách vận chuyển</a></li>
                        <li><a href="#" className="text-white font-normal hover:underline hover:text-white">Chính sách khách sỉ</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-3 text-lg">TÀI KHOẢN CỦA TÔI</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-white font-normal hover:underline hover:text-white">Đăng nhập / Tạo tài khoản mới</a></li>
                        <li><a href="#" className="text-white font-normal hover:underline hover:text-white">Thay đổi địa chỉ khách hàng</a></li>
                        <li><a href="#" className="text-white font-normal hover:underline hover:text-white">Chi tiết tài khoản</a></li>
                        <li><a href="#" className="text-white font-normal hover:underline hover:text-white">Lịch sử mua hàng</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto mt-6 gap-6 px-4">
                <div className="text-sm text-purple-100 text-center md:text-left">
                    Bản quyền 2025 © thuộc về Bookora.
                </div>
                <section className="flex gap-4 mr-28">
                    <img src="https://byvn.net/uAZY" className="h-5 w-10 bg-white rounded-md p-1 hover:scale-105 transition duration-300" />
                    <img src="https://byvn.net/6Xzr" className="h-5 w-10 bg-white rounded-md p-1 hover:scale-105 transition duration-300" />
                    <img src="https://byvn.net/wHZw" className="h-5 w-10 bg-white rounded-md p-1 hover:scale-105 transition duration-300" />
                </section>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center justify-center p-1 bg-white text-[#4f0f87]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
        </footer>
    );
};

export default Footer;