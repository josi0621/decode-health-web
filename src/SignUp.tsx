import './SignUp.css';
import { Link } from 'react-router-dom';
import {useState} from "react";
import axios from 'axios';


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('http://localhost:3000/signup', {username, email, password})
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)})
    };

    return (
        <div className="signup-container">
            <h2>Create an Account</h2>
            <form className="signup-form" onSubmit={handleSignUp}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Sign Up</button>
            </form>

            <div className="login-link">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;