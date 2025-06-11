import { Link } from 'react-router-dom';

type Props = {};

const Header = (_props: Props) => {
    return (
        <header className="border-b text-sm bg-[#4f0f87] text-gray-700">
            <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-white text-lg">📚</span>
                    <span className="font-bold text-white text-lg">Bookora</span>
                </div>

                <div className="flex-1 max-w-md w-full relative">
                    <input
                        type="text"
                        placeholder="Nhập thông tin tìm kiếm"
                        className="w-full px-4 py-2 pr-10 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#51348f]"
                    />
                    <svg
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 17.65A7 7 0 1118 10a7 7 0 01-1.35 7.65z" />
                    </svg>
                </div>

                <div className="flex items-center gap-7 text-white text-xl">
                    <Link to="/cart" className="relative">
                        <i className="fas fa-shopping-cart text-white text-base" aria-hidden="true" />
                    </Link>

                    <Link to="/wishlist" className="relative">
                        <i className="fas fa-heart text-white text-base" aria-hidden="true" />
                    </Link>

                    <Link to="/account">
                        <i className="fas fa-user text-white text-base" aria-hidden="true" />
                    </Link>
                </div>
            </div>

            <nav className="border-t">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-wrap gap-5">
                        <Link to="#" className="text-white">Sách đáng đọc</Link>
                        <Link to="#" className="text-white">Tin tức</Link>
                        <Link to="#" className="text-white">Khuyến mại tháng</Link>
                        <Link to="#" className="text-white">Xuất bản</Link>
                        <Link to="#" className="text-white">Đăng ký nhận bản tin</Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-4 text-gray-700">
                            <i className="fa fa-phone text-white text-base" aria-hidden="true" />
                            <span className="text-white">0977 907 877</span>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;