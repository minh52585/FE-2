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
        image: 'https://picsum.photos/id/1015/200/300',
    },
    {
        title: 'No More Police',
        author: 'Andrea Ritchie',
        price: '$17.76',
        image: 'https://picsum.photos/id/1016/200/300',
    },
    {
        title: "I'm Glad My Mom Died",
        author: 'Jennette McCurdy',
        price: '$28.03',
        image: 'https://picsum.photos/id/1020/200/300',
    },
    {
        title: 'Nona the Ninth',
        author: 'Tamsyn Muir',
        price: '$26.96',
        image: 'https://picsum.photos/id/1035/200/300',
    },
];

const mustBuyBooks: Book[] = [
    {
        title: 'Harlem Shuffle',
        author: 'Colson Whitehead',
        price: '$26.92',
        image: 'https://picsum.photos/id/1043/200/300',
    },
    {
        title: 'Two Old Women',
        author: 'Velma Wallis',
        price: '$13.95',
        image: 'https://picsum.photos/id/1052/200/300',
    },
    {
        title: 'Carrie Soto is Back',
        author: 'Taylor Jenkins Reid',
        price: '$26.04',
        image: 'https://picsum.photos/id/1062/200/300',
    },
    {
        title: 'Book Lovers',
        author: 'Emily Henry',
        price: '$15.81',
        image: 'https://picsum.photos/id/1070/200/300',
    },
];

const BookCard = ({ book }: { book: Book }) => (
    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md p-4 flex flex-col">
        <img
            src={book.image}
            alt={book.title}
            className="h-60 w-full object-cover rounded mb-4"
            onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://via.placeholder.com/200x300.png?text=No+Image';
            }}
        />
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
        <div className="max-w-7xl mx-auto py-10 px-4 space-y-16">
            {/* Author of August */}
            <section className="bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4 md:text-left">
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

                        <button className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition md:ml-0 md:mr-auto block">
                            View his books
                        </button>
                    </div>

                    {/* Image content */}
                    <div className="text-center md:text-right relative">
                        <p className="text-xs uppercase text-gray-500 mb-2">
                            Autographed books + 30% discount
                        </p>

                        <img
                            src="https://via.placeholder.com/400x300/EEE6FA/5C2D91?text=Book+Banner"
                            alt="Eric-Emmanuel Schmitt"
                            className="w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto md:mx-0 object-cover rounded-lg shadow-md"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "https://via.placeholder.com/400x300.png?text=No+Banner";
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Selected for you */}
            <section>
                <h2 className="text-2xl font-bold mb-6 text-left">Selected for you</h2>
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
            </section>

            {/* Must buy it now */}
            <section>
                <h2 className="text-2xl font-bold mb-6 text-left">You must buy it now</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {mustBuyBooks.map((book, index) => (
                        <BookCard key={index} book={book} />
                    ))}
                </div>
            </section>

            {/* Did you know us? */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left: Form & Text */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Did you know us?</h2>
                        <p className="text-gray-600 mb-4">
                            We are about books and our purpose is to show you the book who can change your life
                            or distract you from the real world in a better one. BWorld works with the most popular
                            publishers just for your delight.
                            <br />
                            If you are about books, you must subscribe to our newsletter.
                        </p>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                            <input
                                type="email"
                                placeholder="Your e-mail"
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                            <button
                                type="submit"
                                className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Right: Map Image */}
                    <div>
                        <img
                            src="https://via.placeholder.com/600x400/EEE6FA/5C2D91?text=B-World+Map"
                            alt="Map"
                            className="w-full h-auto rounded shadow"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "https://via.placeholder.com/600x400.png?text=No+Map";
                            }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookCarousel;
