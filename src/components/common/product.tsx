import React from 'react';

type Book = {
    title: string;
    author: string;
    price: string;
    image: string;
};

const selectedBooks: Book[] = [
    {
        title: 'Financial Feminist',
        author: 'Tori Dunlap',
        price: '$20.46',
        image: 'https://m.media-amazon.com/images/I/91v6N8Z7baL._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
        title: 'No More Police',
        author: 'Andrea Ritchie',
        price: '$17.76',
        image: 'https://m.media-amazon.com/images/I/71FiQOboTxL._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
        title: "I'm Glad My Mom Died",
        author: 'Jennette McCurdy',
        price: '$28.03',
        image: 'https://m.media-amazon.com/images/I/71Kxa1-0mfL._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
        title: 'Nona the Ninth',
        author: 'Tamsyn Muir',
        price: '$26.96',
        image: 'https://m.media-amazon.com/images/I/81aS0jZNLyL._AC_UY327_FMwebp_QL65_.jpg',
    },
];

const mustBuyBooks: Book[] = [
    {
        title: 'Harlem Shuffle',
        author: 'Colson Whitehead',
        price: '$26.92',
        image: 'https://m.media-amazon.com/images/I/91ZUkFZr1dL._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
        title: 'Two Old Women',
        author: 'Velma Wallis',
        price: '$13.95',
        image: 'https://m.media-amazon.com/images/I/81VStYnDGrL._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
        title: 'Carrie Soto is Back',
        author: 'Taylor Jenkins Reid',
        price: '$26.04',
        image: 'https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
        title: 'Book Lovers',
        author: 'Emily Henry',
        price: '$15.81',
        image: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg',
    },
];

const BookCard = ({ book }: { book: Book }) => (
    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md p-4 flex flex-col">
        <img src={book.image} alt={book.title} className="h-60 w-full object-cover rounded mb-4" />
        <h3 className="font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-1">{book.author}</p>
        <p className="font-semibold mb-3">{book.price}</p>
        <button className="bg-purple-600 text-white py-2 px-3 rounded hover:bg-purple-700 mt-auto">
            Add to cart
        </button>
    </div>
);

const BookCarousel: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            {/* Selected for you */}
            <h2 className="text-2xl font-bold mb-6">Selected for you</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {selectedBooks.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>

            {/* Must buy it now */}
            <h2 className="text-2xl font-bold mt-12 mb-6">You must buy it now</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {mustBuyBooks.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookCarousel;
