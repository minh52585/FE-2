import React from 'react';

type Props = {};

const Header = (_props: Props) => {
    return (
        <div className="text-sm font-sans">
            <div className="flex items-center justify-between px-6 py-2 border-b">
                <div className="flex items-center space-x-3">
                    <span className="font-bold text-lg text-gray-800">
                        B-<span className="text-purple-600">World</span>
                    </span>
                    <span className="text-gray-400">We love books</span>
                </div>


                <div className="flex items-center space-x-3">
                    <form
                        className="relative w-64"
                        onSubmit={e => {
                            e.preventDefault();
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Tìm kiếm sách..."
                            className="border px-3 py-1 rounded-md text-sm w-full outline-none focus:ring-2 focus:ring-purple-300 pr-10"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2  "

                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>

                <div className="flex items-center space-x-6 text-gray-600">
                    <a href="#" className="hover:text-purple-600">
                        Privacy policy
                    </a>
                    <a href="#" className="hover:text-purple-600">
                        Warranty
                    </a>
                    <a href="#" className="hover:text-purple-600">
                        Shipping
                    </a>
                    <a href="#" className="hover:text-purple-600">
                        Returns
                    </a>
                    <a href="#" className="hover:text-purple-700 text-purple-600 text-xl transition">
                        <i className="fas fa-shopping-cart"></i>
                    </a>
                    <span className="mx-2 text-gray-300">|</span>
                    <a href="#" className="hover:text-purple-700 text-purple-600 text-xl transition">
                        <i className="fas fa-heart"></i>
                    </a>
                    <span className="mx-2 text-gray-300">|</span>
                    <a href="#" className="hover:text-purple-700 text-purple-600 text-xl transition">
                        <i className="fas fa-user"></i>
                    </a>
                </div>
            </div>

            <div className="flex items-center justify-between px-6 py-3 border-b-2 border-purple-200">
                <div className="flex items-center space-x-6 text-gray-700">
                    <a href="#" className="hover:text-purple-600">
                        The must read
                    </a>
                    <a href="#" className="hover:text-purple-600">
                        News
                    </a>
                    <a href="#" className="hover:text-purple-600">
                        Promotion of the mount
                    </a>
                    <a href="#" className="hover:text-purple-600">
                        Publishs
                    </a>
                    <a href="#" className="hover:text-purple-600">
                        Subscribe to the newsletter
                    </a>
                </div>

                <div className="flex items-center space-x-4">
                    <span className="text-purple-600">
                        <i className="fas fa-phone-alt mr-1" style={{ transform: "scaleX(-1)" }}></i> +445 87 999 000
                    </span>
                    <button className="border border-purple-600 text-purple-600 px-4 py-1 rounded hover:bg-purple-50">
                        Request a call
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;