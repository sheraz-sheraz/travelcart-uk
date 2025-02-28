export default function Testimonials() {
    const testimonials = [
        {
            title: "Best on the market",
            date: "2 days ago",
            review: "I love this product because the support is great. Please ...",
            name: "Worldtraveler",
        },
        {
            title: "Best on the market",
            date: "2 days ago",
            review: "I love this product because the support is great. Please ...",
            name: "Worldtraveler",
        },
        {
            title: "Best on the market",
            date: "2 days ago",
            review: "I love this product because the support is great. Please ...",
            name: "Worldtraveler",
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 flex justify-between">
                {/* Trustpilot Logo & Heading */}
                <div className="mb-6">
                    <div className="flex items-center space-x-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="green">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-lg font-semibold">Trustpilot</span>
                    </div>
                    <h2 className="text-3xl font-bold mt-2">Don't take our word for it</h2>
                    <h3 className="text-xl font-semibold text-gray-700">
                        <span className="text-black font-bold">See what our customers say about us:</span>
                    </h3>
                </div>

                {/* Testimonials */}
                <div className="flex flex-row-reverse overflow-x-auto gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-[#F8F8F8] shadow-lg rounded-2xl p-6 min-w-[300px]">
                            <div className="text-green-500 text-5xl mb-2">“</div>
                            <h3 className="text-lg font-semibold">{testimonial.title}</h3>
                            <div className="flex items-center space-x-2 text-green-500 font-semibold">
                                <span className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="green">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </span>
                                <span className="text-gray-500 text-sm">{testimonial.date}</span>
                            </div>
                            <p className="text-gray-600 mt-2">{testimonial.review}</p>
                            <p className="font-bold mt-4">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
