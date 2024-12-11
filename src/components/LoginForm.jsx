import React from 'react';

export default function LoginForm({ handleSubmit, formData, handleFormToggle, handleChange, isLogin }) {
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                    <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Signup'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>
                    <div className="mt-3 text-center">
                        <small>
                            {isLogin ? "Don't have an account? " : 'Already have an account? '}
                            <button
                                type="button"
                                className="btn btn-link p-0"
                                onClick={handleFormToggle}
                            >
                                {isLogin ? 'Sign Up' : 'Login'}
                            </button>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}
