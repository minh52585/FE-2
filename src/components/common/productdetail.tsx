import React, { useState } from 'react';

const BookDetailPage: React.FC = () => {
    const thumbnails = ['', '', '', ''];
    const collectionBooks = [
        { image: '', title: 'Chain of Iron: Volume 2', price: '$22.88' },
        { image: '', title: 'Chain of Thorns: Volume 3', price: '$24.88' },
        { image: '', title: 'City of Bones', price: '$15.00' },
        { image: '', title: 'Clockwork Angel', price: '$18.50' },
    ];
    const lastViewedBooks = [
        { image: '', title: 'The Librarian Spy', price: '$8.90' },
        { image: '', title: 'The Night Circus', price: '$10.50' },
        { image: '', title: 'A Court of Thorns and Roses', price: '$12.00' },
        { image: '', title: 'The Book Thief', price: '$14.20' },
    ];

    const [mainImage, setMainImage] = useState('/book-cover.jpg');

    return (
        <div className="max-w-7xl mx-auto p-4 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img src={mainImage} alt="Book Cover" className="w-full rounded-2xl shadow-lg object-cover" />
                    <div className="grid grid-cols-4 gap-4 mt-6">
                        {thumbnails.map((thumb, index) => (
                            <img
                                key={index}
                                src={thumb}
                                alt={`Thumbnail ${index + 1}`}
                                className={`border-2 rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${mainImage === thumb ? 'border-purple-600' : 'border-gray-300'
                                    }`}
                                onClick={() => setMainImage(thumb)}
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">Chain of Gold: The Last Hours #1</h1>
                    <p className="text-gray-600 text-lg">Tác giả: Cassandra Clare</p>
                    <div className="text-2xl font-bold text-purple-600">$12.88</div>

                    <p className="text-gray-700 text-base leading-relaxed">
                        Chain of Gold là phần mở đầu cho series The Last Hours, một phần mở rộng của thế giới
                        Shadowhunters với các nhân vật mới cùng câu chuyện hấp dẫn...
                    </p>

                    <div className="flex items-center gap-6 justify-center">
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition">
                            Thêm vào giỏ
                        </button>
                        <button className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition">Yêu thích</button>
                    </div>

                    <div className="space-y-2 text-base text-gray-700">
                        <p>
                            <span className="font-semibold">Tình trạng:</span> Còn hàng
                        </p>
                        <p>
                            <span className="font-semibold">Nhà xuất bản:</span> Simon & Schuster
                        </p>
                        <p>
                            <span className="font-semibold">Ngày phát hành:</span> 03/2021
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Đánh giá</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4 justify-start">
                        <img
                            src="https://via.placeholder.com/48x48?text=AVT1"
                            alt="Avatar Nguyễn Cường"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="font-semibold">Nguyễn Cường</p>
                            <p className="text-yellow-400">★★★★★</p>
                            <p className="text-gray-600">Thật sự rất hay!</p>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-6">Collection</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {collectionBooks.map((book, index) => (
                        <div key={index} className="space-y-3">
                            <img src={book.image} alt={book.title} className="rounded-2xl shadow-md w-full h-60 object-cover" />
                            <p className="text-base font-medium text-center">{book.title}</p>
                            <p className="text-purple-600 font-semibold text-center">{book.price}</p>
                            <button className="bg-purple-600 text-white px-3 py-2 rounded-lg w-full hover:bg-purple-700 transition">
                                Mua ngay
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-6">Last viewed</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {lastViewedBooks.map((book, index) => (
                        <div key={index} className="space-y-3">
                            <img src={book.image} alt={book.title} className="rounded-2xl shadow-md w-full h-60 object-cover" />
                            <p className="text-base font-medium text-center">{book.title}</p>
                            <p className="text-purple-600 font-semibold text-center">{book.price}</p>
                            <button className="bg-purple-600 text-white px-3 py-2 rounded-lg w-full hover:bg-purple-700 transition">
                                Xem lại
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;
