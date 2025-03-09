import { useState } from 'react';
import styles from './SideBar.module.css';
import { Menu, X } from 'lucide-react';

const categories = [
    "Health & Wellness", "Travel", "Lifestyle & Culture",
    "Environments", "Food & Recipes", "Sports",
    "Technology", "World News", "বিশ্ব সংবাদ"
];

export default function Categories() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle categories">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Container */}
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Popular <br /> Categories</h2>
                    <ul className={styles.categoryList}>
                        {categories.map((category, index) => (
                            <li key={index} className={styles.categoryItem}>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Overlay - Only shows on mobile */}
            {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}
        </>
    );
}
