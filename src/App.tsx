import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home as HomeIcon, Info, Mail } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import styles from './Navigation.module.css';

const App = () => {
    return (
        <Router>
            <nav className={styles.navbar}>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                >
                    <HomeIcon size={20} />
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                >
                    <Info size={20} />
                    About
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                >
                    <Mail size={20} />
                    Contact
                </NavLink>
            </nav>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
