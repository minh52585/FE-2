const Footer = () => {
    return (
        <footer className="bg-purple-400 text-white pt-10 pb-6 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 border-b border-purple-300 pb-8">
                {/* Logo + Socials */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">B-World</h2>
                    <div className="flex gap-4">
                        <i className="fab fa-facebook-f cursor-pointer hover:text-gray-300" aria-label="Facebook" role="img" />
                        <i className="fab fa-instagram cursor-pointer hover:text-gray-300" aria-label="Instagram" role="img" />
                        <i className="fab fa-twitter cursor-pointer hover:text-gray-300" aria-label="Twitter" role="img" />
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="font-semibold mb-3">Categories</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:underline">Psychology</a></li>
                        <li><a href="#" className="hover:underline">Self-Help</a></li>
                        <li><a href="#" className="hover:underline">Romance</a></li>
                        <li><a href="#" className="hover:underline">Mystery</a></li>
                    </ul>
                </div>

                {/* For Kids */}
                <div>
                    <h3 className="font-semibold mb-3">For kids</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:underline">Games</a></li>
                        <li><a href="#" className="hover:underline">Comics</a></li>
                        <li><a href="#" className="hover:underline">Fantasy</a></li>
                    </ul>
                </div>

                {/* E-Books */}
                <div>
                    <h3 className="font-semibold mb-3">E-Books</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:underline">Fiction</a></li>
                        <li><a href="#" className="hover:underline">Historical</a></li>
                        <li><a href="#" className="hover:underline">Horror</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-3">Help & Contacts</h3>
                    <ul className="space-y-2 text-sm">
                        <li><i className="fas fa-phone mr-2" aria-hidden="true" /> +445 87 999 000</li>
                        <li><i className="fas fa-clock mr-2" aria-hidden="true" /> Mo-Fri, 9 AM to 11 PM</li>
                        <li><i className="fas fa-envelope mr-2" aria-hidden="true" /> b.world@store.ro</li>
                    </ul>

                    <div className="flex gap-3 mt-2 md:mt-0">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
                    </div>
                </div>
            </div>

            {/* Phần "If you have questions..." được đưa ra ngoài grid để không làm lệch layout */}
            <div className="max-w-7xl mx-auto mt-4 px-4">
                <div className="text-sm text-left">
                    <p className="mb-2 leading-relaxed">
                        If you have questions,<br />you can contact us<br />or we will do it for you.
                    </p>
                    <button className="mt-2 border border-white px-4 py-1 rounded hover:bg-white hover:text-purple-500 transition">
                        Request a call
                    </button>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="max-w-7xl mx-auto mt-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-purple-100">
                <p>© All copyrights are reserved. B-World 2022.</p>
            </div>
        </footer>
    );
};

export default Footer;
