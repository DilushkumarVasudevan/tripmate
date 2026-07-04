import { FaMapLocationDot } from 'react-icons/fa6'
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">
                    <div className="footer-brand-logo">

                        <FaMapLocationDot className="footer-logo" />

                        <h2>
                            Trip<span>Mate</span>
                        </h2>

                    </div>

                    <p>
                        AI-powered collaborative travel planning platform that
                        helps friends create unforgettable journeys together.
                    </p>
                </div>

                <div className="footer-links">

                    <h3>Quick Links</h3>

                    <ul>
                        <li>Features</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                </div>

                <div className="footer-connect">

                    <h3>Connect</h3>

                    <ul>
                        <li>GitHub</li>
                        <li>LinkedIn</li>
                    </ul>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    Built with ❤️ using React, TypeScript & Node.js
                </p>

                <p>
                    © {new Date().getFullYear()} TripMate. All rights reserved.
                </p>

            </div>

        </footer>
    );
}