import heroImage from "../../../assets/images/HeroImage.png";
import './HeroSection.css';



type HeroSectionProps = {
    onLoginClick: () => void;
    onRegisterClick: () => void;
};

export default function HeroSection({ onLoginClick, onRegisterClick }: HeroSectionProps) {

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

                    <button
                        className="btn"
                        onClick={onLoginClick}
                    >
                        Get Started
                    </button>


                    <button
                        className="btn btn-secondary"
                        onClick={onRegisterClick}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Friends planning a trip together using TripMate" />
            </div>
        </section>

    )
}