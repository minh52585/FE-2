import React from "react";

interface ProductDetailProps {
    productId?: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => (
    <div className="max-w-4xl mx-auto py-10 px-4">
        {/* Product Detail Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-8 items-center">
            <img
                src="nona.jpg"
                alt="Nona the Ninth"
                className="w-48 h-64 object-cover rounded-lg border"
            />
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">Nona the Ninth</h1>
                <p className="text-gray-500 mb-2">ID: <span className="font-mono">{productId}</span></p>
                <p className="text-purple-700 text-xl font-semibold mb-4">$14.64</p>
                <p className="mb-4 text-gray-700">
                    The fate of the galaxy rests on Nona's shoulders. A gripping sci-fi adventure full of mystery and heart.
                </p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition font-semibold w-full md:w-auto">
                    Add to cart
                </button>
            </div>
        </div>

        {/* Last viewed */}
        <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">Last viewed</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Book 1 */}
                <div className="bg-white rounded-lg shadow p-3 flex flex-col items-center">
                    <img src="libspy.jpg" className="rounded-lg h-32 object-cover mb-2" alt="The Librarian Spy" />
                    <p className="font-semibold text-center">The Librarian Spy</p>
                    <p className="text-purple-700 font-bold">$16.75</p>
                </div>
                {/* Book 2 */}
                <div className="bg-white rounded-lg shadow p-3 flex flex-col items-center">
                    <img src="otherbirds.jpg" className="rounded-lg h-32 object-cover mb-2" alt="Other Birds" />
                    <p className="font-semibold text-center">Other Birds</p>
                    <p className="text-purple-700 font-bold">$12.89</p>
                </div>
                {/* Book 3 */}
                <div className="bg-white rounded-lg shadow p-3 flex flex-col items-center">
                    <img src="wayshide.jpg" className="rounded-lg h-32 object-cover mb-2" alt="The Ways We Hide" />
                    <p className="font-semibold text-center">The Ways We Hide</p>
                    <p className="text-purple-700 font-bold">$13.94</p>
                </div>
                {/* Book 4 */}
                <div className="bg-white rounded-lg shadow p-3 flex flex-col items-center">
                    <img src="roomboard.jpg" className="rounded-lg h-32 object-cover mb-2" alt="Room and Board" />
                    <p className="font-semibold text-center">Room and Board</p>
                    <p className="text-purple-700 font-bold">$14.90</p>
                </div>
            </div>
        </div>
    </div>
);

export default ProductDetail;