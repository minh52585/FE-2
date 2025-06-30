import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Product = {
    _id: string;
    name: string;
    price: number;
    description?: string;
    category?: string;
    imageUrl: string;
    stock: number;
};

const ProductCard = ({ product }: { product: Product }) => (
    <Link to={`/products/${product._id}`} className="block">
        <div className="bg-white border rounded-lg shadow-sm hover:shadow-md p-4 flex flex-col transition hover:-translate-y-1">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="h-60 w-full object-cover rounded mb-4"
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/200x300?text=No+Image';
                }}
            />
            <h3 className="font-semibold mb-3">{product.name}</h3>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                    {product.category || 'Không rõ thể loại'}
                </span>
                <span className="font-bold text-red-500 text-base">
                    {product.price.toLocaleString()}
                </span>
            </div>
            <button
                className="bg-[#4f0f87] hover:bg-[#51348f] text-white py-2 px-3 rounded mt-auto"
                onClick={(e) => e.preventDefault()}
            >
                Thêm vào giỏ hàng
            </button>
        </div>
    </Link>
);

const BookCarousel: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('http://localhost:8888/api/products');
                const data = await res.json();

                if (Array.isArray(data.data)) {
                    setProducts(data.data);
                } else {
                    console.error('Dữ liệu không hợp lệ:', data);
                }
            } catch (err) {
                console.error('Lỗi khi fetch sản phẩm:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="max-w-7xl mx-auto py-10 px-4 space-y-16">
            <section className="bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4 md:text-left">
                        <span className="inline-block border border-purple-300 text-purple-500 text-xs px-3 py-1 rounded-full">
                            Tác giả của tháng Tám
                        </span>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Eric-Emmanuel Schmitt
                        </h1>

                        <p className="text-gray-600">
                            Eric-Emmanuel Schmitt đã được trao hơn 20 giải thưởng và danh hiệu văn học. Vào năm 2001, ông được phong danh hiệu Chevalier des Arts et des Lettres - Hiệp sĩ Nghệ thuật và Văn học. Các cuốn sách của ông đã được dịch ra hơn 40 ngôn ngữ...
                        </p>

                        <button className="bg-[#4f0f87] hover:bg-[#51348f] text-white px-5 py-2 rounded transition md:ml-0 md:mr-auto block">
                            Xem ngay
                        </button>
                    </div>

                    <div className="text-center md:text-right relative">
                        <p className="text-xs uppercase text-gray-500 mb-2">
                            Sách có chữ ký + giảm giá 30%
                        </p>
                        <img
                            src="#"
                            className="w-20 max-w-xs md:max-w-md lg:max-w-lg mx-auto md:mx-0 object-cover rounded-lg shadow-md"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "https://placehold.co/200x300?text=No+Image";
                            }}
                        />
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6 text-left">Sản phẩm nổi bật của chúng tôi</h2>
                {loading ? (
                    <p>Đang tải sản phẩm...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </section>

            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Bạn có biết về chúng tôi không?</h2>
                        <p className="text-gray-600 mb-4">
                            Chúng tôi là Bookora - chuyên về sách trực tuyến và mục tiêu của chúng tôi là
                            mang đến những cuốn sách có thể thay đổi cuộc sống của bạn hoặc đưa bạn thoát
                            khỏi thế giới thực để bước vào một thế giới tuyệt vời hơn. Bookora tự hào được
                            hợp tác với những nhà xuất bản nổi tiếng nhất để mang lại trải nghiệm tốt nhất
                            cho bạn.
                            <br /><br />
                            Nếu bạn yêu thích sách, hãy đăng ký nhận bản tin của chúng tôi!
                        </p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="w-full bg-white border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#51348f]"
                            />
                            <button
                                type="submit"
                                className="w-full bg-[#4f0f87] hover:bg-[#51348f] text-white py-2 rounded"
                            >
                                Đăng ký
                            </button>
                        </form>
                    </div>

                    <div>
                        <img
                            src="https://placehold.co/600x400/EEE6FA/5C2D91?text=Map"
                            alt="Map"
                            className="w-full h-auto rounded shadow"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "https://placehold.co/600x400?text=No+Map";
                            }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookCarousel;