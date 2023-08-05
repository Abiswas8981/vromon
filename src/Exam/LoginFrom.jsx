import React, { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username.trim() === '' || password.trim() === '') {
            setErrorMessage('Please fill in all fields.');
            setSuccessMessage('');
        } else if (password.length < 8) {
            setSuccessMessage('');
            setErrorMessage('Password should be at least 8 characters long.');

        } else {
            setErrorMessage('');
            setSuccessMessage('Login successful!');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {errorMessage && <div>{errorMessage}</div>}
            {successMessage && <div>{successMessage}</div>}
        </div>
    );
}
export default LoginForm;
