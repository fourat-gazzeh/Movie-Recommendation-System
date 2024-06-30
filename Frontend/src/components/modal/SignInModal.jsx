// SignInModal.js
import React, { useState } from 'react';
import './signInModal.scss';

const SignInModal = ({ toggleModal }) => {
    const [isSignUp, setIsSignUp] = useState(false); // State to toggle between SignIn and SignUp

    const handleToggle = () => {
        setIsSignUp(!isSignUp); // Toggle the form view
    };

    return (
        <div className="modal-overlay" onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {isSignUp ? (
                    <>
                        <h2>Sign Up</h2>
                        <form>
                            <div className="input-group">
                                <label>Username</label>
                                <input type="text" required />
                            </div>
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" required />
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <input type="password" required />
                            </div>
                            <button type="submit" className="sign-in-modal-button">Sign Up</button>
                        </form>
                        <p className="toggle-option">Already have an account? <span onClick={handleToggle}>Sign In</span></p>
                    </>
                ) : (
                    <>
                        <h2>Sign In</h2>
                        <form>
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" required />
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <input type="password" required />
                            </div>
                            <button type="submit" className="sign-in-modal-button">Sign In</button>
                        </form>
                        <p className="toggle-option">Don't have an account? <span onClick={handleToggle}>Sign Up</span></p>
                    </>
                )}
            </div>
        </div>
    );
};

export default SignInModal;
