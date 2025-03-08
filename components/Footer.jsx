import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Left Section: About */}
                <div className={styles.section}>
                    <h3>Global Insight Hub</h3>
                    <p>
                        At Global Insight Hub, we are dedicated to bringing you the latest news,
                        useful insights, and more.
                    </p>
                </div>

                {/* Middle Section: Customer Service */}
                <div className={styles.section}>
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Disclaimer</a></li>
                    </ul>
                </div>

                {/* Right Section: Social Media */}
                <div className={styles.section}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <FaFacebookF className={styles.icon} />
                        <FaTwitter className={styles.icon} />
                        <FaGoogle className={styles.icon} />
                        <FaInstagram className={styles.icon} />
                        <FaLinkedinIn className={styles.icon} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
