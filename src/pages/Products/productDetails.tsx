import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

interface ProductType {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description?: string;
  author?: string;
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8888/api/products/${id}`)
        .then((res) => {
          setProduct(res.data.data);
        })
        .catch(() => {
          setProduct(null);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <div className="text-center py-10">Đang tải...</div>;
  if (!product) return <div className="text-center py-10">Không tìm thấy sản phẩm!</div>;

  return (
    <div className="mx-auto px-4 py-4 max-w-[1000px]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col md:flex-row gap-4 flex-1">
            <div className="flex md:flex-col gap-2 w-full md:w-auto items-center md:items-start">
                {[0, 1, 2, 3].map((i) => (
                <img
                    key={i}
                    src={i === 0 ? product.imageUrl : product.imageUrl}
                    className="w-[70px] h-[105px] object-cover border rounded"
                />
                ))}
            </div>
            <div className="flex-1 max-w-[300px] h-[444px]">
                <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover rounded border"
                />
            </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 text-xl mr-2">★★★★☆</div>
          </div>

          <div className="text-2xl font-bold text-red-500 mb-4">{product.price.toLocaleString()}</div>
            <p className="text-gray-700 mb-6 whitespace-pre-line">
                {product.description || 'Chưa có mô tả cho sản phẩm này.'}
            </p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-full px-3 py-1 gap-4">
                <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-6 h-6 flex items-center justify-center rounded-full text-sm bg-[#f9fafb] hover:border-[#f9fafb]"
                >
                −
                </button>
                <span className="text-base">{quantity}</span>
                <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-6 h-6 flex items-center justify-center rounded-full text-sm bg-[#f9fafb] hover:border-[#f9fafb]"
                >
                +
                </button>
            </div>
          </div>


        <div className="flex items-center gap-3 mb-6">
            <button className="bg-[#551b8c] text-white font-medium py-2 px-6 rounded hover:bg-[#51348f] hover:border-[#51348f] transition-all">
                Thêm vào giỏ hàng
            </button>
            <Link to={"/thanhtoan"} className="bg-[#551b8c] text-white font-medium py-2 px-6 rounded hover:bg-[#51348f] hover:text-white transition-all">
                Mua ngay
            </Link>
        </div>

          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p><span className="font-semibold">Nhà xuất bản:</span> Bookora</p>
              <p><span className="font-semibold">Ngôn ngữ:</span> Tiếng Việt</p>
              <p><span className="font-semibold">Số trang:</span> 250</p>
            </div>
            <div>
              <p><span className="font-semibold">Ngày phát hành:</span> 2025</p>
              <p><span className="font-semibold">Độ tuổi:</span> 14 +</p>
              <p><span className="font-semibold">Kích thước:</span> 14 × 20 cm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Đánh giá</h3>
        <div className="border p-4 rounded mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <img src="https://i.pravatar.cc/40" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium">Nguyễn Quýnh</p>
                <p className="text-xs text-gray-500">2 giờ trước</p>
              </div>
            </div>
            <div className="text-yellow-400 text-lg">★★★★☆</div>
          </div>
          <p className="text-gray-700">Tuyệt vời! Nội dung ý nghĩa và rất cuốn.</p>
        </div>
        <div className="border p-4 rounded">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <img src="https://i.pravatar.cc/41" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium">Lê Huy</p>
                <p className="text-xs text-gray-500">1 ngày trước</p>
              </div>
            </div>
            <div className="text-yellow-400 text-lg">★★★☆☆</div>
          </div>
          <p className="text-gray-700">Giao hàng nhanh, sách đẹp nhưng hơi mỏng.</p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Sản phẩm liên quan</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border p-2 rounded hover:shadow-md transition">
              <img src={`https://picsum.photos/200/280?random=${i}`} className="w-full h-[280px] object-cover rounded" />
              <p className="mt-2 font-medium text-sm">Sách {i + 1}</p>
              <p className="text-red-500 font-semibold">120.000</p>
              <button className="mt-2 w-full bg-purple-500 text-white text-sm py-1 rounded hover:bg-purple-600">Xem chi tiết</button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Đã xem gần đây</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border p-2 rounded hover:shadow-md transition">
              <img src={`https://picsum.photos/200/280?grayscale&random=${i}`} className="w-full h-[280px] object-cover rounded" />
              <p className="mt-2 font-medium text-sm">Sách đã xem {i + 1}</p>
              <p className="text-red-500 font-semibold">99.000</p>
              <button className="mt-2 w-full bg-purple-500 text-white text-sm py-1 rounded hover:bg-purple-600">Xem chi tiết</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;