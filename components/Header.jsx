import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <Link href="/" className={styles.logo}>
                    <img src="/logo.jpg" alt="Global Insight Hubs" className={styles.logoImage} />
                </Link>
                <button
                    className={styles.menuButton}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <nav className={`${styles.navbar} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link href="/">Home</Link></li>
                    <li className={styles.navItem}>
                        <button
                            className={styles.dropdownTrigger}
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                        >
                            Category ▼
                        </button>
                        {isDropdownOpen && (
                            <ul className={styles.dropdownMenu}>
                                {[
                                    "Health & Wellness", "Travel", "Lifestyle & Culture",
                                    "Environments", "Food & Recipes", "Sports",
                                    "Technology", "World News", "বিশ্ব সংবাদ"
                                ].map((category, index) => (
                                    <li key={index}>
                                        <Link className={styles.dropdownItem} href={`/blogs/category/${index + 1}/`}>
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <li className={styles.navItem}><Link href="/blogs/category/7/">Technology</Link></li>
                    <li className={styles.navItem}><Link href="/blogs/category/6/">Sports</Link></li>
                </ul>
            </nav>
        </header>
    );
}
