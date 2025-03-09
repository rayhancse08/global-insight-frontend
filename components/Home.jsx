import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HomeCarousel.module.css"; // Import CSS module

const HomeCarousel = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const carouselRefs = useRef(new Map()); // Use Map for better ref handling

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("https://globalinsighthubs.com/api/home/");
                const data = await res.json();
                setCategories(data.categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const scrollLeft = (id) => {
        const carousel = carouselRefs.current.get(id);
        if (carousel) {
            carousel.scrollBy({ left: -carousel.offsetWidth, behavior: "smooth" });
        }
    };

    const scrollRight = (id) => {
        const carousel = carouselRefs.current.get(id);
        if (carousel) {
            carousel.scrollBy({ left: carousel.offsetWidth, behavior: "smooth" });
        }
    };

    if (loading) return <p className="text-center text-gray-500 text-lg">Loading categories...</p>;

    return (
        <div className="container mx-auto p-4">
            {categories.map(
                (category) =>
                    category.posts.length > 0 && (
                        <div key={category.id} className="mb-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">{category.name}</h2>

                            <div className={styles.carouselContainer}>
                                {/* Left Scroll Button */}
                                <button
                                    className={`${styles.scrollButton} hidden md:flex`}
                                    onClick={() => scrollLeft(category.id)}
                                    aria-label={`Scroll left in ${category.name} carousel`}
                                >
                                    ◀
                                </button>

                                {/* Carousel Wrapper */}
                                <div
                                    ref={(el) => el && carouselRefs.current.set(category.id, el)}
                                    className={styles.carouselWrapper}
                                >
                                    {category.posts.map((post, index) => (
                                        <div key={post.id} className={styles.card}>
                                            {post.thumbnail && (
                                                <Image
                                                    src={post.thumbnail}
                                                    alt={post.title}
                                                    width={200}
                                                    height={200}
                                                    className={styles.cardImage}
                                                    priority={index === 0} // Only prioritize the first image (above the fold)
                                                    loading={index === 0 ? "eager" : "lazy"} // Eager for first, lazy for others
                                                    placeholder={index === 0 ? "empty" : "blur"} // Blur effect for lazy-loaded images
                                                    blurDataURL={index === 0 ? undefined : "/path-to-placeholder.jpg"} // Use placeholder for lazy images
                                                />
                                            )}
                                            <div className={styles.cardBody}>
                                                <h6 className="text-md font-semibold text-gray-700">{post.title}</h6>
                                                <Link href={`/blog/${post.slug}`} className={styles.readMoreButton}>
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Right Scroll Button */}
                                <button
                                    className={`${styles.scrollButton} hidden md:flex`}
                                    onClick={() => scrollRight(category.id)}
                                    aria-label={`Scroll right in ${category.name} carousel`}
                                >
                                    ▶
                                </button>
                            </div>
                        </div>
                    )
            )}
        </div>
    );
};

export default HomeCarousel;
