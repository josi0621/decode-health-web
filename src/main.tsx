import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Home.tsx'
import AboutUs from './AboutUs.tsx'
import Login from './Login.tsx'
import SignUp from "./SignUp.tsx";

createRoot(document.getElementById('root')!).render(
    <Router>
        <div>
              {/* Central Nav Bar */}
            <nav className="navbar">
                  {/* Logo */}
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="Logo" className="logo-img" />
                </Link>

                  {/* Navigation Links */}
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/AboutUs">About Us</Link>
                    </li>
                </ul>

                <div>
                    {localStorage.getItem('username') ? (
                        <span>Welcome, {localStorage.getItem('username')}</span>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="nav-button">Login</button>
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            {/* Define Routes */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
                <Route path="/login" element={<Login/>}/> {/* Add route for Login page */}
                <Route path="/signup" element={<SignUp/>}/> {/* Route for SignUp page */}
            </Routes>
        </div>
    </Router>
)
