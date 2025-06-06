import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Header = (_props: Props) => {
    return (
        <header className="border-b text-sm text-gray-700">
            {/* Top header */}
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-black text-lg">B-World</span>
                    <span className="text-purple-500">| We love books</span>
                </div>

                {/* Search */}
                <div className="flex-1 max-w-md w-full">
                    <input
                        type="text"
                        placeholder="Type any book here..."
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <Link to="#" className="hover:underline">Privacy policy</Link>
                    <Link to="#" className="hover:underline">Warranty</Link>
                    <Link to="#" className="hover:underline">Shipping</Link>
                    <Link to="#" className="hover:underline">Returns</Link>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4 text-purple-500 text-xl">
                    <Link to="/cart" className="relative" title="Shopping Cart">
                        <i className="fas fa-shopping-cart" aria-hidden="true" />
                    </Link>

                    <div className="h-5 w-px bg-purple-300" />

                    <Link to="/wishlist" className="relative" title="Wishlist">
                        <i className="fas fa-heart" aria-hidden="true" />
                        <span className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                            3
                        </span>
                    </Link>

                    <div className="h-5 w-px bg-purple-300" />

                    <Link to="/account" title="Account">
                        <i className="fas fa-user" aria-hidden="true" />
                    </Link>
                </div>
            </div>

            {/* Navigation */}
            <nav className="border-t">
                <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-wrap gap-4 text-gray-700">
                        <Link to="#" className="hover:text-purple-600">The must read</Link>
                        <Link to="#" className="hover:text-purple-600">News</Link>
                        <Link to="#" className="hover:text-purple-600">Promotion of the month</Link>
                        <Link to="#" className="hover:text-purple-600">Publishs</Link>
                        <Link to="#" className="hover:text-purple-600">Subscribe to newsletter</Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-2 text-gray-700">
                            <i className="fa fa-phone text-purple-600 text-base" aria-hidden="true" />
                            <span>+45 87 999 000</span>
                        </span>
                        <button className="text-purple-600 hover:underline">Request a call</button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    {/* Text content */}
                    <div className="space-y-4">
                        <span className="inline-block border border-purple-300 text-purple-500 text-xs px-3 py-1 rounded-full">
                            Author of August
                        </span>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Eric-Emmanuel Schmitt
                        </h1>

                        <p className="text-gray-600">
                            Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions,
                            and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have
                            been translated into over 40 languages.
                        </p>

                        <button className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition">
                            View his books
                        </button>
                    </div>

                    {/* Image content */}
                    <div className="text-center md:text-right relative">
                        <p className="text-xs uppercase text-gray-500 mb-2">
                            Autographed books + 30% discount
                        </p>

                        <img
                            src="/public/img/bookbaner.png"
                            alt=""
                            className="w-full object-cover"

                        />
                    </div>
                </div>

                <div className="mt-12 border-t pt-6 flex flex-wrap justify-center gap-8 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                        <i className="fas fa-truck text-lg text-purple-500" aria-hidden="true" />
                        <span>Free shipping over $50</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fas fa-star text-lg text-purple-500" aria-hidden="true" />
                        <span>Save with loyalty points</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fas fa-book-open text-lg text-purple-500" aria-hidden="true" />
                        <span className="font-semibold">Read a few pages</span>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
