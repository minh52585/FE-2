const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-purple-500 to-purple-400 text-white pt-12 pb-8 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 border-b border-purple-300 pb-10">
                <div className="space-y-4 min-w-[160px] col-span-1 flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-extrabold tracking-wide">B-World</h2>
                </div>
                <div>
                    <h3 className="font-semibold mb-3 text-lg">Categories</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="text-white hover:text-black hover:bg-white/80 px-1 rounded transition">Psychology</a></li>
                        <li><a href="#" className="text-white hover:text-black hover:bg-white/80 px-1 rounded transition">Self-Help</a></li>
                        <li><a href="#" className="text-white hover:text-black hover:bg-white/80 px-1 rounded transition">Romance</a></li>
                        <li><a href="#" className="text-white hover:text-black hover:bg-white/80 px-1 rounded transition">Mystery</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3 text-lg">For kids</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="text-white hover:text-black hover:bg-white/80 px-1 rounded transition">Games</a></li>
                        <li><a href="#" className="text-white hover:text-black hover:bg-white/80 px-1 rounded transition">Comics</a></li>
                        <li><a href="#" className="text-white hover:text-black hover:bg-white/80 px-1 rounded transition">Fantasy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3 text-lg">E-Books</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="text-white hover:text-black hover:bg-white/80 px-1 rounded transition">Fiction</a></li>
                        <li><a href="#" className="text-white hover:text-black hover:bg-white/80 px-1 rounded transition">Historical</a></li>
                        <li><a href="#" className="text-white hover:text-black hover:bg-white/80 px-1 rounded transition">Horror</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3 text-lg">Help & Contacts</h3>
                    <ul className="space-y-2 text-sm">
                        <li><i className="fas fa-phone mr-2" aria-hidden="true" /> +445 87 999 000</li>
                        <li><i className="fas fa-clock mr-2" aria-hidden="true" /> Mo-Fri, 9 AM to 11 PM</li>
                        <li><i className="fas fa-envelope mr-2" aria-hidden="true" /> b.world@store.ro</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center md:items-start rounded-lg p-4 shadow-sm">
                    <p className="mb-2 leading-relaxed text-sm">
                        If you have questions, you can contact us or we will do it for you.
                    </p>
                    <button className="border text-black border-white px-4 py-1 rounded hover:bg-white hover:text-purple-500 transition font-semibold">
                        Request a call
                    </button>
                </div>
                <div className="flex justify-between items-center max-w-7xl mx-auto mb-8 px-2">
                    <section className="flex gap-4">
                        <i className="fab fa-facebook-f cursor-pointer hover:text-gray-300 text-lg" aria-label="Facebook" role="img" />
                        <i className="fab fa-instagram cursor-pointer hover:text-gray-300 text-lg" aria-label="Instagram" role="img" />
                        <i className="fab fa-twitter cursor-pointer hover:text-gray-300 text-lg" aria-label="Twitter" role="img" />
                    </section>

                    <section className="flex gap-4 social icons  ">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-7 bg-white rounded px-1 py-0.5" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-7 bg-white rounded px-1 py-0.5" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-7 bg-white rounded px-1 py-0.5" />
                    </section>
                </div>

            </div>


            <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl mx-auto mt-8 gap-4">
                <div>
                    <p className="text-sm opacity-80 text-center w-full">
                        © All copyrights are reserved. B-World 2022.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;