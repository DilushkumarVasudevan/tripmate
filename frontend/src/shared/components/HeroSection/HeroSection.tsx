import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/HeroImage.png";
import './HeroSection.css'

export default function HeroSection() {

    return (

        <section className="hero-section">
            <div className="hero-content">
                <h1>
                    Plan Trips Together.
                    <br />
                    Better. <span>Smarter.</span> Easier.
                </h1>
                <p>AI-powered collaborative travel planning platform for unforgettable journeys. </p>
            <div className="hero-actions">
                <Link to="/login" className="btn">
                    Get Started
                </Link>

                <Link to="/register" className="btn btn-secondary">
                    Sign Up
                </Link>
            </div>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Friends planning a trip together using TripMate" />
            </div>
        </section>

    )
}