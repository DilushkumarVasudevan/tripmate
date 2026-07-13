import "./LoginForm.css";

export default function LoginForm() {
    return (
        <div className="login-form">

            <h2>Welcome Back</h2>

            <p>
                Sign in to continue planning your next adventure.
            </p>

            <form>

                <div className="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                </div>

                <div className="form-group">

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                    />

                </div>

                <button type="submit">
                    Sign In
                </button>

            </form>

            <div className="divider">

                <span>OR</span>

            </div>

            <button className="social-button">
                Continue with Google
            </button>

            <button className="social-button">
                Continue with GitHub
            </button>

            <div className="auth-switch">

                <span>
                    Don't have an account?
                </span>

                <button type="button">
                    Create Account
                </button>

            </div>

        </div>
    );
}