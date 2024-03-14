
import React, { useState } from 'react';
import './Loginpage.css';

function Loginpage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here
        console.log(`Username: ${username}, Password: ${password}`);
    };

    return (
    <form className="login-page" onSubmit={handleSubmit}>
        <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="LOGIN" />
     </form>
    );
}

export default Loginpage;
