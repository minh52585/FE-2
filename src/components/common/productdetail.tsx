import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Danh sách sản phẩm từ các nơi khác (có thể tách file sau)
const allBooks = [
    {
        id: '1',
        title: 'Doraemon Movie 44',
        author: 'Fujiko F Fujio',
        price: '54.000',
        image: 'https://byvn.net/iHJr',
    },
    {
        id: '2',
        title: 'Người Đàn Ông Mang Tên OVE',
        author: 'Fredrik Backman',
        price: '134.000',
        image: 'https://byvn.net/qjYt',
    },
    {
        id: '3',
        title: 'Trường Ca Achilles',
        author: 'Madeline Miller',
        price: '127.500',
        image: 'https://byvn.net/S752',
    },
    {
        id: '4',
        title: 'Nhà Giả Kim',
        author: 'Paulo Coelho',
        price: '64.500',
        image: 'https://byvn.net/jOt3',
    },
    {
        id: '5',
        title: 'Cây Cam Ngọt Của Tôi',
        author: 'José Mauro de Vasconcelos',
        price: '88.500',
        image: 'https://byvn.net/W2ZF',
    },
    {
        id: '6',
        title: 'Hai Số Phận',
        author: 'Jeffrey Archer',
        price: '185.500',
        image: 'https://byvn.net/Zqh6',
    },
    {
        id: '7',
        title: 'Thị Trấn Nhỏ, Giấc Mơ Lớn',
        author: 'Fredrik Backman',
        price: '176.000',
        image: 'https://byvn.net/CxfI',
    },
    {
        id: '8',
        title: 'Lớp Có Tang Sự',
        author: 'Doo Vandenis',
        price: '204.000',
        image: 'https://byvn.net/s9RZ',
    },
];

const BookDetailPage: React.FC = () => {
    const { id } = useParams();
    const book = allBooks.find((b) => b.id === id);

    const [quantity, setQuantity] = useState(1);

    if (!book) {
        return <div className="text-center py-10 text-xl">Không tìm thấy sách!</div>;
    }

    return (
        <>
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Cột trái: ảnh */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    {/* Thumbnails (dùng ảnh giả lập tạm thời) */}
                    <div className="flex md:flex-col gap-2 md:mr-4">
                        <img src={book.image} alt="Thumb 1" className="w-20 h-28 object-cover border rounded" />
                        <img src="https://picsum.photos/80/112?random=2" alt="Thumb 2" className="w-20 h-28 object-cover border rounded" />
                        <img src="https://picsum.photos/80/112?random=3" alt="Thumb 3" className="w-20 h-28 object-cover border rounded" />
                    </div>
                    {/* Ảnh chính */}
                    <div className="w-[300px] h-[450px]">
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                </div>

                {/* Thông tin sách */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
                    <p className="text-gray-600 mb-4">{book.author}</p>
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400 text-xl mr-2">★★★★☆</div>
                        <span>4.5</span>
                    </div>

                    <div className="text-2xl font-bold text-red-500 mb-4">{book.price}đ</div>

                    <p className="text-gray-700 mb-6">
                        Đây là mô tả sách mẫu. Bạn có thể thay bằng nội dung thật từ server hoặc database.
                    </p>

                    <div className="flex items-center mb-6">
                        <button className="border px-2 py-1 mr-2" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                        <span>{quantity}</span>
                        <button className="border px-2 py-1 ml-2" onClick={() => setQuantity(q => q + 1)}>+</button>
                    </div>

                    <div className="flex space-x-4 mb-6">
                        <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">Thêm vào giỏ</button>
                        <button className="border border-purple-500 text-purple-500 py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition">Yêu thích</button>
                    </div>

                    <hr className="my-4 border-t-2 border-gray-300" />

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                        <div>
                            <p><span className="font-semibold">Nhà xuất bản:</span> Margaret K. Books</p>
                            <p><span className="font-semibold">Ngôn ngữ:</span> Tiếng Việt</p>
                            <p><span className="font-semibold">Số trang:</span> 250</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Ngày phát hành:</span> 2024</p>
                            <p><span className="font-semibold">Độ tuổi:</span> 12+</p>
                            <p><span className="font-semibold">Kích thước:</span> 14 × 20.5 cm</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Đánh giá */}
            <div className="container mx-auto px-6 py-10">
                <h3 className="text-2xl font-semibold mb-6">Đánh giá</h3>

                <div className="flex items-start mb-6">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-12 h-12 rounded-full object-cover mr-4" />
                    <div>
                        <div className="flex items-center mb-2">
                            <div className="text-yellow-400 mr-2">★★★★★</div>
                            <span className="text-gray-500 text-sm">30 phút trước</span>
                        </div>
                        <p className="font-semibold">Nguyễn Cường</p>
                        <span>Sách này hay quá!</span>
                    </div>
                </div>

                <div className="flex items-start mb-6">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-12 h-12 rounded-full object-cover mr-4" />
                    <div>
                        <div className="flex items-center mb-2">
                            <div className="text-yellow-400 mr-2">★★★★☆</div>
                            <span className="text-gray-500 text-sm">1 giờ trước</span>
                        </div>
                        <p className="font-semibold">Ngọc Hạ</p>
                        <span>Truyện hấp dẫn, rất thích!</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetailPage;
