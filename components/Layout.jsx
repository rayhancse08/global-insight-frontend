import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Sidebar on the Left */}
                    <aside className={styles.sidebar}>
                        <SideBar />
                    </aside>

                    {/* Main Content */}
                    <section className={styles.content}>
                        {children}
                    </section>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
