import React from "react";

const BlogPost = () => {
    return (
        <div className="bg-white text-black">
            <section id="blog" className="max-w-3xl mx-auto px-6 py-12 sm:py-24">
                {/* JSON-LD Schema for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": "Adventures, Algorithms, and Accidental Food Poisoning!",
                            "datePublished": "2025-02-03",
                            "dateModified": "2025-03-25",
                            "description": "Started the year with a mountain hike, surprised friends and family, battled LeetCode, and got food poisoning—2025 is already one for the books!",
                            "image": "https://?title=Adventures, Algorithms, and Accidental Food Poisoning!",
                            "url": "",
                            "author": { "@type": "Person", "name": "Subhashish Nayak" }
                        })
                    }}
                />

                <h1 className="title font-medium text-2xl tracking-tighter">New Beginnings: My First Blog! 🌝</h1>
                <div className="flex justify-between items-center mt-2 mb-8 text-sm text-gray-600 dark:text-gray-400">
                    <p>March 3, 2025 (2w ago)</p>
                </div>

                <article className="prose dark:prose-invert">
                    <h3 className="font-sans text-2xl font-bold mb-4">Hey there, fellas!</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        The past few days have been an absolute rollercoaster, and I can't wait to share everything with you! Since the start of the year, my life has completely flipped—I’ve been <strong className="text-black">exploring new places, connecting with amazing people, and, most importantly, cutting out anyone who brings unnecessary drama</strong> (because, let’s be real, life is already hectic enough on its own).
                    </p>

                    <hr className="text-gray-300 mt-10 mb-10" />
                    <h3 className="font-sans text-2xl font-bold mb-4">The Self-Improvement Arc</h3>
                    <p className="text-gray-600 dark:text-gray">
                        In the spirit of being a <strong className="text-black">better version of myself</strong> (or at least pretending to be one), I decided to start <a href="" className="text-black">LeetCode, and Emerging myself in Coding</a>...
                    </p>

                    <hr className="text-black mt-10 mb-10"/>



                    <h3 className="font-sans text-2xl font-bold mb-4">Capturing Moments – The Start of an Adventure</h3>
                    <h3><strong>The Travel Chronicles: Planes, Friends, and Mady Vibes!!</strong></h3>
                    <p className="text-gray-600 dark:text-gray-400">Every journey begins with a single step, and mine started with a blend of spirituality, friendship, and exploration.</p>

                    
                        <h3 className="mt-4 "><strong>📍 Konark, Puri Jagannath Temple Visit:</strong> <p className="text-gray-600">My first stop was the stunning <strong className="text-black">Konark Sun Temple</strong>, a symbol of history and architectural brilliance. Walking through its grand stone carvings, I felt an undeniable connection to the past, imagining the countless stories these walls could tell.</p></h3>

                        <h3 className="mt-4"><strong>🍃 Bhubaneswar Evening Strolls & the calmy moon:</strong><p className="text-gray-600"> As the sun set over <strong className="text-black">Bhubaneswar</strong>, the city’s vibrant streets and calming vibes made for a perfect escape from the daily grind.</p></h3
                        >
                        <h3 className="mt-4"><strong> ❄️▶️ -Chilling with Friends:</strong><p className="text-gray-600"> What’s an adventure without great company? From casual hangouts to late-night conversations, these moments reminded me of the importance of surrounding yourself with the right people.</p></h3>

                        <h3 className="mt-4"><strong>📹 Candid Memories in Motion:</strong> <p className="text-gray-600">Of course, a trip isn't complete without capturing it on video!</p></h3>
                    

                    <hr className="text-gray-300 mt-10 mb-10" />

                    <h3 className=" mb-4 font-sans text-2xl font-bold"><strong>Photo Dump 📸</strong></h3>
                    <div className="grid grid-cols-3 gap-4 mb-12">
                        <img src="/companylogo/1712662641232.jpg" alt="Konark temple visit" className="w-full h-full object-cover rounded" />
                        <img src="/companylogo/1712662641184.jpg" alt="We are chilling" className="w-full h-full object-fill rounded" />
                        <img src="/companylogo/20240704_200047.jpg" alt="Bhubaneswar evening" className="w-full h-full rounded" />
                        <video controls className="h-auto w-full rounded">
                            <source src="/companylogo/jaga.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <img src="/companylogo/20240826_172239.jpg" alt="We are chilling" className="w-auto lg:mt-30 mt-15 lg:mb-15 h-auto object-cover rounded" />
                        <img src="/companylogo/20240817_203501.jpg" alt="We are chilling" className="w-full h-auto object-fill rounded" />
                        <img src="/companylogo/20240817_235331.jpg" alt="We are chilling" className="w-full h-full object-cover rounded" />
                        <img src="/companylogo/20240716_230625.jpg" alt="We are chilling" className="w-full h-full object-fill rounded" />
                    </div>

                    <hr className="text-gray-300 mt-10 "/>

                </article>
            </section>
        </div>
    );
};

export default BlogPost;
