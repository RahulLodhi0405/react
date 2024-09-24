import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext); // Ensure that setUser is defined in the context

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        setUser({ username, password }); // Update context with user info
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                {" "}
                <input
                    type="password" // Changing to password type for security
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Submit</button> {/* Use type="submit" for form submission */}
            </form>
        </div>
    );
}

export default Login;
